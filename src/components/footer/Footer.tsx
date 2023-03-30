import './styles.scss';

import React from 'react';

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
export const Footer: React.FC = () => {
    return (
        <div className='footer'>
        <div className="container">
            <div className="top">
                <h3 style={{marginLeft:'50px'}}>My App.</h3>
                <div className="social">
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <ul>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policy</li>
                        <li>Privacy</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};