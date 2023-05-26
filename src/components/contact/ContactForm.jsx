import emailjs from "@emailjs/browser";
import { sendForm, send } from "emailjs-com";
import React, { useState } from "react";
import "./contact__dark.css";

export default function ContactForm() {
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
    if (form.email === "") {
      console.log("pls add email");
    } else if (form.message === "") {
      console.log("what is your message?");
    } else {
      emailjs
        .send("service_dx7j55j", "template_h7so5d4", form, "iRFWwdY6NdXoQvjov")
        .then(
          (res) => {
            return res;
          },
          (error) => {
            console.log(error);
          }
        );
    }

    // } else{
    //     console.log("validation not successful")
    // }
    // validateForm();
  };
  return (
    <section className="contact" id="contact">
      <h2>&lt; contact / &gt; </h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-name">
          <div className="first-name">
            <label htmlFor="firstName">&lt; first name / &gt;</label>
            <input
              type="text"
              id="firstName"
              required
              placeholder="first name"
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">&lt; last name / &gt;</label>
            <input type="text" id="lastName" required placeholder="last name" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="email" required>
          &lt; email / &gt;
          </label>
          <input type="text" id="email" placeholder="email" />
        </div>
        {/* {email ? "send form" : "add email" } */}
        <div className="message">
          <label htmlFor="message">&lt; message / &gt;</label>
          <textarea type="textarea" id="message" required placeholder="message">
          </textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
