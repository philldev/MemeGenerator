import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "../components/header/Header";

import { MemeProvider } from "../context/memeContext";
import Main from "../components/main/Main";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <MemeProvider>
        <Header />
        <Main />
      </MemeProvider>
    </ThemeProvider>
  );
}

export default App;
