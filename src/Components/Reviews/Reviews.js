// import React, {useState, useEffect } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReviews([])
    // const [reviews, setReviews] = useState([])

    // useEffect(()=>{
    //     fetch('reviews.json')
    //     .then(res => res.json())
    //     .then(data => setReviews(data))
    // },[])
    return (
        <div>
            <h1>Our Customers Reviews</h1>
            <br />
            <div className='reviews-section'>
            {
                reviews.map(review => <Review
                key = {review.id}
                review = {review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;