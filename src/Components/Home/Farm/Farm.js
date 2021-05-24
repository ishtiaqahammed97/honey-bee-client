import React from 'react';
import { Container, Row } from 'react-bootstrap';
import farm1 from '../../../images/farm1.jpg';
import farm2 from '../../../images/farm2.jpg';
import farm3 from '../../../images/farm3.jpg';
import './Farm.css'
// import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Fade'

const Farm = () => {

    return (
        <Container fluid>
            <div className="container mt-5">
                <h1 className="text-center">Our Farm</h1>
                <div className="row farm">
                    <Flip left duration={2000}>
                        <div className="col-md-4">
                            <figure><img src={farm1} alt="" /></figure>
                        </div>
                    </Flip>
                    <Flip bottom duration={1000}>
                        <div className="col-md-4 ">
                            <figure><img src={farm2} alt="" /></figure>
                        </div>
                    </Flip>
                    <Flip right duration={2000}>
                        <div className="col-md-4">
                            <figure><img src={farm3} alt="" /></figure>
                        </div>
                    </Flip>
                </div>
            </div>
        </Container>
    )
};

export default Farm;


{/* <section>
<div className="container mt-5">
    <h1 className="text-center">Our Farm</h1>
    <div className="row farm">
        <div className="col-md-4">
            <figure><img src={productBackground} alt="" /></figure>
        </div>
        <div className="col-md-4 ">
            <figure><img src={collect2} alt="" /></figure>
        </div>
        <div className="col-md-4">
            <figure><img src={collect3} alt="" /></figure>
        </div>
    </div>
</div>
</section>  */}