import React, { useEffect, useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import UserPrograms from "./UserPrograms";
import ProgramsPage from "./ProgramsPage";
import ReviewsList from "./ReviewsList";
import NewReviewForm from "./NewReviewForm";
import UserSettings from "./UserAuth/UserSettings";
import ProgramCard from "./ProgramCard";

function Header({ onLogout, currentUser, setCurrentUser }) {
    const [programs, setPrograms] = useState([]);
    const [id, setId] = useState(currentUser.id);

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

    function handleReviewNew(newReview) {
        const program = programs.find((program) => program.id == newReview.program_id)
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

    return (
        <>
            <div className="nav">
                <nav className="nav-items">
                    <h1>Residency Reviewer</h1>
                    <NavLink to="/" className='nav-item'>| Home |</NavLink>
                    <NavLink to="/programs" className='nav-item'>| Programs |</NavLink>
                    {/* <NavLink to={`/user/${id}/programs`}> User's Programs</NavLink> */}
                    <NavLink to={`/account`} className='nav-item'>| Account |</NavLink>
                    <button onClick={onLogout} > Logout </button>
                <hr/>

                    <Switch>
                        <Route exact path="/programs">
                            <ProgramsPage
                                programs={programs}
                                onAddProgram={handleNewProgram}
                                onReviewDelete={handleDeletedReview}
                                onReviewEdit={handleEditedReview}
                            />
                        </Route>
                        {/* <Route path="/user/programs">
                            <UserPrograms />
                        </Route> */}
                        <Route path="/account">
                            <UserSettings currentUser={currentUser} setCurrentUser={setCurrentUser} />
                        </Route>
                        <Route exact path="/programs/:id/overview">
                            <ProgramCard programs={programs} />
                            <NewReviewForm
                                onReviewNew={handleReviewNew}
                                currentUser={currentUser}
                            />
                            <ReviewsList
                                programs={programs}
                                currentUser={currentUser}
                                onReviewDelete={handleDeletedReview}
                                onReviewEdit={handleEditedReview}
                            />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </nav>
            </div>
        </>
    )
}

export default Header;