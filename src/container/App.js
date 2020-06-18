import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import Main from "../components/main/Main";
import { MemeProvider } from "../context/memeContext";
import "./App.css";
import MemeModalContainer from "./MemeModalContainer";


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <MemeProvider>
        <Nav />
        <Header />
        <MemeModalContainer />
        <Main />
      </MemeProvider>
    </ThemeProvider>
  );
}

export default App;
