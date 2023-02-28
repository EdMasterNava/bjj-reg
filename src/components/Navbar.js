import React from "react";
import { Link, useMatch, useResolvedPath} from "react-router-dom";
import "./css/Navbar.css";
function Navbar(){
    //state

    //render
    return (
        <nav className="nav">
            <Link to="/" className="site-title">BJJ Register</Link>
            <ul>
                <CustomLink to="/events">Events</CustomLink>
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