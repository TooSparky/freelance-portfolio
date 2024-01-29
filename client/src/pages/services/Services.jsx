import './styles.css'

export default function Services() {
    return(
        <section id='services-page'>
            <h1 className='services-page-header'>Services</h1>
            <p className='services-page-info'>*All prices are estimates because no website is the same*</p>
            <p className='services-page-more-info'>Prices are determined by the amount of pages plus all additional add-ons, such as mobile 
            responsiveness, online payment methods, logo maker, custom designs, etc.</p>
            <div className='card-container'>
                <div className='flip-card'>
                    <div className='flip-card-front deal-1'>
                        <div className='inner'>
                            <h2 id='bronze' className='card-h2'>Single Page Website</h2>
                            {/* <img className='card-image' src="https://cdn.pixabay.com/photo/2016/11/09/18/54/refracted-1812461_640.jpg" alt="image of bronze" /> */}
                        </div>
                    </div>
                    <div className='flip-card-back deal-1'>
                        <div className='inner'>
                            <p>$500 - $2,500</p>
                        </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-front deal-2'>
                        <div className='inner'>
                            <h2 id='bronze' className='card-h2'>2-5 Page Website</h2>
                            {/* <img className='card-image' src="https://cdn.pixabay.com/photo/2016/11/09/18/54/refracted-1812461_640.jpg" alt="image of bronze" /> */}
                        </div>
                    </div>
                    <div className='flip-card-back deal-2'>
                        <div className='inner'>
                            <p>$2,500 - $5,000</p>
                        </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-front deal-3'>
                        <div className='inner'>
                            <h2 id='bronze' className='card-h2'>5-10 Page Website</h2>
                            {/* <img className='card-image' src="https://cdn.pixabay.com/photo/2016/11/09/18/54/refracted-1812461_640.jpg" alt="image of bronze" /> */}
                        </div>
                    </div>
                    <div className='flip-card-back deal-3'>
                        <div className='inner'>
                            <p>$5,000 - $10,000</p>
                        </div>
                    </div>
                </div>
                <div className='flip-card'>
                    <div className='flip-card-front deal-4'>
                        <div className='inner'>
                            <h2 id='bronze' className='card-h2'>11+ Page Website</h2>
                            {/* <img className='card-image' src="https://cdn.pixabay.com/photo/2016/11/09/18/54/refracted-1812461_640.jpg" alt="image of bronze" /> */}
                        </div>
                    </div>
                    <div className='flip-card-back deal-4'>
                        <div className='inner'>
                            <p>$7,500 - $15,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='long-card-container'>
                <div className='long-flip-card'>
                    <div className='long-flip-card-front'>
                        <div className="inner">
                            <h2 id='web-maintenance' className='card-h2'>Website Maintenance</h2>
                            {/* <img className='card-image' src="https://cdn.pixabay.com/photo/2021/10/11/13/12/website-6700615_1280.png" alt="image of maintenance on a computer" /> */}
                        </div>
                    </div>
                    <div className='long-flip-card-back'>
                        <div className="inner">
                            <p>Starting as low as $50 per month</p>
                            <p>This includes minor updates and quick changes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
