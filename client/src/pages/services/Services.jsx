import './styles.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Services() {

    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return(
        <section id='services-page'>
            <h1 className='services-page-header'>Services</h1>
            <p className='services-page-info'>*All prices are subject to change because no website is the same*</p>
            <div className='card-container flip-card' onClick={handleFlip}>
                <motion.div className='flip-card-inner' initial={false} animate={{rotateY: isFlipped ? 180 : 360}} 
                transition={{duration: 1, animationDirection: 'normal'}} onAnimationComplete={() => setIsAnimating(false)}>
                <div className='card'>
                    <div className='card-face-front'>
                        <h2 id='bronze' className='card-h2'>Bronze Package</h2>
                        <img className='card-image' src="https://cdn.pixabay.com/photo/2016/11/09/18/54/refracted-1812461_640.jpg" alt="image of bronze" />
                    </div>
                    <div className='card-face-back'>
                        <p>all the juicy details</p>
                    </div>
                </div>
                </motion.div>
                <div className="card">
                    <div className='card-face-front'>
                        <h2 id='silver' className='card-h2'>Silver Package</h2>
                        <img className='card-image' src="https://cdn.pixabay.com/photo/2015/09/24/12/52/silver-955496_640.jpg" alt="image of silver" />
                    </div>
                    <div className='card-face-back'>
                        <p>all the juicy details</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-face-front'>
                        <h2 id='gold' className='card-h2'>Gold Package</h2>
                        <img className='card-image' src="https://cdn.pixabay.com/photo/2016/09/05/18/54/texture-1647380_1280.jpg" alt="image of gold" />
                    </div>
                    <div className='card-face-back'>
                        <p>all the juicy details</p>
                    </div>
                </div>
                <div className="card">
                    <div className='card-face-front'>
                        <h2 id='diamond' className='card-h2'>Diamond Package</h2>
                        <img className='card-image' src="https://cdn.pixabay.com/photo/2016/02/14/09/45/diamond-1199183_1280.jpg" alt="image of diamonds" />
                    </div>
                    <div className='card-face-back'>
                        <p>all the juicy details</p>
                    </div>
                </div>
            </div>
            <div className='long-card-container'>
                <div className='long-card'>
                    <div className='card-face-front'>
                        <h2 id='web-maintenance' className='card-h2'>Website Maintenance</h2>
                        <img className='card-image' src="https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_1280.png" alt="image of maintenance on a computer" />
                    </div>
                    <div className='card-face-back'>
                        <p>all the juicy details</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

{/* <section id='services-page'>
            <h1 className='pricing-header'>Price Ranges</h1>
            <div className='low-price'>
                <h2 className='heading'>Basic Website</h2>
                <ul>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Usually around 1-3 pages</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Limited responsiveness</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Estimated around $500 - $2,500</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Simply put, this is the best option for someone that wants a nice personal website 
                        for any reason.
                    </li>
                </ul>
            </div>
            <div className="medium-price">
                <h2 className='heading'>Standard Website</h2>
                <ul>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Around 3-7 pages</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Responsive Layout</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Signup / Login status</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Estimated around $5,000+</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>This option is best for someone in a small business that wants more responsiveness 
                        than a simple website, with more features.
                    </li>
                </ul>
            </div>
            <div className="high-price">
                <h2 className='heading'>High-end Website</h2>
                <ul>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>9+ pages</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Responsive Layout</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Complex Functionality</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>All features included</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>Estimated around $7,500+</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>This is for large companies that need big websites with all the bells and whistles.</li>
                </ul>
            </div>
            <div className="hosting">
                <h2 className='heading'>Updating Your Website</h2>
                <ul>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>$50 per month</li>
                    <li className='points'><i className="fa-solid fa-angle-right"></i>We will continue to update your website as long as you give us access</li>
                </ul>
            </div>
        </section> */}