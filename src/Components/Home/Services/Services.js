import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import Book from '../../Booking/Book';
import './Services.css'

const Services = (props) => {
    const { name, imageURL, price } = props.product;

    return (
        <Col md={4} className="mb-5 text-center service-detail">
            <Fade bottom duration={2500} distance="40px">
                <Card
                className="border-0 py-4"
                style={{ maxWidth: "25rem"}}>
                    <Card.Img variant="top" height="100" src={imageURL} style={{ objectFit: "contain"}} />
                    <Card.Body className="pt-5">
                        <Card.Title as="h4" className="my-4">{name}</Card.Title>
                        <Card.Text className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, veritatis.</Card.Text>
                        <div>
                            <p>${price}</p>
                            <Link to={`/book`}><button
                            className="btn-main">
                                Buy Now
                            </button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Fade>
        </Col>
    );
};

export default Services;

{/* <section className="mt-5 col-md-3">
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
</section> */}