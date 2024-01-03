import './styles.css'

export default function Footer() {
    return(
        <footer id='footer'>
            <div className='footer-top-row'>
                <div className='footer-column-1'>
                    <p><strong>example text 1</strong></p>
                </div>
                <div className='footer-column-2'>
                    <p><strong>example text 2</strong></p>
                </div>
                <div className='footer-column-3'>
                    <p><strong>example text 3</strong></p>
                </div>
                <div className='footer-column-4'>
                    <p><strong>Follow Us</strong></p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>
            {/* <i className="fa-regular fa-copyright"></i> */}
            <div className='footer-bottom-row'>
                <h3>2023 QuantumSites.</h3>
            </div>
        </footer>
    );
}
