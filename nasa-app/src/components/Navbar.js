import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

export default function NavBar(){
    return (
        <div className="navbar">
            <div className="header">
            <div className="logo-name">
            <img className="nasa-logo" src={logo} alt="logo"/>
            <p className="name">Surbhi Jain</p>
            </div>
                <Link className="link" to="/" >Astronomy Picture Of The Day</Link>
            </div>
        </div>
    )
}