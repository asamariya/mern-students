const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

// Express Route
const studentRoute = require('./routes/student.route');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true
  })
  .then(
    () => console.log('Database connected!'),
    error => console.log('Could not connect to the database : ' + error)
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use('/students', studentRoute);

// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
