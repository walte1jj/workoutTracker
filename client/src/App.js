import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <br />
      <div classname = "container">
        <Route path = "/" exact component = { WorkoutList } />
        <Route path = "/edit/:id" component = { EditWorkout } />
        <Route path = "/create" component = { CreateWorkout } />
        <Route path = "/user" component = { CreateUser } />
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
