import React, { useEffect, useState  } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EditWorkout() {
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [users, setUsers] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/workouts")
        .then(response => {
            if (response.data.length > 0) {
                setUsername(response.data[0].username),
                setDescription(response.data.description),
                setDuration(response.data.duration),
                setDate(new Date(response.data.date))
            }
        })
        .catch(err => console.error(err))

        axios.get("http://localhost:5000/users/")
        .then(response => {
            if (response.data.length > 0) {
                useState({
                    users: response.data.map(user => user.username)
                })
            }
        })
    })

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    const onChangeUsername = ((e) => {
        this.setState({
            username: e.target.value
        })
    })

    const onChangeDescription = ((e) => {
        this.setState({
            description: e.target.value
        })
    })

    const onChangeDuration = ((e) => {
        this.setState({
            duration: e.target.value
        })
    })

    const onChangeDate = ((date) => {
        this.setState({
            date: date
        })
    })

    const onSubmit = ((e) => {
        e.preventDefault();

        const workout = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post('http://localhost:5000/workouts/update/' + this.props.match.params.id, workout)
            .then(res => alert(res.data))
            .catch(err => console.error(err))

        window.location = '/';
    })
        return (
            <div>
                <h3>Edit Workout</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Username: </label>
                    <select
                        ref={this.userInput}
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(user => {
                                return <option key={user}>{user}</option>
                            })
                        }
                    </select>

                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription} />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>

                    <div className="form-group">
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Edit Workout</button>
                    </div>
                </form>
            </div>
        )
    
};