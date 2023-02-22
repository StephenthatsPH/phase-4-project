import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthPage from "./components/UserAuth/AuthPage";
import Home from "./components/Home";
import ProgramsList from "./components/ProgramsList";
import UserPrograms from "./components/UserPrograms";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;