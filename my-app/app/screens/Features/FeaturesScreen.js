import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Button from "../../components/Button"; // Assuming this is your custom Button component
import BackButton from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";

export default function FeaturesScreen() {
  const navigation = useNavigation();
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to handle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.title}>Your Career, Our Guidance</Text>
      <Text style={styles.subtitle}>
        Unleash Your Career Potential with Our All-in-One Platform.
      </Text>

      <View style={styles.categoriesContainer}>
        {/* ResumeChecker Category */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategories.includes("ResumeChecker") && styles.selectedCategory,
          ]}
          onPress={() => toggleCategory("ResumeChecker")}
        >
          <Image
            source={require("../../../assets/items/ResumeChecker.jpg")} // Correct image path
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Resume Analyzer</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("ResumeUploadScreen")}
            style={styles.button}
            textColor="#fff"
          >
            Get Started
          </Button>
        </TouchableOpacity>

        {/* ResumeBuilder Category */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategories.includes("ResumeBuilder") && styles.selectedCategory,
          ]}
          onPress={() => toggleCategory("ResumeBuilder")}
        >
          <Image
            source={require("../../../assets/items/ResumeBuilder.jpg")} // Correct image path
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Resume Builder</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("ResumeBuilder")}
            style={styles.button}
            textColor="#fff"
          >
            Get Started
          </Button>
        </TouchableOpacity>

        {/* InterviewPreparation Category */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategories.includes("InterviewPreparation") && styles.selectedCategory,
          ]}
          onPress={() => toggleCategory("InterviewPreparation")}
        >
          <Image
            source={require("../../../assets/items/InterviewPreparation.jpg")} // Correct image path
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Interview Preparation</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("InterviewPreparation")}
            style={styles.button}
            textColor="#fff"
          >
            Get Started
          </Button>
        </TouchableOpacity>

        {/* JobFinding Category */}
        <TouchableOpacity
          style={[
            styles.categoryItem,
            selectedCategories.includes("JobFinding") && styles.selectedCategory,
          ]}
          onPress={() => toggleCategory("JobFinding")}
        >
          <Image
            source={require("../../../assets/items/JobFinding.jpg")} // Correct image path
            style={styles.icon}
          />
          <Text style={styles.subtitle}>Job Finding</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("JobFinding")}
            style={styles.button}
            textColor="#fff"
          >
            Get Started
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 100,
    marginBottom: 15,
    color: "#333333",
  },
  subtitle: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 20,
    fontWeight: "bold",
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around", // Space evenly between items
  },
  categoryItem: {
    width: "45%", // Card width
    backgroundColor: "#f9f9f9",
    borderRadius: 12, // Softer edges for modern look
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Space between rows
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCategory: {
    borderColor: "#007bff", // Highlight selected card
    backgroundColor: "#e6f0ff", // Light blue background for selected
  },
  icon: {
    width: 100, // Adjust icon size
    height: 100,
    marginBottom: 10, // Space between icon and text
  },
  button: {
    backgroundColor: "#007bff", // Customize button color
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10, // Add some padding to the sides
    marginTop: 10, // Space above button
    width: "100%",
    elevation: 2, // Button shadow effect
  },
});
