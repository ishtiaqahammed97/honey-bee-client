import React from 'react';
import './HealthyLife.css'
import healthyHoney from '../../../images/healthyLife.jpg'

const HealthyLife = () => {
    return (
        <section className="mt-5 background-details">
            <h1 className="text-center mb-5">Why To Buy From Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" style={{width: '500px', height: '390px', borderRadius:'15px'}} src={healthyHoney} alt=""/>
                    </div>
                    <div className="col-md-6 text-center mt-5">
                        <p style={{color: '	#D3D3D3'}} ><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius consequuntur perspiciatis recusandae natus velit dolorum, dignissimos cupiditate laborum laboriosam nostrum nihil porro explicabo quae quisquam!</small></p>
                        <button className="btn btn-primary">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthyLife;