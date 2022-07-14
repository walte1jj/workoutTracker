import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="ENTERCLASS">
            <div className="container">
                <Link to="/">Workout Tracker</Link>
                <div className="ENTERCLASS">
                    <ul className="ENTERCLASS">
                        <li className="ENTERCLASS">
                            <Link to="/" className="ENTERCLASS">Workouts</Link>
                        </li>
                        <li className="ENTERCLASS">
                            <Link to="/create" className="ENTERCLASS">Create Workout Log</Link>
                        </li>
                        <li className="ENTERCLASS">
                            <Link to="/user" className="ENTERCLASS">Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}