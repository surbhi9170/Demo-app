import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

export default function NavBar(){
    return (
        <div className="navbar">
            <div className="header">
            <img className="nasa-logo" src={logo} alt="logo"/>
                <Link className="link" to="/" >Astronomy Picture Of The Day</Link>
            </div>
        </div>
    )
}