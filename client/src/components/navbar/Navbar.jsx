import './styles.css';
import $ from 'jquery'

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
        <div className='nav-container sticky'>
            <nav id="nav">
                <ul className='links'>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services-section">Services</a></li>
                </ul>
                <div className='logo'>
                    <a href='#header-section'><i className="fa-solid fa-laptop-code"></i>QuantumWebsites</a>
                </div>

                <a href='#' className='button'>Get Started</a>
            </nav>
        </div>
    );
}
