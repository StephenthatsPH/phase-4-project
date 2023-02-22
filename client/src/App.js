import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AuthPage from "./components/UserAuth/AuthPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetch('/me').then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
        }
      })
  }, []);

  if (user) {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
  } else {
    return <AuthPage onLogin={setUser} />;
  }
}

export default App;