import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    //load data
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data.slice(0,6)))
    })    
    return (
        <div>
            <h2 className="fw-bold">Valuable Reviews of Our Customer</h2>
            <div className="reviews-container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>
                        
                    )
                }                
            </div>  
        </div>
    );
};

export default Reviews;