import React from 'react';
import Contact from '../Contact/Contact';
import Farm from '../Farm/Farm';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import HealthyLife from '../HealthyLife/HealthyLife';
import Navbar from '../../Shared/Navabar/NavBar';
import Product from '../Product/Product';
import Testimonials from '../Testimonilas/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HealthyLife></HealthyLife>
            <Product></Product>
            <Farm></Farm>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;