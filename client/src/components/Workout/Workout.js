import React from "react"
import {Link} from "react-router-dom"

export default function Workout(props) {
    return (
        <tr>
        <td>{ props.workout.username }</td>
        <td>{ props.workout.description }</td>
        <td>{ props.workout.duration }</td>
        <td>{ props.workout.date.substring(0, 10) }</td>
        <td>
            <Link to={ "/edit/" + props.workout._id }>Edit</Link>
            <a href="#" onClick={() => props.deleteWorkout(props.workout._id)}>Delete</a>
        </td>
        </tr>
    )
    
}