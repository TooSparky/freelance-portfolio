import { Link } from 'react-router-dom'
import './styles.css'

export default function Homepage() {

    return (
        <main id="main">
            <section id="header-section">
                <div className='column-1'>
                    <h1>Innovative Website Customization</h1>
                </div>
                <div className='column-2'>
                    <p>Our main focus is to create a long lasting business that stands the test of time. We put 
                        your desires first or your money back.
                    </p>
                    <button className='header-button'>Explore</button>
                </div>
            </section>

            <section id="feature-section">
                <div className='column-1'>
                    <h2>Revolutionizing website design with a focus on user experience</h2>
                    <p>Our unique approach to website design combines intuitive user interfaces with 
                        cutting-edge technology to create unforgettable online experiences.
                    </p>
                    <ul>
                        <li>User focused designs that captivates your audience</li>
                        <li>Innovative solutions tailored to your sepcific needs</li>
                        <li>Transforming your online presence into a competitive advantage</li>
                    </ul>
                </div>
                <div className='column-2 image'>
                    <img src="/" alt="image here" />
                </div>
            </section>

            <section id='feature-list-section'>
                <div className='column-1'>
                    <div>
                        <h3>Custom Design</h3>
                        <p>We offer a range of services including a custom designed website exactly how you want it.</p>
                    </div>
                    <div>
                        <h3>Responsive Layouts</h3>
                        <p>Our services include a responsive layout to make your website stand out.</p>
                    </div>
                    <div>
                        <h3>SEO Optimization</h3>
                        <p>With our SEO (Search Engine Optimization) you can take your presence to the next level. 
                            You will stand out from the competition and attack your target audience.
                        </p>
                    </div>
                </div>
                <div className='column-2 image'>
                    <img src="/" alt="image here" />
                </div>
            </section>

            <section id="benefits-section">
                <div className='column-1'>
                    <p>Innovative</p>
                    <h2>Unlock Your Website's Full Potential</h2>
                    <p>Choosing our company comes with a range of benefits. We specialize in 
                        designing websites that drive increased traffic, improve conversion rates, 
                        and provide exceptional support. With our expertise, your online presence will reach new heights.
                    </p>
                    <ul>
                        <li>Increase Traffic to Your Website</li>
                        <li>Boost Converstion Rates</li>
                        <li>Exceptional Support for Your Business</li>
                    </ul>
                    <div>
                        <button>Learn More</button>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className='column-2'>
                    <img src="/" alt="image here" />
                </div>
            </section>

            <section id="services-section">
                <div className='row-1'>
                    <h3>Our Services</h3>
                    <p>We offer a wide range of website design services to help businesses establish an online 
                        presence and attract customers.
                    </p>
                    <div>
                        <button>Learn More</button>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className='row-2'>
                    <h3>Website Development</h3>
                    <p>Our team of experienced developers creates custom websites that are visually appealing and user-friendly.</p>
                    <div>
                        <button>Learn More</button>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className='row-3'>
                    <h3>E-commerce Solutions</h3>
                    <p>We specialize in building secure and scalable e-commerce platforms that drive sales 
                        and enhance customer experience.
                    </p>
                    <div>
                        <button>Learn More</button>
                        <button>Sign Up</button>
                    </div>
                </div>
            </section>

            <section id="stats-section">
                <div className='column-1'>
                    <h2>Experience the power of our designs in action</h2>
                </div>
                <div className='column-2'>
                    <p>We are a new company, with highly satisfied clients</p>
                    <div>
                        <h2>50%</h2>
                        <p>Increase in converstion rates for our clients' websites</p>
                    </div>
                    <div>
                        <h2>50%</h2>
                        <p>Boost in website traffic for our clients' businesses</p>
                    </div>
                </div>
            </section>

            <section id="testimonial-section">
                <div className='column-1'>
                    <Link>Link to video or a statements</Link>
                </div>
                <div className='column-2'>
                    <p>Testimonial Review</p>
                </div>
            </section>

            {/* <div id="CTA-section">

            </div> */}

            <section id="FAQ-section">
                <h2>FAQs</h2>
                <p>These are some of the most frequently asked questions</p>
                <div>
                    <p>bolded text</p>
                    <p>answer to question</p>
                </div>
                <div>
                    <p>bolded text</p>
                    <p>answer to question</p>
                </div>
                <div>
                    <p>bolded text</p>
                    <p>answer to question</p>
                </div>
                <div>
                    <p>bolded text</p>
                    <p>answer to question</p>
                </div>
            </section>

            <section id="Team-section">
                <h2>Meet Our Team</h2>
                <p></p>
                <div>
                    <img src="/" alt="image of team member" />
                    <p><strong>Zach Barnes</strong></p>
                    <p>Full-stack Developer</p>
                    <p>
                        Zach is a skilled web designer and developer who brings websites to life with his coding expertise.
                    </p>
                </div>
            </section>
        </main>
    )
}
