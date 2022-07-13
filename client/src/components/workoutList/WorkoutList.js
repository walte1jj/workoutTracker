import React from "react";
import { Link } from "react-dom/client";
import axios from "axios";
import { useState, useEffect } from "react";

import Workout from "../Workout/Workout";

export default function WorkoutList() {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/workouts")
        .then(response => {
            if (response.data.length > 0) {
                setWorkouts(response.data)
            }
        })
        .catch(err => console.error(err))

    })

    function deleteWorkout(id) {
        axios.delete("http://localhost:5000/workouts/" + id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))

        setWorkouts(workouts.filter(el => el._id !== id))
    }

    function workoutList() {
        return workouts.map(currentWorkout => {
            return <Workout
                workout = { currentWorkout }
                deleteWorkout = { deleteWorkout }
                key = { currentWorkout._id } />
        })
    }
    return(
    <div>
        <h3>Logged workouts</h3>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
                { workouts.map((workout) => (<Workout workout={workout} deleteWorkout={deleteWorkout} />))}
            </thead>
        </table>
    </div>)
}