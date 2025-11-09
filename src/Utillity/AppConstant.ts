import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const AppFont = {
  bold: "Roboto-Bold",
  boldItalic: "Roboto-BoldItalic",
  italic: "Roboto-Italic",
  lightItalic: "Roboto-LightItalic",
  medium: "Roboto-Medium",
  regular: "Roboto-Regular",
};

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "rgb(120, 69, 172)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(240, 219, 255)",
    onPrimaryContainer: "rgb(44, 0, 81)",
    secondary: "rgb(102, 90, 111)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(237, 221, 246)",
    onSecondaryContainer: "rgb(33, 24, 42)",
    tertiary: "rgb(128, 81, 88)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 217, 221)",
    onTertiaryContainer: "rgb(50, 16, 23)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(29, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(29, 27, 30)",
    outline: "rgb(124, 117, 126)",
  },
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "rgb(220, 184, 255)",
    onPrimary: "rgb(71, 12, 122)",
    primaryContainer: "rgb(95, 43, 146)",
    onPrimaryContainer: "rgb(240, 219, 255)",
    secondary: "rgb(208, 193, 218)",
    onSecondary: "rgb(54, 44, 63)",
    secondaryContainer: "rgb(77, 67, 87)",
    onSecondaryContainer: "rgb(237, 221, 246)",
    background: "rgb(29, 27, 30)",
    onBackground: "rgb(231, 225, 229)",
    surface: "rgb(29, 27, 30)",
    onSurface: "rgb(231, 225, 229)",
    outline: "rgb(150, 142, 152)",
  },
};