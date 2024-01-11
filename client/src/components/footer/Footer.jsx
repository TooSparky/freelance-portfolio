import './styles.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer id='footer'>
            <div className='footer-top-row'>
                <div className='footer-column-1'>
                    <p><strong>Support</strong></p>
                        <Link to={'/contact'} className='link'>Contact</Link>
                </div>
                <div className='footer-column-2'>
                    <p><strong>Follow Us</strong></p>
                    <Link to={'https://www.instagram.com/quantumsiteswebsites/'} className='link'>Instagram</Link>
                    <Link to={'https://www.facebook.com/profile.php?id=61555290821819'} className='link'>Facebook</Link>
                    <Link to={'https://www.linkedin.com/in/quantum-websites-4a696b2a9/'} className='link'>LinkedIn</Link>
                </div>
            </div>
            {/* <i className="fa-regular fa-copyright"></i> */}
            <div className='footer-bottom-row'>
                <h3>Copyright <i className="fa-regular fa-copyright"></i> 2024 QuantumSites | Made by QuantumSites</h3>
            </div>
        </footer>
    );
}
