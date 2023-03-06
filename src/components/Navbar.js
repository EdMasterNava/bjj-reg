import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import "./css/Navbar.css";
function Navbar(){
    //state
    const [click, setClick] = useState(false);
    //methods
    const handleClick = () => setClick(!click);
    //render
    return (
        <>
            <nav className="nav">
                <div className="left-nav">
                    <div className="side-menu-toggle" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faX : faBars} className="icon"/>
                    </div>
                    <Link to="/bjj-reg/" className="site-title" onClick={() => setClick(false)}>BJJ Register</Link>
                </div>
                <ul>
                    <CustomLink to="/bjj-reg/events" onClick={() => setClick(false)}>Events</CustomLink>
                    <CustomLink to="/bjj-reg/register" onClick={() => setClick(false)}>Register</CustomLink>
                    <CustomLink to="/bjj-reg/login" onClick={() => setClick(false)}>Login</CustomLink>
                </ul>
            </nav>
            <div className={click ? "side-menu active" : "side-menu"}>
                <ul>
                    <CustomLink to="/bjj-reg/events" onClick={handleClick}>Events</CustomLink>
                    <CustomLink to="/bjj-reg/register" onClick={handleClick}>Register</CustomLink>
                    <CustomLink to="/bjj-reg/login" onClick={handleClick}>Login</CustomLink>
                </ul>
            </div>
        </>
        
    )
}
function CustomLink({ to, children, ...props}) {
    return (
        <li className={"tabs"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;