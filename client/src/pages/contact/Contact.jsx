import './styles.css'
import { useState } from 'react'
// import 'dotenv/config'

export default function Contact() {

    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        {/* ENCRYPT CODE BELOW WHEN WEBSITE DEPLOYS */}
        const config = {
            Host : process.env.HOST_NAME,
            Username : process.env.USERNAME,
            Password : process.env.PASSWORD,
            Port: process.env.PORT,
            To : 'quantumsites4sale@gmail.com',
            From : formState.email,
            Body : formState.message
        };

        if(window.Email) {
            window.Email.send(config).then(() => alert('email sent successfully'));
        }
    }

    return(
        <section id='contact-page'>
                <div className='form-column-1 form-div'>
                    <h1 className='form-h1'>Contact</h1>
                    <p className='form-info'>Email: quantumsites4sale@gmail.com<br></br>
                        Phone: 660-287-2151
                    </p>
                </div>
            <form className='form' action="/" onSubmit={submitHandler}>
                <div className='form-column-2 form-div'>
                    <input required className='contact-form' id='first-name' type="text" placeholder='First Name' value={formState.firstName || ''} onChange={changeHandler}/>
                    <input required className='contact-form' id='last-name' type="text" placeholder='Last Name' value={formState.lastNme || ''} onChange={changeHandler}/>
                    <input required className='contact-form' id='email' type="email" placeholder='Email' value={formState.email || ''} onChange={changeHandler}/>
                    <input required className='contact-form' id='phone' type="phone" placeholder='Phone' value={formState.phone || ''} onChange={changeHandler}/>
                    <textarea className='contact-form' name="message" id="message" cols="30" rows="10" placeholder='Message' value={formState.message || ''} onChange={changeHandler}></textarea>
                    <button className='form-button' type='submit'>Submit</button>
                </div>
            </form>
        </section>
    );
}
