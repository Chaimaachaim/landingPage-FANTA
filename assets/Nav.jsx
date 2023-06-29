import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom"
const Nav =()=>{
    return(
        <div className="navbar">
        <div className="logo">
        <h1>Fa<span>n</span>ta</h1>
        </div>
        <div className="second">
            <div className="links">
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="About">About</Link>
    <Link className="link" to="Contact">Contact</Link>
            </div>
        </div>
        </div>
    )
}
export default Nav 