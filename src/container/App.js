import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Error from "../components/Error";
import Header from "../components/header/Header";
import Nav from "../components/header/Nav";
import Main from "../components/main/Main";
import MemeTemplate from "../components/main/MemeTemplate";
import { MemeProvider } from "../context/memeContext";
import "./App.css";
import About from "../components/About/About";

function App() {
  return (
    // Theme provider
    <ThemeProvider>
      <CSSReset />
      {/* App Provider */}
      <MemeProvider>
        <Router>
          <Nav />
          <Switch>
            {/* Main */}
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header />
                  <Main />{" "}
                </>
              )}
            />
            <Route exact path="/meme/:id" render={() => <MemeTemplate />} />
            <Route exact path="/user" render={() => <Dashboard />} />
            <Route exact path="/about" render={() => <About />} />
          </Switch>
        </Router>
        {/* error handler */}
        <Error />
      </MemeProvider>
    </ThemeProvider>
  );
}

export default App;
