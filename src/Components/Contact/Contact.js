// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './Contact.css';

const Contact = () => {

    return (
        <div className='Contact'>
            <div className='contact-container'></div>
            <header className='contact-header'>Contact Us</header>
            <div className='contact-info-container'>
                <div className='contact-info'>
                    <div className='contact-list-header'>
                        <h2>Our Organization</h2>
                    </div>
                    <div className='employee-container'>
                        <img src='https://thumbs.dreamstime.com/b/colorful-silhouette-faceless-half-body-man-formal-outfit-vector-illustration-87237315.jpg' alt='insert-img' />
                        <p className='contact-name'>John Johnson</p>
                        <p>- Lead Tour Planner -</p>
                        <a href='https://fakenumber.org/' style={{ textDecoration: 'none' }}>999-999-9999</a>
                        <article>john@gotravel.com</article>
                    </div>
                    <div className='employee-container'>
                        <img src='https://thumbs.dreamstime.com/b/color-silhouette-faceless-half-body-man-t-shirt-vector-illustration-87324049.jpg' alt='insert-img' />
                        <p className='contact-name'>Bob Bobson</p>
                        <p>- Planning Assistant -</p>
                        <a href='https://fakenumber.org/' style={{ textDecoration: 'none' }}>999-999-9999</a>
                        <article>bob@gotravel.com</article>
                    </div>
                    <div className='employee-container'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5kWktc0jUmtXBd5cOzFHqv2DCGi4kxpikQ0a6rMS2PMrNBcYwpkmXJsWc0GiQ8b46dQ&usqp=CAU' alt='insert-img' />
                        <p className='contact-name'>Jim Jimson</p>
                        <p>- Travel Agent -</p>
                        <a href='https://fakenumber.org/' style={{ textDecoration: 'none' }}>999-999-9999</a>
                        <article>jim@gotravel.com</article>
                    </div>
                </div>
                <div className='location'>
                    <img src='https://icon-library.com/images/map-indicator-icon/map-indicator-icon-4.jpg' alt='pin' />
                    <p>99 Pennsylvania St. Noblesville, IN 46060</p>
                </div>
            </div>
            <div className='thanks'>
                <h1>Thanks For Traveling With Us!</h1>
            </div>
        </div>
    );
}

export default Contact;