import React from 'react';
import { Link } from 'react-router-dom';
import './booking.css'

const Review = () => {
    return (
        <section className="row">
            <div className="col-md-3 col-sm-3 mt-5">
                <Link to={`/book`}><p>Book</p></Link>
                <Link to={`/bookingList`}><p>Service List</p></Link>
                <Link to={`/review`}><p>Review</p></Link>

            </div>

            <div className="col-md-9 col-sm-9 mt-5 booking-bg">
                <form action="">
                    <input type="text" size="27" placeholder="Name" /> <br /> <br />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Description *"></textarea> <br />
                    <button className="payment">Submit</button>
                </form>
            </div>
        </section>

    );
};

export default Review;