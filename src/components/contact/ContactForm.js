import emailjs from '@emailjs/browser';
import { sendForm, send } from 'emailjs-com';
import React, { useState, useRef } from 'react';
import './contact__dark.css';

export default function ContactForm(){
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
            const form = {
              firstName: e.target.firstName.value,
              lastName: e.target.lastName.value,
              email: e.target.email.value,
              message: e.target.message.value,
            };
            console.log(form);

     emailjs.send('service_dx7j55j','template_h7so5d4',form, 'iRFWwdY6NdXoQvjov')
            .then((res) => { 
                return res
            }, (error) => {
                console.log(error);
            });
        //  let response = await fetch("http://localhost:3001/", {
         //     method: "POST",
         //     headers: {
        //      "Content-Type": "application/json;charset=utf-8",
        //      },
        //      body: JSON.stringify(details),
        //  });
        //  console.log("Submit event triggered")
        
        //setStatus("Submit");
    }
    return (<div className="contact">
            <div className="centered">
                <h3>Contact</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <form onSubmit={handleSubmit} className="contactForm">
            <div className="contactName">
                <div className="firstName">
                    <label htmlFor="firstName">first name</label>
                    <input type="text" ref={firstNameRef} id="firstName"  placeholder='first name' />
                </div>
                <div className="lastName">
                <label htmlFor="lastName">last name</label>
                <input type="text"  id="lastName" ref={lastNameRef}  placeholder='last name'/>
                </div>
            </div>
            <div className="email"><label htmlFor="email">email adress</label>
            <input type="text" ref={emailRef}  id="email"  placeholder='email'/></div>
            <div className="message"><label htmlFor="message">message</label>
            <input type="textarea"  id="message" ref={messageRef}  placeholder='message'/></div>
            <button type="submit" className="submitBtn" >Submit</button>
        </form>

    </div>)
}