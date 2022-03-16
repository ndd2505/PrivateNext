const NavItem = ({text,link,isActive = false}) => {
    return (
        <li className={`nav-item menu-items ${isActive ? "active" : ""}`}>
            <a className="nav-link" href={link}>{text}</a>
        </li>
    )
}

export default NavItem;