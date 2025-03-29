import './Link.scss'
export default function Link({ text, href = "#", style, icon }) {
    const linkClass = style === "light" ? "light-color" : "link";

    return (
        <a href={href} className={linkClass}>
            <span>{text}</span>
            {icon && <img src={icon} alt="icon" />}
        </a>
    )
}