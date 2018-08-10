/* eslint-disable no-console*/
require('dotenv').config();

var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require("body-parser"),
  expressSantitzer = require("express-sanitizer"), // To Remoce Inject scripts
  methodOverride = require('method-override'), // To support Delete, Put request
  path = require('path'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../webpack.config')
  ;


const app = express();
const SeedDB = require('./seed/index');
//const router = express.Router();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_DATABASE_URL;

//mongoos.Promise = require('bluebird');
mongoose.Promise = global.Promise;


// app.use((req, res, next) => {
//   if (mongoos.connection.readyState) {
//     console.log('is connecting');
//     next();
//   }
//   const mongoURL = process.env.MONGO_DATABASE_URL;
//   MongoClient
//     .connect(mongoURL, { useNewUrlParser: true })
//     .then(() => next())
//     .catch(err => console.error(`Mongoose Error: ${err.stack}`));
// });

app.use(webpackMiddleware(webpack(webpackConfig), {
  hot: true,
  colors: true,
  publicPath: '/',
  noInfo: true
}));

// Putting Some Pre-requisted Data.
SeedDB();

// app.use(express.static('build'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // it should be after body parser module use and it purpose is to use this module to remove script tag from textarea
// app.use(expressSantitzer());
// app.use(methodOverride("_method"));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
