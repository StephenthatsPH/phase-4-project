import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import UserPrograms from "./UserPrograms";
import ProgramsPage from "./ProgramsPage";
import ReviewsList from "./ReviewsList";
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

    function handleDeletedReview(deletedReview) {
        const program = programs.find((program) => program.id == deletedReview.review.program_id)
        const updatedReviews = program.reviews.filter((r) => r.id !== deletedReview.review.id);
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms);
    }

    function handleEditedReview(updatedReview) {
        const program = programs.find((program) => program.id == updatedReview.program_id)
        const updatedReviews = program.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview;
            } else {
                return review;
            }
        });
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms);
    }


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
                            <ProgramsPage programs={programs} onAddProgram={handleNewProgram} onReviewDelete={handleDeletedReview} onReviewEdit={handleEditedReview} />
                        </Route>
                        <Route path="/user/programs">
                            <UserPrograms />
                        </Route>
                        <Route path="/user/account">
                            <UserSettings />
                        </Route>
                        <Route exact path="/programs/:id/overview">
                            <ReviewsList
                                programs={programs}
                                onReviewDelete={handleDeletedReview} 
                                onReviewEdit={handleEditedReview}
                            />
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