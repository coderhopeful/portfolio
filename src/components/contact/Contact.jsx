import React from 'react'
import "./contact.css"
import phone from "../../images/phone.png"
import address from "../../images/address.png"
import email from "../../images/email.png"
import { useContext, useRef, useState } from "react";



const Contact = () => {
    const formRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();

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
                        <input type="text" name="username"  placeholder='Name' />
                        <input type="text" name="subject"  placeholder='Subject' />
                        <input type="email" name="email"  placeholder='Email' />
                        <textarea name="message"  rows="5" placeholder='Message'></textarea>
                        <button>Submit</button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default Contact