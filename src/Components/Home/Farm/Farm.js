import React from 'react';
import productBackground from '../../../images/productBackground.jpg';
import collect2 from '../../../images/collect2.jpg';
import collect3 from '../../../images/collect3.jpg';
import './Farm.css'

const Farm = () => {
    return (
        <section>
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
        </section>
    );
};

export default Farm;