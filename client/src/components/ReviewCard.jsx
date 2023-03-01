import React, { useState } from "react";
import EditReview from "./EditReview"

function ReviewCard({ id, text, rating, program_id, user_id, review, currentUser, onReviewDelete, onReviewEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser_id, setCurrentUser_id] = useState(currentUser.id);

    let deletedReview = { review }

    function handleDeleteReview(e) {
        fetch(`/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(onReviewDelete(deletedReview))
    }

    function handleUpdateReview(updatedReview) {
        setIsEditing(false);
        onReviewEdit(updatedReview);
    }
    if (currentUser_id === user_id) {
        return (
            <li>
                {isEditing ? (
                    <EditReview
                        user_id={user_id}
                        id={id}
                        text={text}
                        rating={rating}
                        onReviewEdit={handleUpdateReview}
                    />
                ) : (
                    <div>
                        <p hidden>{user_id}</p>
                        <h3>Rating: {rating}</h3>
                        <p>{text}</p>
                        <p hidden>{program_id} </p>
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                📝EDIT
                            </span>
                        </button>
                        <button onClick={handleDeleteReview}>
                            <span role="img" aria-label="delete">
                                ❌DELETE
                            </span>
                        </button>

                    </div>
                )}
            </li>
        )
    } else {
        return (
            <div>
                <p hidden>{user_id}</p>
                <h3>Rating: {rating}</h3>
                <p>{text}</p>
                <p hidden>{program_id} </p>
            </div>
        )
    }
}

export default ReviewCard
