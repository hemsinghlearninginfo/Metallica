/* eslint-disable no-console*/
require('dotenv').config();

const express = require('express'),
  bodyParser = require("body-parser"),
  expressSantitzer = require("express-sanitizer"), // To Remoce Inject scripts
  methodOverride = require('method-override'), // To support Delete, Put request
  path = require('path'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../webpack.config'),
  mongoos = require('mongoose')
  ;

const SeedDB = require('./seed/index');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

// Putting Some Pre-requisted Data.
SeedDB();

mongoos.Promise = require('bluebird');
app.use((req, res, next) => {
  if (mongoos.connection.readyState) next();
  else {
    const mongoURL = process.env.MONGO_DATABASE_URL;
    mongoos
      .connect(mongoURL, { useNewUrlParser: true })
      .then(() => next())
      .catch(err => console.error(`Mongoose Error: ${err.stack}`));
  }
});
app.use(webpackMiddleware(webpack(webpackConfig), {
  hot: true,
  colors: true,
  publicPath: '/',
  noInfo: true
}));

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
// it should be after body parser module use and it purpose is to use this module to remove script tag from textarea
app.use(expressSantitzer());
app.use(methodOverride("_method"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log('Application is running');
  console.log('App is running on localhost: ', PORT);
});
