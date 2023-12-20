import './styles.css'

export default function Homepage() {

    return (
        <main id="main">
            <div id="header-section">
                <div className='column-1'>
                    <h1>Example Heading</h1>
                </div>
                <div className='column-2'>
                    <p>Example paragraph</p>
                    <button className='header-button'>Button</button>
                </div>
            </div>

            <div id="feature-section">
                <div className='column-1'>
                    <h2>Example Heading</h2>
                    <p>example paragraph</p>
                    <ul>
                        <li>list item</li>
                        <li>list item</li>
                        <li>list item</li>
                    </ul>
                </div>
                <div className='column-2 image'>
                    <img src="/" alt="image here" />
                </div>
            </div>

            <div id="benefits-section">

            </div>

            <div id="services-section">

            </div>

            <div id="stats-section">

            </div>

            <div id="testimonial-section">

            </div>

            <div id="CTA-section">

            </div>

            <div id="FAQ-section">

            </div>

            <div id="Team-section">

            </div>
        </main>
    )
}
