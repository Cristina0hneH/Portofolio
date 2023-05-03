import './contact__dark.css';

export default function ContactForm(){

    const SubmitButton =(e)=>{
        e.preventDefault();
    }
    return (<div className="contact">
            <div className="centered">
                <h3>Contact</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <form onSubmit={SubmitButton} className="contactForm">
            <div className="contactName">
                <div className="firstName">
                    <label>first name</label>
                    <input type="text"  placeholder='first name'/>
                </div>
                <div className="lastName">
                <label>last name</label>
                <input type="text"  placeholder='last name'/>
                </div>
            </div>
            <div className="email"><label>email adress</label>
            <input type="text"  placeholder='email'/></div>
            <div className="message"><label>message</label>
            <input type="textarea"  placeholder='message'/></div>
            <button type="submit" className="submitBtn" onSubmit={SubmitButton}>Submit</button>
        </form>

    </div>)
}