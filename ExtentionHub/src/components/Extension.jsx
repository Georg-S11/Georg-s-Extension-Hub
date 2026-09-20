import { LinkButton } from "./Button"
import "./Extension.css"

export function Extension({ logo, category, name, description, link }) {
    return (
        <div className="card"> 
            <div>
                <span className="card-logo">{logo}</span>
                <span className="card-title">{category}</span>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <LinkButton className="add-btn" value="Add to Chrome" href={link} />   
        </div>
    )
}