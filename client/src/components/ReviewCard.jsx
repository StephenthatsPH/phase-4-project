import React, { useState } from "react";
import EditReview from "./EditReview"

function ReviewCard({ id, text, rating, program_id, review, onReviewDelete, onReviewEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    
    let deletedReview = {review}

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

    return (
        <li>
            {isEditing ? (
                <EditReview
                    id={id}
                    text={text}
                    rating={rating}
                    onReviewEdit={handleUpdateReview}
                />
            ) : (
                <div>
                    <h2>Rating: {rating}</h2>
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
}

export default ReviewCard
