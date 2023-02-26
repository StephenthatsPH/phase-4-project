import React, { useState } from "react";

function EditReview({ id, text, rating, onReviewEdit }) {
    const [reviewText, setReviewText] = useState(text);
    const [reviewRating, setReviewRating] = useState(rating);

    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: {
                    rating: reviewRating,
                    text: reviewText
                }
            }),
        })
            .then((res) => res.json())
            .then((updatedReview) => onReviewEdit(updatedReview));
    }
    return (
        <form onSubmit={handleEditSubmit}>
            <input
                type="text"
                placeholder="Enter your review"
                autoComplete="off"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
            />
            <input
                type="number"
                placeholder="Publisher"
                autoComplete="off"
                value={reviewRating}
                onChange={(e) => setReviewRating(e.target.value)}
            />
            <button>
                <input
                    type="submit"
                    value="Submit"
                />
            </button>
        </form>
    );
}

export default EditReview;