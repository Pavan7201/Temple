import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import icon from "./assets/icon.png";
import pray from "./assets/pray.png"

const Header = () => {
    const location = useLocation(); // Get current location

    return (
        <div> 
            {/* logo and Temple */}
            <header className="header">
                
                <div className="logo">
                    <span>
                        <img src={icon} alt="logo"></img>
                    </span>
                    <h2>
                    <span>
                        T
                    </span>
                    emple 
                    </h2>
                    <img className='img' src={pray} alt='praying'></img>
                </div>

                {/* navbar menu */}
                <div className="menu">
                    {/* Use Link component for navigation */}
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    {/* Conditionally render "About" link */}
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </div>
            </header>
            <hr/>
        </div>
    );
};

export default Header;
