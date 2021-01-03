import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>Hello from Bucketit!</p>
      <Button variant="contained" color="primary" disableElevation>
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
