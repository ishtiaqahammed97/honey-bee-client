import React from 'react';
import './Header.css'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import cover from '../../../images/cover.jpg'

const Header = () => {
    return (
        <Container fluid className="mt-5 header-height">
            <Row className="align-items-center justify-content-center">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={3000} distance="40px" >
                        <h1><span style={{ color: '#ce9804' }}>Pure Honey <br /> Be Healthy</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt impedit facilis animi voluptates perspiciatis a tempora harum eligendi illum.</p>
                        <button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </button>
                    </Fade>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Fade right duration={3000} distance="40px">
                        <Image src={cover} fluid/>
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;