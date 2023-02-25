import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import UserPrograms from "./UserPrograms";
import ProgramsPage from "./ProgramsPage";
import UserSettings from "./UserAuth/UserSettings";

function Header({ handleLogout, setUser }) {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('/programs')
            .then((res) => res.json())
            .then(data => {
                setPrograms(data);
                console.log(data);
            })
    }, []);


    function handleNewProgram(newProgram) {
        setPrograms([...programs, { ...newProgram, reviews: [] }])
    }

    function handleReview(newReview) {
        console.log(newReview)
        console.log(programs)
        const program = programs.find((program) => program.id == newReview.program_id)
        console.log(program)
        const updatedReviews = [...program.reviews, newReview]
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms)
    }

    // function handleDeletedGame(deletedGame) {
    //     const platform = platforms.find((platform) => platform.id == deletedGame.game.platform_id)
    //     const updatedGames = platform.games.filter((g) => g.id !== deletedGame.game.id);
    //     const updatedPlatform = { ...platform, games: updatedGames }
    //     const updatedPlatforms = platforms.map((obj) => {
    //         if (obj.id === platform.id) {
    //             return updatedPlatform
    //         }
    //         else {
    //             return obj
    //         }
    //     })
    //     setPlatforms(updatedPlatforms);
    // }

    // function handleEditedGames(updatedGame) {
    //     const platform = platforms.find((platform) => platform.id == updatedGame.platform_id)
    //     const updatedGames = platform.games.map((game) => {
    //         if (game.id === updatedGame.id) {
    //             return updatedGame;
    //         } else {
    //             return game;
    //         }
    //     });
    //     const updatedPlatform = { ...platform, games: updatedGames }
    //     const updatedPlatforms = platforms.map((obj) => {
    //         if (obj.id === platform.id) {
    //             return updatedPlatform
    //         }
    //         else {
    //             return obj
    //         }
    //     })
    //     setPlatforms(updatedPlatforms);
    // }


    function handleLogout() {
        fetch('/logout', { method: 'DELETE', }).then((r) => {
            if (r.ok) setUser(null);
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
                            <ProgramsPage onAddProgram={handleNewProgram}/>
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