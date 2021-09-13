import { useState } from 'react';
import './Contact.scss';
import axios from '../../api/axios';

function Contact() {

    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email : " + email + ", message: " + message);
        if (email && message) {
            axios
                .post('/message',
                    {
                        email: email,
                        message: message
                    })
                .then(_ => {
                    setSent(true);
                })
        }
        else {
            console.log('Incomplete Post!');
        }

        clear();
    }

    const clear = () => {
        setEmail("");
        setMessage("");
        setTimeout(() => {
            setSent(false);
        }, 5000);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <textarea
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
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