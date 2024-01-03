import memberPicture from '../assets/WIN_20230531_12_47_29_Pro.jpg'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Homepage() {

    return (
        <main id="main">
            {/* Header Section */}
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

            {/* Feature Section */}
            <section id="feature-section">
                <div className='column-1 feature'>
                    <h2>Revolutionizing website design with a focus on user experience</h2>
                    <p>Our unique approach to website design combines intuitive user interfaces with 
                        cutting-edge technology to create unforgettable online experiences.
                    </p>
                    <ul className='unordered-list'>
                        <li>User focused designs that captivates your audience</li>
                        <li>Innovative solutions tailored to your sepcific needs</li>
                        <li>Transforming your online presence into a competitive advantage</li>
                    </ul>
                </div>
                <div className='column-2 image'>
                    <img src="/" alt="image here" />
                </div>
            </section>

            {/* Feature List Section */}
            <section id='feature-list-section'>
                <div className='column-1'>
                    <div className='item-1'>
                        <h3>Custom Design</h3>
                        <p>We offer a range of services including a custom designed website exactly how you want it.</p>
                    </div>
                    <div className='item-2'>
                        <h3>Responsive Layouts</h3>
                        <p>Our services include a responsive layout to make your website stand out.</p>
                    </div>
                    <div className='item-3'>
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
                        <li>Increase Traffic to Your Website</li>
                        <li>Boost Converstion Rates</li>
                        <li>Exceptional Support for Your Business</li>
                    </ul>
                    <div>
                        <button>Learn More</button>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className='column-2 benefits-image'>
                    <img src="/" alt="image here" />
                </div>
            </section>

            {/* Services Section */}
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

            {/* Stats Section */}
            <section id="stats-section">
                <div className='column-1 stats'>
                    <h2>Experience the power of our designs in action</h2>
                </div>
                <div className='column-2 stat-numbers'>
                    <p>We are a new company, with highly satisfied clients</p>
                    <div className='spot-1'>
                        <h2>50%</h2>
                        <p>Increase in converstion rates for our clients' websites</p>
                    </div>
                    <div className='spot-2'>
                        <h2>50%</h2>
                        <p>Boost in website traffic for our clients' businesses</p>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section id="testimonial-section">
                <div className='column-1 video'>
                    <Link>Link to video or a website statements</Link>
                </div>
                <div className='column-2 testimonial'>
                    <p>Our experience working with this company was exceptional. They delivered 
                        a beautiful website that perfectly captured my brand.
                    </p>
                    <div className='testimonial-info'>
                        <p className='name'>Brennon Warrick</p>
                        <p className='profession'>Personal Trainer</p>
                    </div>
                </div>
            </section>

            {/* <div id="CTA-section">

            </div> */}

            {/* FAQ Section */}
            <section id="FAQ-section">
                <h2 className='FAQs'>FAQs</h2>
                <p className='FAQ'>These are some of the most frequently asked questions</p>
                <div className='question-1'>
                    <h4>How long does it take to create a website from scratch?</h4>
                    <p>Since we pride ourselves on our flexibility, all websites may take 
                        different amounts of time to create, however, simple websites only take us a couple days, 
                        while much larger ones may take weeks. Whats guaranteed is that you will get the website you've 
                        always dreamed of or your money back. 
                    </p>
                </div>
                <div className='question-2'>
                    <h4>How much will it cost to create a website?</h4>
                    <p>All websites are different, so all prices will be as well. We believe is handing in a 
                        beautiful finished product over the length it will take to create. For small simple websites 
                        the cost would average anywhere from $100 to $3,000. While much larger more responsive designs 
                        could range from $5,000 all the way to $12,000.
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
                        one large page or many pages. The best part is, if you have no idea where to start, we will create 
                        the website for you and continue to shape it however you see fit. 
                    </p>
                </div>
                <div className='question-6'>
                    <h4>What if I want to make changes or update my website after I already paid and set up my own domain?</h4>
                    <p>At QuantumSites, we will not charge to change tiny little things that will make you happy. 
                        We will charge a fee for massive renovations and whole layout changes that will be different for 
                        every business's websites, however we will do this as many times as you want. Want to update your 
                        website for every season? We've got you covered. 
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section id="team-section">
                <div className='member-heading'>
                    <h2>Employee of the Year</h2>
                    <p>Our team is dedicated to exceptional results</p>
                </div>
                <div className='member'>
                    <img className='member-image' src={memberPicture} alt="image of team member" />
                    <p className='name'><strong>Zach Barnes</strong></p>
                    <p className='position'>Full-stack Developer</p>
                    <p className='description'>
                        Zach is a skilled web designer and developer who brings websites to life with his coding expertise.
                    </p>
                </div>
            </section>
        </main>
    )
}
