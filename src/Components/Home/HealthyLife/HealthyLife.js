import React from 'react';
import './HealthyLife.css'
import help from '../../../images/help.jpg'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'

const HealthyLife = () => {
    return (
        <Container fluid className="mt-5">
            <Row className="align-item-center justify-content-center">
                <Col md={6}>
                <Fade left duration={3000} distance="40px">
                    <Image src={help} fluid />
                </Fade>
                </Col>
                <Col md={4} className="p-md-5">
                <Fade right duration={3000} distance="40px">
                <h1 className="text-center mb-5">How Can We Help You</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus magnam sed delectus distinctio cumque excepturi illo blanditiis eius ratione, perspiciatis labore corrupti fugit aperiam quod reiciendis maxime provident facere.</p>
                <button className="btn-main">Learn More</button>
                </Fade>
                </Col>
            </Row>
        </Container>

    );
};
export default HealthyLife;