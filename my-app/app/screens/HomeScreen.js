import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

// Correct path to the image file with file extension
import CareerImage from "../../assets/items/CareerImage.png"; // Ensure the file extension is correct
import BackButton from "../components/BackButton";

export default function HomeScreen({ navigation }) {
  return (

    <View style={styles.background}>
      {/* Add the BackButton here */}
      <BackButton goBack={navigation.goBack} />

      {/* Display the image */}
      <Image source={CareerImage} style={styles.image} resizeMode="contain" />

      {/* Text content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Career, Our Guidance</Text>
        <Text style={styles.subtitle}>
          Craft a winning resume, conquer interviews, and land your dream job – all
          in one easy-to-use platform with personalized guidance.
        </Text>
      </View>

      {/* Button */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate("FeaturesScreen")}
        style={styles.button}
        textColor="#007bff" // Set the text color to blue
      >
        Get Started
      </Button>
    </View>
  );
}

// Styles for the screen components
const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the view takes up the whole screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#007bff', // Set background color
  },
  image: {
    width: 200, // Adjust width based on screen size
    height: 150, // Adjust height based on screen size
    marginVertical: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24, // Reduced to fit better on smaller screens
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    width: 200,
    backgroundColor: "#ffffff",
    // For white button background
  },
});
