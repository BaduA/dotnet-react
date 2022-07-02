import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="nav-container">
            <NavLink className="brand" to="/">PNGHUB Demo</NavLink>
            <NavLink to="/activities">Activities</NavLink>
            <NavLink to="/createactivity">Create Activity</NavLink>
        </div>
    )
}