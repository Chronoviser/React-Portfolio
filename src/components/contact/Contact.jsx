import { useState } from 'react';
import './Contact.scss';

function Contact() {

    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {
                        sent && <span>Thanks, I'll shoot the reply ASAP :) </span>
                    }
                </form>
            </div>
        </div>
    );
}

export default Contact;