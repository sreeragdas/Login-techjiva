import './styles.scss';

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

import { IconContext } from 'react-icons';
export const Navbar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const SidebarData = [
        {
            title: 'Home',
            path: '/dashboard',
            icon: <AiIcons.AiFillHome />,
            cName: 'nav-text'
        },
        {
            title: 'Reports',
            path: '/about-us',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
        },
        {
            title: 'Products',
            path: '/products',
            icon: <FaIcons.FaCartPlus />,
            cName: 'nav-text'
        },
        {
            title: 'Team',
            path: '/team',
            icon: <IoIcons.IoMdPeople />,
            cName: 'nav-text'
        },
        {
            title: 'Messages',
            path: '/messages',
            icon: <FaIcons.FaEnvelopeOpenText />,
            cName: 'nav-text'
        },
        {
            title: 'Support',
            path: '/support',
            icon: <IoIcons.IoIosHelpCircle />,
            cName: 'nav-text'
        }
    ];
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <img src={logo} />
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='name-logo'>
                     
                      
                        <div style={{color:'white' , marginRight:'15px' , fontSize:'1.5rem' , marginTop:'-8px'}}>Joey  </div>
                          <div >  <FaIcons.FaUserAlt size={20} /></div>
                        </div>

                   


                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <div className='sidebar-data'>
                            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}

                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}

                        </div>

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );

};