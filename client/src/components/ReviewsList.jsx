import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReviewCard from './ReviewCard';

function ReviewsList({ programs, onReviewDelete, onReviewEdit }) {
    const [selectedProgram, setSelectedProgram] = useState({
        name: "",
        reviews: []
    });
    const params = useParams();

    useEffect(() => {
        const selectedProgram = programs.find((program) => program.id === parseInt(params.id))
        if (selectedProgram) {
            setSelectedProgram(selectedProgram)
        }
    }, [programs, params.id]);

    const getReviews = selectedProgram.reviews.map((review) => {
        return <div className="review-preview" key={review.id}>
            <ReviewCard 
                id={review.id}
                text={review.text}
                rating={review.rating}
                program_id={review.program_id}
                onReviewDelete={onReviewDelete}
                onReviewEdit={onReviewEdit}
                review={review}
            />
        </div>
    })

    return (
        <div>
            <h3>{selectedProgram.name} Reviews:</h3>
            <ul>
                {getReviews}
            </ul>
        </div>
    )
}

export default ReviewsList;