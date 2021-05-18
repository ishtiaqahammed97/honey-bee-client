import React from 'react';
import musteredHoney from '../../../images/musteredHoney.jpg';
import fruitHoney from '../../../images/fruitHoney.jpg';
import blackSeedHoney from '../../../images/blackSeedHoney.jpg';
import Services from '../Services/Services';
import './Product.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../../Booking/Book';



// const products = [
//     {
//         name: 'Mustered Honey',
//         weight: '0.5KG',
//         price: '7.99$',
//         image: musteredHoney
//     },
//     {
//         name: 'Fruit Honey',
//         weight: '0.5KG',
//         price: '8.14$',
//         image: fruitHoney
//     },
//     {
//         name: 'Black Seed Honey',
//         weight: '0.5KG',
//         price: '8.99$',
//         image: blackSeedHoney
//     }
// ]

const Product = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)

    useEffect(() => {
        fetch('https://afternoon-eyrie-74810.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="product-background">
            <h1 className="text-center mt-5">Our Organic Products</h1>
            <div className="card-deck d-flex ms-5 row">
                {
                    products.map(product => <Services product={product}> </Services>)
                }
            </div>
        </div>
    );
};

export default Product;