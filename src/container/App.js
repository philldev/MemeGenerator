import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import Main from "../components/main/Main";
import { MemeProvider } from "../context/memeContext";
import "./App.css";
import MemeModalContainer from "./MemeModalContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <MemeProvider>
        <Router>
          <Nav />
          <MemeModalContainer />
          <Switch>
            <Route path="/" exact>
              <Header />
              <Main />
            </Route>
            <Route  path='/user' exact>
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </MemeProvider>
    </ThemeProvider>
  );
}

export default App;
