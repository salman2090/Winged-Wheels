import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationArrow,  faMailBulk} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    
    // icon info    
    const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

    return (
        <div className="bg-footer p-3">
            <div className="p-5 footer-container ">
                <div >
                    <h5 className="text-light mb-5">Contact Us</h5>
                    <p className="text-light fs-5"><span>{phoneIcon}</span> {' '}&emsp;(+880) 123456789</p>
                    <p className="text-light fs-6"><span>{locationIcon}</span> {' '}&emsp; 202/1, Ranking Street, Dhaka-1215.</p>
                    <p className="text-light fs-6"><span>{emailIcon}</span> {' '}&emsp; w.wheels@gmail.com</p>
                </div>
                <div >
                    <h5 className="text-light mb-3">Policy</h5>
                    <p><Link className="fw-bold" to="/">Terms</Link></p>
                    <p><Link className="fw-bold" to="/">License</Link></p>
                    <p><Link className="fw-bold" to="/">Disclaimer</Link></p>
  
                </div>
                <div>
                <h5 className="text-light mb-3">Our Community</h5>               
                    <p><Link className="fw-bold" to="/">Blog</Link></p>
                    <p><Link className="fw-bold" to="/">Forums</Link></p>
                </div>
                <div>
                <h5 className="text-light mb-3">Help</h5>               
                    <p><Link className="fw-bold" to="/">Help Center</Link></p>
                    <p><Link className="fw-bold" to="/">Authors</Link></p>
                </div>
            </div>
            <p className="footer-text fs-5">© 2021 Winged Wheels. All Right Reserved.</p>
        </div>
    );
};

export default Footer;