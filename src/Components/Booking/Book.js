import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './booking.css'

const Book = () => {
    return (
        <section className="row">
            <div className="col-md-3 col-sm-3 mt-5 sidebar-bg">
                <Link className="text-white" style={{textDecoration: 'none'}} to={`/book`}><p>Book</p></Link>
                <Link className="text-white" style={{textDecoration: 'none'}} to={`/bookingList`}><p>Service List</p></Link>
                <Link className="text-white" style={{textDecoration: 'none'}} to={`/review`}><p>Review</p></Link>

            </div>

            <div className="col-md-9 col-sm-9 mt-5 booking-bg">
                <br /> <br />
                <input type="text" placeholder="Name" /> <br /> <br />
                <input type="text" placeholder="Address" /> <br /> <br />
                <input type="text" placeholder="Phone" /> <br /> <br />

                <h2 className="mt-5">Payment method is not working, we're trying to fix it. Thanks for being with us.</h2>
                <h5>Your payment: </h5>
                <button className="payment mt-5">Pay</button>
            </div>
        </section>
    );
};

export default Book;