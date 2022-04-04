import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, review, ratings} = props.review;
    return (
        <div className='review-box'>
            <p>{review}</p>
            <h3>{name}</h3>
            <p>Rating: {ratings}</p>
        </div>
    );
};

export default Review;