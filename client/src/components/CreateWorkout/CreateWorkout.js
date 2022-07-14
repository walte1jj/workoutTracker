import React, { useEffect, useState  } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateWorkout() {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [users, setUsers] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/users")
        .then(response => {
            if (response.data.length > 0) {
                setUsername(response.data[0].username)
                users(response.data.map(user => user.username))
            }
        })
        .catch(err => console.error(err))
    })

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    const onChangeUsername = ((e) => {
        this.useState({
            username: e.target.value
        })
    })

    const onChangeDescription = (e) => {
        this.useState({
            description: e.target.value
        })
    }

    const onChangeDuration = (e) => {
        this.useState({
            duration: e.target.value
        })
    }

    const onChangeDate = (date) => {
        this.useState({
            date: date
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const state = this.state;

        const workout = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date
        }

        axios.post('http://localhost:5000/workouts', workout)
            .then(res => alert(res.data))
            .catch(err => console.error(err))

        window.location = "/";
        }

        return (
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            ref={this.userInput}
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )    
};