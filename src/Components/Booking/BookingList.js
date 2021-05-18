import React from 'react';
import { Link } from 'react-router-dom';
import './booking.css'

const BookingList = () => {
    return (
        <section className="row">
            <div className="col-md-3 col-sm-3 mt-5">
                <Link to={`/book`}><p>Book</p></Link>
                <Link to={`/bookingList`}><p>Service List</p></Link>
                <Link to={`/review`}><p>Review</p></Link>

            </div>

            <div className="col-md-9 col-sm-9 mt-5 booking-bg">
               <h3 className="mb-5"><strong>Service List</strong></h3>

               <li>Black Seed Honey</li>    
               <li>Mustard Honey</li>    
               <li>Fruit Honey</li>    
            </div>
        </section>
    );
};

export default BookingList;