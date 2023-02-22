import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthPage from "./components/UserAuth/AuthPage";
import Home from "./components/Home";
import ProgramsList from "./components/ProgramsList";
import UserPrograms from "./components/UserPrograms";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <AuthPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/programs">
            <ProgramsList />
          </Route>
          <Route path="/programs/user">
            <UserPrograms />
          </Route>
          <Route exact path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;