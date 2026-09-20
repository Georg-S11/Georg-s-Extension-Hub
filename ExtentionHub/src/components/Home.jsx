import { Button, LinkButton } from "./Button"
import "./Home.css"

export function Home() {
    return (
        <section className="home">
                    <div className="home-update">• LIVE UPDATES ACTIVE</div>
                    <h1>Precision tools for the <br/> modern web experience.</h1>
                    <p>A collection of high-performance Chrome extensions designed for power users, <br/> developers, and creators. Elevate your browser from a viewer to a workstation.
                    </p>
                    <div className="home-btns">
                        <Button 
                            className="home-btn"
                            value="⚡ Explore All Tools" 
                            onClick={() => document.getElementById("extensions")?.scrollIntoView({ behavior: "smooth"})}
                         />
                        <LinkButton className="home-btn home-link" value="View on GitHub" />
                    </div>
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
        </section>
    ) 
}
