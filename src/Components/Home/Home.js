import useReviews from '../../hooks/useReviews';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css'
import image from '../image/hp-spectre.jpg'

const Home = () => {
    const [reviews, setReviews] = useReviews([])

    
    return (
        <div>
            <div className='front-show'>
                <div className='home-detail'>
                    <h1>Your next Laptop </h1>
                    <h1 className='special-title'>Your best Laptop</h1>
                    <p>Nowadays, finding a best laptop it's quite impossible. For that reason we are coming with this brand new shop for providing you the best laptop in your zone. You can find here the best laptop for web-developing, gaming, coding and many more works. </p>
                    <p>So, why do you waiting for? Come here and take your needed one.</p>
                </div>
                <img className='home-img' src={image} alt="" />
      
            </div>

            <div>
                <h2>Customers Reviews</h2>
                
                <div  className='reviews-section'>
                {
                    reviews.slice(1, 4).map(review => <Review
                    key = {review.id}
                    review = {review}
                    ></Review>)
                }
                </div>

                <button className='all-reviews'>
                <Link to='/reviews' >Show All Reviews</Link>
                </button>
                
            </div>

        </div>
    );
};

export default Home;