import React from "react";
import {useNav} from "../../context/NavigationProvider"
// import { Link } from "react-router-dom";

export default function Navbar() {
    const {page, setPage} = useNav() 
    console.log(page)

    return (
        <nav className="ENTERCLASS" style={{display: "flex", width: "100%"}}>
            <div className="container" style={{display: "flex", width: "100%"}}>
                {/* <a to="/">Workout Tracker</a> */}
                <div className="ENTERCLASS" style={{display: "flex", width: "100%", }}>
                    <div className="ENTERCLASS" style={{display: "flex", justifyContent: "row-reverse", width: "100%", padding: "1em", backgroundColor: "#78c2ad"}}>
                        <div className="ENTERCLASS" style={{cursor:"pointer"}} onClick={() => setPage("workouts")}>
                            Workouts
                        </div>
                        <div className="ENTERCLASS" style={{cursor:"pointer"}} onClick={() => setPage("createWorkout")}>
                           Create Workout Log
                        </div>
                        <div className="ENTERCLASS" style={{cursor:"pointer"}} onClick={() => setPage("createUser")}>
                           Create User
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}