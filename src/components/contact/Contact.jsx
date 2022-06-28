import React from 'react'
import "./contact.css"
import phone from "../../images/phone.png"
import address from "../../images/address.png"
import email from "../../images/email.png"
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext} from '../../context';



const Contact = () => {
    const formRef = useRef();
    const [done,setDone]= useState(false)
    const theme=useContext(ThemeContext)
    const darkMode= theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_hb7f2yh', 'template_8ipiu6h', formRef.current, 'CEQQ56QVEdiiHCKQo')
            .then((result) => {
                console.log(result.text);
                setDone(true)
                e.target.reset();
               
            }, (error) => {
                console.log(error.text);

            });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="phone num" className="c-icon" />

                            +91-9188604214
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="email" className="c-icon" />

                            emailarjunmuraly@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="address" className="c-icon" />

                            Athira House, MRRA-55, Valloor Road,
                            Poonithura, Ernakulam District
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><span className='bold'>What is my aim?</span> sit amet consectetur, adipisicing elit. Eveniet, quibusdam fugiat officia nemo labore amet et eius vero. Culpa doloremque nulla doloribus cumque deserunt illo eaque quam omnis velit porro?
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && "#333" }} type="text" name="username" placeholder='Name' />
                        <input style={{backgroundColor:darkMode && "#333" }} type="text" name="subject" placeholder='Subject' />
                        <input style={{backgroundColor:darkMode && "#333" }} type="email" name="email" placeholder='Email' />
                        <textarea style={{backgroundColor:darkMode && "#333" }} name="message" rows="5" placeholder='Message'></textarea>
                        <button>Submit</button>
                        
                        {done && <span className='success'>Email sent! Thank You..</span>}
                    </form>

                </div>
            </div>


        </div>
    )
}

export default Contact