import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import UserPrograms from "./UserPrograms";
import ProgramsPage from "./ProgramsPage";

function Header({ onLogout }) {
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE',
        }).then(() => onLogout());
    }
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     fetch("/hello")
    //         .then((r) => r.json())
    //         .then((data) => setCount(data.count));
    // }, []);

    return (
        <>
            <header className="App-header">
                <nav className="navbar">
                    <h1>Rank List Builder</h1>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/programs"> Programs</NavLink>
                    <NavLink to="/user/programs"> User's Programs</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/programs">
                            <ProgramsPage />
                        </Route>
                        <Route path="/user/programs">
                            <UserPrograms />
                        </Route>
                    </Switch>
                </nav>
            </header>
        </>
    )
}

export default Header;