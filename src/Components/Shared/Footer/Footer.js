import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "General Store" , link: "/store"},
        {name: "General Store" , link: "/store"},
        {name: "Super shop" , link: "/super-shop"},
        {name: "Super Shop" , link: "/super-shop"}
    ]
    const ourAddress = [
        {name: "Joydebpur, Gazipur" , link: "//google.com/map"},
        {name: "Gazipur" , link: "//google.com/map"}
    ]
    const ourStore = [
        {name: "Online Shop" , link: "/online-shop"},
        {name: "Online Shop" , link: "/online-shop"},
        {name: "Wholesale" , link: "/wholesale"},
        {name: "Wholesale" , link: "/wholesale"},
    ]
    const services = [
        {name: "Home Delivery" , link: "/home-delivery"},
        {name: "Wholesale Price" , link: "/wholesale-price"},
        {name: "Payment on delivery" , link: "/payment-on-delivery"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Store" menuItems={ourStore}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+880 1770618667</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;