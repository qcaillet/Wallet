import ContentApp from "./views/Home";
import ThemeHandler from "./theme/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeHandler>
      <CssBaseline />
      <NavBar   />
      <ContentApp />
    </ThemeHandler>
  );
}

export default App;
