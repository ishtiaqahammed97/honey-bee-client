import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../../Booking/Book';
import './Services.css'

const Services = (props) => {
    const { name, imageURL, price } = props.product;

    return (
        <section style={{ marginLeft: '30px' }} className="mt-5 col-md-3">
            <div className="container">
                <div class="hover01">
                    <div>
                        <img src={imageURL} />
                        <h2 className="text-center">{name}</h2>
                        <small className="text-black">{price}</small>
                        <Link to={`/book`}> <button style={{ marginLeft: '222px' }} className="btn btn-primary buy-btn"><small>Buy</small></button> </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;