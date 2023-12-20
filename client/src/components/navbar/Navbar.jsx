import './styles.css';

export default function Navbar() {
    return(
        <div className='nav-container'>
            <nav id="nav">
                <ul className='links'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                <div className='logo'><a href='#'>QuantumSites</a></div>

                <a href='#' className='button'>Get Started</a>
            </nav>
        </div>
    );
}
