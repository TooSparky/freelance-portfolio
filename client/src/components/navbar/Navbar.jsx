import './styles.css';

export default function Navbar() {
    return(
        <div className='nav-container sticky'>
            <nav id="nav">
                <ul className='links'>
                    <li><a href="#team-section">About Us</a></li>
                    <li><a href="#services-section">Services</a></li>
                </ul>
                <div className='logo'><a href='#header-section'>QuantumSites</a></div>

                <a href='#' className='button'>Get Started</a>
            </nav>
        </div>
    );
}
