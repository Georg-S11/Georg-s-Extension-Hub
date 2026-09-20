import { useEffect, useState } from "react"
import { Button, LinkButton } from "./Button"
import { Contact } from "./Contact"

import "./Header.css"

export function Header() {
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        if (!showContact) return;

        function handleKeyDown(e) {
            if (e.key === "Escape") {
                setShowContact(false);
            }
        }
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [showContact]);

    return (
        <div className="header">
            <h2>Georg's Extension Hub</h2>
            
            <div className="nav-items">
                <Button className="nav-item" value="Home" onClick={() => (window.location.href = "/")}/>
                <Button className="nav-item" value="Information" />
                <Button className="nav-item" value="Contact Me" onClick={() => setShowContact(true)} />
            </div>
            
            <div>
                <LinkButton href="https://www.paypal.com/ncp/payment/4H8MG5B96ZDN6" className="donate" value="Donate" />
            </div>

            {showContact && (
                <div className="contact-overlay" onClick={() => setShowContact(false)}>
                    <Contact onClose={() => setShowContact(false)} />
                </div>
            )}
        
        </div>
        )
}
