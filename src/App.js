import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
// import RegisterPage from "./pages/RegisterPage";
import Routes from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
