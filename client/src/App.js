import React from 'react';
import Register from './components/Register';
import Navbar from './components/Navbar/Navbar';
import CreateWorkout from "./components/CreateWorkout/CreateWorkout"
import WorkoutList from "./components/workoutList/WorkoutList"
import Workout from "./components/Workout/Workout"
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavigationProvider, useNav} from "./context/NavigationProvider"
// import Navbar from './components/Navbar'

function App() {
  const {page, setPage} = useNav()

const appPage = () => {
  switch(page){
    case "workouts": 
      return <Workout/>
    case "createWorkout":
      return <CreateWorkout/>
    case "createUser": 
      return <Register/>
  }
}

const currentPage = appPage()
  return (
    <main className="App" style={{height: "100vh"}}>
      {/* <Router> */}
 
      <Navbar />
      {currentPage}
      

      {/* <Register /> */}
      {/* <Router>
      <Routes>
        <Route path="/" component={<WorkoutList/>} exact/>
        <Route path="/register" component={<Register/>} />
        <Route path='/login' component={<Login/>} />
      </Routes>
      </Router> */}
        {/* <Route path = "/" exact component = { WorkoutList } />
        <Route path = "/edit/:id" component = { EditWorkout } />
        <Route path = "/create" component = { CreateWorkout } />
        <Route path = "/user" component = { CreateUser } /> */}
    {/* </Router> */}
    </main>
  );
}

export default App;