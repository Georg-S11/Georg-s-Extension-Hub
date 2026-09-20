import { useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contact.css"

export function Contact({ onClose }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // EmailJS serviceID, TemplateID, and Public Key
        const serviceId = "service_vz8fgbc";
        const templateId = "template_yruynna";
        const publicKey = "6SAtxGv_-gWPlH5zI";
        
        // Objects containing dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Georg",
            message: message
        };

        // Sending email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log("Error sending email:", error);
            });
    };

    return (
        <div className="contact-card" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email" 
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea 
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                >    
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}