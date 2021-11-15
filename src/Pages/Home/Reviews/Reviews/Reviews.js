import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    //load data
    useEffect(() => {
        fetch("https://guarded-chamber-73024.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data.slice(0,6)))
    })    
    return (
        <div>
            <h2 className="fw-bold mt-5 mb-3">Valuable Reviews of Our Customers</h2>
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