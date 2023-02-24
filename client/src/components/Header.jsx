import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import UserPrograms from "./UserPrograms";
import ProgramsPage from "./ProgramsPage";
import UserSettings from "./UserAuth/UserSettings";

function Header({ setUser }) {
    
    
    


    function handleLogout() {
        fetch('/logout', {method: 'DELETE',}).then((r) => {
            if(r.ok) setUser(null);
        });
    }

    return (
        <>
            <header className="App-header">
                <nav className="navbar">
                    <h1>Rank List Builder</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/programs"> Programs</NavLink>
                    <NavLink to="/user/programs"> User's Programs</NavLink>
                    <NavLink to="/user/account"> Account</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                    <Switch>
                        <Route exact path="/programs">
                            <ProgramsPage />
                        </Route>
                        <Route path="/user/programs">
                            <UserPrograms />
                        </Route>                       
                        <Route path="/user/account">
                            <UserSettings />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </nav>
            </header>
        </>
    )
}

export default Header;