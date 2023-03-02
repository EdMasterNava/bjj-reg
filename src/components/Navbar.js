import React, { useState } from "react";
import { Link, useMatch, useResolvedPath} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import "./css/Navbar.css";
function Navbar(){
    //state
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    //render
    return (
        <nav className="nav">
            <div className="left-nav">
                <FontAwesomeIcon icon={click ? faXmark : faBars} onClick={handleClick}/>
                <Link to="/bjj-reg/" className="site-title">BJJ Register</Link>
            </div>
            <ul>
                <CustomLink to="/bjj-reg/events">Events</CustomLink>
            </ul>
        </nav>
    )
}
function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "tabs active" : "tabs"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;