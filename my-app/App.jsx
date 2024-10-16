import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "./app/core/theme";
import StartScreen from "./app/screens/StartScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ResetPasswordScreen from "./app/screens/ResetPasswordScreen";
import HomeScreen from "./app/screens/HomeScreen";
import FeaturesScreen from "./app/screens/Features/FeaturesScreen";
import ResumeUploadScreen from "./app/screens/Features/ResumeUploadScreen";
import ResumeDetailsScreen from "./app/screens/Features/ResumeDetailsScreen";
import FormScreen from "./app/screens/Features/interviewpreparation/FormScreen";
// import Form from "./app/screens/Features/interviewpreparation/Form";
//import Form from "./app/screens/Features/interviewpreparation/Form";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="FeaturesScreen" component={FeaturesScreen} />
          <Stack.Screen name="ResumeUploadScreen" component={ResumeUploadScreen} />
          <Stack.Screen name="ResumeDetailsScreen" component={ResumeDetailsScreen} />
          {/* <Stack.Screen name="Form" component={Form} /> */}
          
          <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
