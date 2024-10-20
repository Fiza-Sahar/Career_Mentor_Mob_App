// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const ResumeChecker = () => {
//   const [inputText, setInputText] = useState('');
//   const [action, setAction] = useState('');
//   const [inputPrompt, setInputPrompt] = useState('');
//   const [response, setResponse] = useState('');
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setResponse('Response from server...');
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Enter Job Description</Text>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Input Text:</Text>
//           <TextInput
//             style={styles.textInput}
//             multiline
//             value={inputText}
//             onChangeText={(text) => setInputText(text)}
//           />
//         </View>

//         <View style={styles.inputGroup}>
//           <Text style={styles.label}>Action:</Text>
//           <Picker
//             selectedValue={action}
//             style={styles.picker}
//             onValueChange={(itemValue) => setAction(itemValue)}
//           >
//             <Picker.Item label="Select Action" value="" />
//             <Picker.Item label="Tell Me About the Resume" value="Tell Me About the Resume" />
//             <Picker.Item label="How Can I Improve my Skills" value="How Can I Improve my Skills" />
//             <Picker.Item label="What are the Keywords That are Missing" value="What are the Keywords That are Missing" />
//             <Picker.Item label="Percentage match" value="Percentage match" />
//           </Picker>
//         </View>

//         {action === 'Answer My Query' && (
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Input Prompt:</Text>
//             <TextInput
//               style={styles.textInput}
//               multiline
//               value={inputPrompt}
//               onChangeText={(text) => setInputPrompt(text)}
//             />
//           </View>
//         )}

//         <Button
//           title={isLoading ? 'Submitting...' : 'Submit'}
//           onPress={handleSubmit}
//           disabled={isLoading}
//         />

//         {error && (
//           <Text style={styles.errorText}>Error: {error}</Text>
//         )}
//       </View>

//       <View style={styles.responseContainer}>
//         {response ? (
//           <>
//             <Text style={styles.responseTitle}>Response:</Text>
//             <Text style={styles.responseText}>{response}</Text>
//           </>
//         ) : (
//           <Text>No response received.</Text>
//         )}
//       </View>

//       {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   inputGroup: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#555',
//     marginBottom: 5,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//     backgroundColor: '#fafafa',
//     minHeight: 100,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     backgroundColor: '#fafafa',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   responseContainer: {
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   responseTitle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   responseText: {
//     fontSize: 16,
//     color: '#333',
//     whiteSpace: 'pre-wrap',
//   },
// });

// export default ResumeChecker;
