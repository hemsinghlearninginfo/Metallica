const express = require('express');
const app = express();
const config = require('./config/config');
const auth = require('./auth/routes');
const api = require('./api/api');

// Database setup
const mongoose = require('mongoose');

// // Drop Testing Database
// mongoose
//   .connect('mongodb://127.0.0.1:27017/metallica-test', { useNewUrlParser: true }, () => {
//     mongoose.connection.db.dropDatabase();
//   });

// Connect to the database
mongoose
  .connect(config.db.url, { useNewUrlParser: true }, () => {
    console.log(`Connected Database URL: ${config.db.url}`);
  });

require('./config/middlewares')(app);

// setup the api
app.use('/api', api);
app.use('/auth', auth);

// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);

// // Global Error Handling
// app.use((err, req, res) => {
//   // if error thrown from jwt validation check
//   if (err.name === 'UnauthorizedError') {
//     return res.status(401).send({ error: 'Invalid token' });
//   }
//   return res.status(500).send({ error: 'Something went wrong.' });
// });

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

module.exports = app;