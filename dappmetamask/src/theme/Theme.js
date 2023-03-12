import { createTheme } from "@mui/material/styles";

const THEME_TYPE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

const LOCAL_STORAGE_KEY = "isDark";

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const DARK_THEME = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#206D97",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#f7f2f2",
    },
  },
});

const LIGHT_THEME = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#198381",
    },
    secondary: {
      main: "#26a27b",
    },
    background: {
      default: "#f9f6f6",
    },
    text: {
      primary: "#141414",
    },
  },
});

export { DARK_THEME, LIGHT_THEME, THEME_TYPE, LOCAL_STORAGE_KEY };
