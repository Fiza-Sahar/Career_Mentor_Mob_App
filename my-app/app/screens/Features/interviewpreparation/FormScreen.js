import React, { useState } from 'react';
import './Form.css';

const job_titles = [
  "Select a Role",
  "Data Scientist",
  "QA Engineer",
  "Project Manager",
  "Software Engineer",
  "DevOps Engineer",
  "Web Developer"
];

const FormScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState(''); 
  const [difficulty, setDifficulty] = useState('');
  const [step, setStep] = useState(1);
  const [generatedQuestion, setGeneratedQuestion] = useState('');
  const [roleError, setRoleError] = useState('');
  const [difficultyError, setDifficultyError] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [grades, setGrades] = useState([]); // Track grades for average calculation
  const [interviewCompleted, setInterviewCompleted] = useState(false);
  const [totalQuestions] = useState(3); // Total number of questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextStep = async () => {
    setRoleError('');
    setDifficultyError('');

    if (role === '' || role === "Select a Role") {
      setRoleError('Please select a role.');
      return;
    }
    
    if (difficulty === '') {
      setDifficultyError('Please select a difficulty level.');
      return;
    }

    setChatHistory([...chatHistory, { sender: 'User', text: `Role: ${role}, Difficulty: ${difficulty}` }]);
    setStep(2);
    await handleGenerateQuestion();
  };

  const handleGenerateQuestion = async () => {
    setIsLoading(true);
    setApiError('');
    try {
      const response = await fetch('http://localhost:5000/api/get_interview_question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job_title: role })
      });
      const data = await response.json();
      const question = data.question || 'No question generated';

      setGeneratedQuestion(question);
      setChatHistory([...chatHistory, { sender: 'Bot', text: question }]);
    } catch (error) {
      setApiError('Failed to generate question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEvaluateAnswer = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    const evaluationResponse = await fetch('http://localhost:5000/api/evaluate_answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: generatedQuestion, answer: userAnswer })
    });
    
    const evaluationData = await evaluationResponse.json();
    const grade = evaluationData.grade || 0;

    setGrades((prevGrades) => [...prevGrades, grade]); // Store grades for average calculation
    setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'User', text: userAnswer },
        { sender: 'Bot', text: `Your answer graded: ${grade}` }
    ]);
    
    setUserAnswer(''); // Clear input after submission

    // Check if interview is completed
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
      await handleGenerateQuestion(); // Load the next question
    } else {
      setInterviewCompleted(true); // Mark the interview as completed
    }
    setIsLoading(false); // Stop loading
  };

  const handleStartAgain = () => {
    // Reset state for starting again
    setFirstName('');
    setLastName('');
    setRole('');
    setDifficulty('');
    setStep(1);
    setChatHistory([]);
    setUserAnswer('');
    setGrades([]);
    setCurrentQuestionIndex(0);
    setInterviewCompleted(false);
  };

  // Calculate average grade and round it
  const averageGrade = grades.length > 0 ? Math.round(grades.reduce((a, b) => a + b, 0) / grades.length) : 0;

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      {step === 2 && ( // Sidebar only shows in the chatbot screen
        <div style={{
          width: '250px',
          borderRight: '1px solid #ccc',
          padding: '10px',
          overflowY: 'auto',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0
        }}>
          <h2>Chat History</h2>
          {chatHistory.map((message, index) => (
            <div key={index}>
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>
      )}

      <div className="form-container" style={{ marginLeft: step === 2 ? '260px' : '20px', padding: '20px' }}>
        {step === 1 && (
          <div>
            <h2>Enter Your Information (Optional)</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleNextStep();
              }}
            >
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                />
              </label>
              <label>
                Choose the role you are interviewing for:
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  {job_titles.map((title, index) => (
                    <option key={index} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
                {roleError && <span className="error">{roleError}</span>}
              </label>
              <label>
                Select Difficulty:
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                {difficultyError && <span className="error">{difficultyError}</span>}
              </label>
              <button type="submit" style={{  backgroundColor: "#007bff", 
              color: "white", 
              border: "4px solid #007bff", 
              padding: "10px 20px", 
              margin: "10px", 
              borderRadius: "8px", 
              cursor: "pointer",
              }}>Start Interview</button>

            </form>
          </div>
        )}

{step === 2 && !interviewCompleted && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'center', // Center horizontally
              alignItems: 'center',     // Center vertically
              marginBottom: '20px'      // Add space below the image
            }}>
              <img 
                src="https://freesvg.org/img/1538298822.png" 
                alt="Question Icon" 
                style={{ width: '100px', height: '100px' }} // Adjust size as needed
              />
            </div>
            {/* Rectangular Box for Text */}
            <div style={{
              border: '2px solid #000', // Changed to black
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              marginBottom: '20px',
              width: '100%',
            }}>
              Chatbot developed by Career Mentor
            </div>

            <div style={{
              border: '2px solid #000', // Changed to black
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              marginBottom: '20px',
              width: '100%',
            }}>
              {isLoading ? (
                <div>Loading question...</div>
              ) : (
                <div>{generatedQuestion}</div>
              )}
            </div>

            <form onSubmit={handleEvaluateAnswer}>
              <label>
                Your Answer:
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  rows="4"
                  cols="50"
                  required
                />
              </label>
              <br />
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "4px solid #007bff",
                  padding: "10px 20px",
                  margin: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Evaluating...' : 'Submit Answer'}
              </button>
              {apiError && <p className="error">{apiError}</p>}
            </form>
          </div>
        )}

        {interviewCompleted && (
          <div>
            <h2>Interview Complete!</h2>
            <p>Thank you for completing the interview. Your average grade is {averageGrade}.</p>
            <button
              onClick={handleStartAgain}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "4px solid #007bff",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Start Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormScreen;
