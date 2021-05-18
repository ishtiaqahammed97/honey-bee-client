import React from 'react';
import './HealthyLife.css'
import healthyHoney from '../../../images/healthyLife.jpg'

const HealthyLife = () => {
    return (
        <section className="mt-5 background-details">
            <h1 className="text-center mb-2">Why To Buy From Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="img-fluid" style={{width: '700px', height: '', borderRadius:'3px'}} src={healthyHoney} alt=""/>
                    </div>
                    <div className="col-md-5 text-center mt-7">
                        <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consequuntur perspiciatis recusandae natus velit dolorum, dignissimos cupiditate laborum laboriosam nostrum nihil porro explicabo quae quisquam!</small></p>
                        <button className="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthyLife;