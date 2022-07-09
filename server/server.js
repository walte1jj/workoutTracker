const express = require('express');
const mongoose = require('mongoose');

const usersRouter = require('./routes//api/user-routes');
const exercisesRouter = require('./routes/api/exercise-routes');


const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () =>
  console.log('Mongodb connection established')
);

// Routes
app.get('/', (req, res) => {
  res.send('Exercise Tracker');
})
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
