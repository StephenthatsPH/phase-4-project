import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewReviewForm({ onReviewNew, currentUser }) {
    const [rating, setRating] = useState('')
    const [text, setText] = useState('')
    const { id } = useParams()
    const [user_id, setUser_id] = useState(currentUser.id)

    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            rating: rating,
            text: text,
            program_id: id,
            user_id: user_id
        }
        fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(newReview => onReviewNew(newReview))
        console.log('new review added')
        setRating('')
        setText('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Write Review: </label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="" disabled defaultValue hidden >
                        Select Overall Rating
                    </option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                <br />
                <textarea
                    required
                    cols="65"
                    rows="6"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewReviewForm;
