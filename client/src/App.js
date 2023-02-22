import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);
  const [programs, setPrograms] = useState([]);

  // useEffect(() => {
  //     fetch('/programs')
  //       .then((res) => res.json())
  //       .then(data => {
  //         console.log(data);
  //         setPrograms(data);
  //       })
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;