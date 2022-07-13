// const express = require('express');
// const mongoose = require('mongoose');

// const usersRouter = require('./routes//api/user-routes');
// const exercisesRouter = require('./routes/api/exercise-routes');


// const app = express();
// const port = process.env.PORT || 3000;

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Database
// // const uri = process.env.MONGO_URI;
// // mongoose.connect(uri, {
// //   useNewUrlParser: true,
// //   useCreateIndex: true,
// //   useUnifiedTopology: true,
// // });

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouttracker', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// mongoose.connection.once('open', () =>
//   console.log('Mongodb connection established')
// );

// // Routes
// app.get('/', (req, res) => {
//   res.send('Exercise Tracker');
// })
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

// app.listen(port, () =>
//   console.log(`Server running on http://localhost:${port}`)
// );

const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  console.log("hello production")
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

