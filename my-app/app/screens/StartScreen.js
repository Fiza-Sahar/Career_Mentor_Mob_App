import React from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome to Career Mentor</Header>
      <Paragraph>
     
      Check and Build a resume, practice interviews, and land your dream job with personalized support.
      
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
        // onPress={() => navigation.navigate("ResumeUploadScreen")}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Create an account
      </Button>
    </Background>
  );
}
