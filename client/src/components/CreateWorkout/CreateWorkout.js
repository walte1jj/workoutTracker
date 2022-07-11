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

// export default CreateWorkout;

// import React, { Component } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// export default class CreateWorkout extends Component {

//     constructor(props) {
//         super(props);

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onChangeDescription = this.onChangeDescription.bind(this);
//         this.onChangeDuration = this.onChangeDuration.bind(this);
//         this.onChangeDate = this.onChangeDate.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.userInput = React.createRef();

//         this.state = {
//             username: '',
//             description: '',
//             duration: 0,
//             date: new Date(),
//             users: []
//         }
//     }

//     componentDidMount() {

//         axios.get('http://localhost:5000/users/')
//             .then(response => {
//                 if (response.data.length > 0) {

//                     this.setState({
//                         users: response.data.map(user => user.username),
//                         username: response.data[0].username
//                     })

//                 }
//             })
//             .catch(err => console.log(err))
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         })
//     }

//     onChangeDescription(e) {
//         this.setState({
//             description: e.target.value
//         })
//     }

//     onChangeDuration(e) {
//         this.setState({
//             duration: e.target.value
//         })
//     }

//     onChangeDate(date) {
//         this.setState({
//             date: date
//         })
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const state = this.state;

//         const workout = {
//             username: state.username,
//             description: state.description,
//             duration: state.duration,
//             date: state.date
//         }

//         console.log(workout);

//         axios.post("http://localhost:", workout)
//             .then(res => alert(res.data))
//             .catch(err => console.error(err))

//         window.location = "/";
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Create New Workout Log</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Username: </label>
//                         <select
//                             ref={this.userInput}
//                             required
//                             className="form-control"
//                             value={this.state.username}
//                             onChange={this.onChangeUsername}>
//                             {
//                                 this.state.users.map((user) => {
//                                     return <option
//                                         key={user}
//                                         value={user}>
//                                         {user}
//                                     </option>
//                                 })
//                             }

//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label>Description: </label>
//                         <input type="text"
//                             required
//                             className="form-control"
//                             value={this.state.description}
//                             onChange={this.onChangeDescription}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Duration (in minutes): </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={this.state.duration}
//                             onChange={this.onChangeDuration}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Date: </label>
//                         <div>
//                             <DatePicker
//                                 selected={this.state.date}
//                                 onChange={this.onChangeDate}
//                             />
//                         </div>
//                     </div>

//                     <div className="form-group">
//                         <input type="submit" value="Create Workout Log" className="btn btn-primary" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }



