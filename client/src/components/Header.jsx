import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import AuthPage from "./UserAuth/AuthPage";
import Home from "./Home";
import ProgramsList from "./ProgramsList";
import UserPrograms from "./UserPrograms";

function Header() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("/hello")
            .then((r) => r.json())
            .then((data) => setCount(data.count));
    }, []);

    return (
        <>
            <header className="App-header">
                <nav className="navbar">
                    <h1>Rank List Builder</h1>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/home"> Home</NavLink>
                    <NavLink to="/programslist"> Programs</NavLink>
                    <NavLink to="/userprograms"> User's Programs</NavLink>
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
                </nav>
            </header>
        </>
    )
}

export default Header;