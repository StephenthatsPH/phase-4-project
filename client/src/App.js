import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AuthPage from "./components/UserAuth/AuthPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetch('/me').then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
  }, []);

  function handleLogout() {
    fetch('/logout', { method: 'DELETE', }).then((r) => {
        if (r.ok) setUser(null);
    });
}

  if (!user) {
    return <AuthPage onLogin={setUser} />
  } else {
  return (
    <Router>
      <div className="App">
        <Header onLogout={handleLogout} currentUser={user} setCurrentUser={setUser}/>
      </div>
    </Router>
  );
  }
}

export default App;