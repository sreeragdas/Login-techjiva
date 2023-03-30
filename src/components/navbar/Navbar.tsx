import './styles.scss';

import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

export const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2 style={{ marginLeft: '20px' }}>My App.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='/dashboard' > <li style={{ fontSize:'1.5rem' }}>Home</li></Link>

                <Link to='/about-us'><li style={{ fontSize: '1.5rem' }}>About -Us</li></Link>

            </ul>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='/dashboard' > <li >Home</li></Link>

                    <Link to='/about-us'><li>About -Us</li></Link>

                </ul>
                <div className="mobile-menu-bottom">

                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )

};