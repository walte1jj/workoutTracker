import React, {Component} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Link, renderMatches } from "react-router-dom";

class createWorkout extends Component {
	constructor(){
		super()

	    this.state = {
	      username: '',
	      description: '',
	      duration: 0,
	      date: new Date(),
	      users: []
	    }

		this.onChangeUsername = this.onChangeUsername.bind(this);
	    this.onChangeDescription = this.onChangeDescription.bind(this);
	    this.onChangeDuration = this.onChangeDuration.bind(this);
	    this.onChangeDate = this.onChangeDate.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		axios.get('http://localhost:5000/users')
			.then(res => {
				if(res.data.length){
					this.setState({
						users: res.data.map(user => user.username),
						username: res.data[0].username
					})
				}
			})
			.catch(error => console.log(error))
	}
    onChangeUsername = ((e) => {
        this.useState({
            username: e.target.value
        })
    })

    onChangeDescription = (e) => {
        this.useState({
            description: e.target.value
        })
    }

    onChangeDuration = (e) => {
        this.useState({
            duration: e.target.value
        })
    }

    onChangeDate = (date) => {
        this.useState({
            date: date
        })
    }

    onSubmit = (e) => {
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

        render() {
        return (
            <div>
              <h3>Create New Exercise Log</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Username: </label>
                  <select ref="userInput"
                      required
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}>
                      {
                        this.state.users.map(function(user) {
                          return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                      }
                  </select>
                </div>
                <div className="form-group"> 
                  <label>Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
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
                  <label>Date: </label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
        
                <div className="form-group">
                  <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
              </form>
            </div>
            )    
                    }
        };

export default createWorkout;