import React from 'react';

const Review = ({review}) => {
    const {name, description, rating} = review;
    return (
        <div>
            <h2>Name:{name}</h2>
            <h2>Des:{description}</h2>
            <h2>Rating:{rating}</h2>
        </div>
    );
};

export default Review;