import emailjs from '@emailjs/browser';
import { sendForm, send } from 'emailjs-com';
import React, { useState } from 'react';
import './contact__dark.css';

export default function ContactForm(){
   
    // const [ email, setEmail] = useState('');
    // const [fName, setFName] = useState('');
    // const [ lName, setLName] = useState('');
    // const [status, setStatus] = useState("Submit");
    const validated = true; 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };
        

    //     const validateForm = () =>{
            
    //         //make sure fields are not empty
    //         if(form.firstName.length === 0){
    //             return validated = false;
    //         }else if(form.lastName.length === 0 ){
    //             return validated = false;
    //         }else if(form.email.length === 0){
    //             console.log('it gets here') 
    //         }else if (form.message.length === 0){
    //             return validated = false;  
    //         }
    //     }
    // if(validated === true){
        if(form.email === ''){
            console.log("pls add email")
        }else if(form.message === ''){
            console.log("what is your message?")
        }else{
        emailjs.send('service_dx7j55j','template_h7so5d4',form, 'iRFWwdY6NdXoQvjov')
            .then((res) => { 
                return res
            }, (error) => {
                console.log(error);
            });
        }
        
        
    // } else{
    //     console.log("validation not successful")
    // }
    // validateForm();
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
                    <input type="text"  id="firstName" required  placeholder='first name' />
                </div>
                <div className="lastName">
                <label htmlFor="lastName">last name</label>
                <input type="text"  id="lastName"  required placeholder='last name'/>
                </div>
            </div>
            <div className="email"><label htmlFor="email" required>email adress</label>
            <input type="text"   id="email"  placeholder='email'/></div>
            {/* {email ? "send form" : "add email" } */}
            <div className="message"><label htmlFor="message" >message</label>
            <input type="textarea"  id="message"  required placeholder='message'/></div>
            <button type="submit" className="submitBtn" >Submit</button>
        </form>

    </div>)
}