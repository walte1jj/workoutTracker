import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import WorkoutList from "./components/workoutList/WorkoutList"
import EditWorkout from "./components/EditWorkout/EditWorkout"
import CreateWorkout from "./components/CreateWorkout/CreateWorkout"
import CreateUser from "./components/CreateUser/CreateUser"


function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <br />
      <div classname = "container">
        {/* <Route path = "/" exact component = { WorkoutList } />
        <Route path = "/edit/:id" component = { EditWorkout } />
        <Route path = "/create" component = { CreateWorkout } />
        <Route path = "/user" component = { CreateUser } /> */}
      </div>
      <Footer/>
    </Router>

  );
}

export default App;