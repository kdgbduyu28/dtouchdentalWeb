import * as React from "react";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/loginpage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import HomePage from "./pages/homepage";

const theme = createTheme({
  palette: {
    background: {
      default: 'black',
    },
    primary: {
      main: '#000',
    },
  }
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
