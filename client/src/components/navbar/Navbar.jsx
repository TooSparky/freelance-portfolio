import './styles.css';
import $ from 'jquery'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export default function Navbar() {

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.nav-container').css('background', '#fff');
            $('.nav-container').css('transition', 'ease');
        } else {
            $('.nav-container').css('background', 'transparent');
        }
    });

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <IconContext.Provider value={{color: '#fff'}}>
            <header className='nav-container sticky'>
                <nav id="nav">
                    <ul className='links'>
                        <li><Link className='underline' to={'.'}>Home</Link></li>
                        <li><a className='underline' href="#about">About Us</a></li>
                        <li><Link className='underline' to={'/services'}>Services</Link></li>
                    </ul>
                    <div className='logo'>
                        <a href='#header-section'><i className="fa-solid fa-laptop-code"></i>QuantumSites</a>
                    </div>

                    <Link id='contact-nav' className='underline' to={'/contact'}>Contact</Link>
                </nav>

                {/* Mobile Menu */}
                <div id='mobile-nav'>
                    <div className='mobile-logo'>
                        <a href='#header-section'><i className="fa-solid fa-laptop-code"></i>QuantumSites</a>
                    </div>

                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} 
                            onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/services' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} 
                            onClick={closeMobileMenu}>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/contact' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')} 
                            onClick={closeMobileMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </IconContext.Provider>
    );
}
