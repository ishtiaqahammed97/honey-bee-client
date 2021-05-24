import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useState } from 'react';
import Navbar from '../Shared/Navabar/NavBar';
import Footer from '../Shared/Footer/Footer';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user)
                history.replace(from)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <section>
            <Navbar></Navbar>
            <div className="login-text">
            <h5><strong className="text-side">Login With</strong></h5>
            <button className="login-bar text-white mt-2" onClick={handleGoogleSignIn}><FontAwesomeIcon className="google-icon" icon={faGooglePlus} />Sign In With Google </button>
        </div>
        <Footer></Footer>
        </section>
    );
};

export default Login;