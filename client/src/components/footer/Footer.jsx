import './styles.css'

export default function Footer() {
    return(
        <footer id='footer'>
            <div className='footer-top-row'>
                <div className='footer-column-1'>
                    <p>example text 1</p>
                </div>
                <div className='footer-column-2'>
                    <p>example text 2</p>
                </div>
                <div className='footer-column-3'>
                    <p>example text 3</p>
                </div>
                <div className='footer-column-4'>
                    <p>example text 4</p>
                </div>
            </div>
            <div className='footer-bottom-row'>
                <h3><i className="fa-regular fa-copyright"></i> 2023 QuantumSites. All rights reserved.</h3>
            </div>
        </footer>
    );
}
