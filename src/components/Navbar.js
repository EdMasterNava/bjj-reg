import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from './AuthContext';
import "./css/Navbar.css";
function Navbar(){
    const [click, setClick] = useState(false);
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const handleClick = () => setClick(!click);
    async function handleLogOut(){
        setError('');
        try {
            await logout();
        }catch {
           setError('Failed To Logout');
        }
        setClick(false);
    }
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
                    {currentUser ? <a className="logout" onClick={handleLogOut}>Log Out</a> : 
                     <div className="reg-login">
                        <CustomLink to="/bjj-reg/register" 
                                    onClick={() => setClick(false)}
                                    className="">Register</CustomLink>
                        <CustomLink to="/bjj-reg/login" onClick={() => setClick(false)}>Login</CustomLink>
                     </div>}
                    
                </ul>
            </nav>
            <div className={click ? "side-menu active" : "side-menu"}>
                <ul>
                    <CustomLink to="/bjj-reg/events" onClick={handleClick}>Events</CustomLink>
                    {currentUser ? <a className="logout" onClick={handleLogOut}>Log Out</a> :
                     <div className="side-reg-login">
                        <CustomLink to="/bjj-reg/register" onClick={handleClick}>Register</CustomLink>
                        <CustomLink to="/bjj-reg/login" onClick={handleClick}>Login</CustomLink>
                     </div>}
                    
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