import "./Button.css"

export function Button({ value, onClick, className = "" }) {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {value}
        </button>
    )
}

export function LinkButton({ value, href, onClick, className = "" }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-link ${className}`} onClick={onClick}>
            {value}
        </a>
    )
}