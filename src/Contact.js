import React from 'react';
import './Contact.css';
import profilePicture from './photos/profile_picture.jpg';

const Contact = () => {
    return (
        <div className="container">
            <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
            <h1>Florin Pană</h1>
            <p>Email: <a href="panaflorin741@gmail.com">panaflorin741@gmail.com</a></p>
            <p>Phone: +40724342609</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/florin-pana-webdev/">LinkedIn</a>
                <a href="https://www.instagram.com/florinpana741/">Instagram</a>
                {/* Add more social links as needed */}
            </div>
        </div>
    );
};

export default Contact;
