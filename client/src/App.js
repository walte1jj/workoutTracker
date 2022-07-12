import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div classname = "container">
        <Route path = "/" exact component = { WorkoutList } />
        <Route path = "/edit/:id" component = { EditWorkout } />
        <Route path = "/create" component = { CreateWorkout } />
        <Route path = "/user" component = { CreateUser } />
      </div>
    </Router>
  );
}

export default App;