import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#2F2F2F",
    primary: "#07498E", // Updated primary color for buttons
    secondary: "#1F2732",
    error: "#ED1C24",
  },
};
