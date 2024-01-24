import { Link } from 'react-router-dom'
import './styles.css'
import personalTrainingScreenshot from '../../assets/client-personal-training-screenshot.png'

export default function Homepage() {

    return (
        <main id="main">
            {/* Hero Section */}
            <section id="header-section">
                <div className='column-1 header-h1'>
                    <h1>Innovative Website Customization</h1>
                </div>
                <div className='column-2'></div>
            </section>

            {/* About Section */}
            <section id="about">
                <h2 className='about-header'>Who We Are</h2>
                <h3 className='about-us'>Our company loves to develop websites. We are a smaller business 
                that originated in Kansas City. Our aim is to provide the easiest and most pain-free method of website 
                development. All of our websites are coded from scratch which offers the best SEO (search engine optimization) 
                and customization available.</h3>
            </section>

            {/* Feature Section */}
            <section id="feature-section">
                <div className='column-1 feature'>
                    <h2>Revolutionizing website design with a focus on user experience</h2>
                    <p>Our unique approach to website design combines intuitive user interfaces with 
                        cutting-edge technology to create unforgettable online experiences.
                    </p>
                    <ul className='unordered-list'>
                        <li><i className="fa-solid fa-square-check"></i>User focused designs that captivates your audience</li>
                        <li><i className="fa-solid fa-square-check"></i>Innovative solutions tailored to your sepcific needs</li>
                        <li><i className="fa-solid fa-square-check"></i>Transforming your online presence into a competitive advantage</li>
                    </ul>
                </div>
                <div className='column-2 feature-image-div'>
                    <img className='feature-img' src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image of software development code" />
                </div>
            </section>

            {/* Feature List Section */}
            <section id='feature-list-section'>
                <div className='column-2 feature-2 image'>
                    <img className='feature-list-img' src="https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image of search engine optimization sketch" />
                </div>
                <div className='column-1 feature-1'>
                    <div className='item-1'>
                        <h3>Custom Design</h3>
                        <p>We offer a range of services including a custom designed website exactly how you want it.</p>
                    </div>
                    <div className='item-2'>
                        <h3>Responsive Layouts</h3>
                        <p>Our services include a responsive layout to make your website stand out from all the rest.</p>
                    </div>
                    <div className='item-3'>
                        <h3>SEO Optimization</h3>
                        <p>With our SEO (Search Engine Optimization) you can take your presence to the next level. 
                            You will stand out from the competition and attack your target audience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits-section">
                <div className='column-1 benefits'>
                    <p>Innovative</p>
                    <h2>Unlock Your Website's Full Potential</h2>
                    <p>Choosing our company comes with a range of benefits. We specialize in 
                        designing websites that drive increased traffic, improve conversion rates, 
                        and provide exceptional support. With our expertise, your online presence will reach new heights.
                    </p>
                    <ul>
                        <li><i className="fa-solid fa-check"></i>Increase Traffic to Your Website</li>
                        <li><i className="fa-solid fa-check"></i>Boost Converstion Rates</li>
                        <li><i className="fa-solid fa-check"></i>Exceptional Support for Your Business</li>
                    </ul>
                    <div>
                        <Link target='_blank' to={'https://designpowers.com/blog/diy-website-vs-custom'} className='benefits-button'>Learn More</Link>
                        <Link to={'/services'} className='benefits-button'>See Price Ranges</Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            {/* <section id="services-section">
                <div className='row-1'>
                    <h3>Our Services</h3>
                    <p>We offer a wide range of website design services to help businesses establish an online 
                        presence and attract customers.
                    </p>
                    <div>
                        <Link to={'/services'} className='services-button'>Learn More</Link>
                    </div>
                </div>
                <div className='row-2'>
                    <h3>Website Development</h3>
                    <p>Our team of experienced developers creates custom websites that are visually appealing and user-friendly.</p>
                    <div>
                        <Link to={'/services'} className='services-button'>Learn More</Link>
                    </div>
                </div>
                <div className='row-3'>
                    <h3>E-commerce Solutions</h3>
                    <p>We specialize in building secure and scalable e-commerce platforms that drive sales 
                        and enhance customer experience.
                    </p>
                    <div>
                        <Link to={'/services'} className='services-button'>Learn More</Link>
                    </div>
                </div>
            </section> */}

            {/* Stats Section */}
            <section id="stats-section">
                <div className='column-1 stats'>
                    <h2>Experience the <span id='stats-span'>power</span> of our designs in action</h2>
                </div>
                <div className='column-2 stats-img-div'>
                    {/* NEED TO LINK WHEN WEBSITES ARE LIVE BELOW */}
                    <Link target='_blank' to={''}>
                        <img className='stats-img' src={personalTrainingScreenshot} alt="image of personal training website" />
                    </Link>
                </div>
            </section>

            {/* Testimonial Section */}
            <section id="testimonial-section">
                <div className='column-1 review-div'>
                    <h2 className='reviews'>Reviews</h2>
                </div>
                <div className='column-2 testimonial'>
                    <p className='comment'>"My experience working with this company was exceptional. They delivered 
                        a beautiful website that perfectly captured my brand."
                    </p>
                    <div className='testimonial-info'>
                        <p className='name'>Brennon Warrick</p>
                        <p className='profession'>Personal Trainer</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="FAQ-section">
                <h2 className='FAQs'>FAQs</h2>
                <p className='FAQ'>These are some of the most frequently asked questions</p>
                <div className='question-1'>
                    <h4>How long does it take to create a website from scratch?</h4>
                    <p>Since we pride ourselves on our flexibility, all websites may take 
                        different amounts of time to create, however, simple websites only take us a few days, 
                        while much larger ones may take weeks. Whats guaranteed is that you will get the website you're 
                        looking for. 
                    </p>
                </div>
                <div className='question-2'>
                    <h4>How much will it cost to create a website?</h4>
                    <p>All websites are different, so all prices will be as well. For small simple websites 
                        the cost would average anywhere from $500 to $3,000. While much larger more responsive designs 
                        could range from $5,000 all the way to $15,000.
                    </p>
                </div>
                <div className='question-3'>
                    <h4>How much detail is put into making the websites?</h4>
                    <p>Our websites will turn out just how you want them. We will personally work with you to ensure 
                        that every little detail is perfect. If you have less preferences, do not worry, we can handle 
                        the design on our end as well!
                    </p>
                </div>
                <div className='question-4'>
                    <h4>Do I need to pay for a website domain?</h4>
                    <p>The short answer is yes. After we create your website you must then create a domain for it, which 
                        makes it visible to other people online. This is extremely simple to do, and we can even recommend domain 
                        hosting providers for you. First, you find a domain hosting service and pay a small fee anywhere from 
                        $1 to $5 a month. Thats it! You will then be a proud website owner.
                    </p>
                </div>
                <div className='question-5'>
                    <h4>Website builders are a pain to use. How much easier will the process be here?</h4>
                    <p>Great question! So instead of using a website builder to drag and create your own website, we 
                        handle the whole process from beginning to end, so you don't have to stress. All we need from you 
                        are the details that you know you want to include. For example, color schemes, layout designs, 
                        one large page or many pages. The best part is, if you have no idea where to start, we can create 
                        the website for you and continue to shape it however you see fit. 
                    </p>
                </div>
                <div className='question-6'>
                    <h4>What if I want to make changes or update my website after I already paid and set up my own domain?</h4>
                    <p>We will charge a fee around $50 a month to update and make all desired website changes. Want to update your 
                        website for every season? We've got you covered. 
                    </p>
                </div>
            </section>
        </main>
    )
}
