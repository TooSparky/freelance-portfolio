import './styles.css';
import $ from 'jquery'
import { Link } from 'react-router-dom'

export default function Navbar() {

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.nav-container').css('background', '#fff');
            $('.nav-container').css('transition', 'ease');
        } else {
            $('.nav-container').css('background', 'transparent');
        }
    });

    return(
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
        </header>
    );
}
