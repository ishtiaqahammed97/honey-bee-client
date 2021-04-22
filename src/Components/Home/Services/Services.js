import React from 'react';
import './Services.css'

const Services = (props) => {

    const {name, img,  price} = props.product;

    return (
        <section style={{marginLeft: '30px'}} className="mt-5">
            <div className="container">
                <div class="hover01">
                    <div>
                    <img src={img} />
                    <h2 className="text-center">{name}</h2>
                    <small className="text-black">{price}</small>
                    <button style={{marginLeft: '222px'}} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;