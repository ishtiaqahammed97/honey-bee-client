import React from 'react';
import Services from '../Services/Services';
import './Product.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://afternoon-eyrie-74810.herokuapp.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false)
            })
            .catch(error => toast.error(error.message))
    }, [])

    return (
        <section id="products" className="text-center">
            <h5>We Produce </h5>
            <h1 className="text-center">Pure Organic Honey </h1>
            <Row className="justify-content-center mx-auto mt-md-5 pt-5">
                {
                    loading ? <Spinner animation="border" variant="danger" /> :
                        products.map(product => <Services key={products._id} product={product}> </Services>)
                }
            </Row>
        </section>
    );
};

export default Product;