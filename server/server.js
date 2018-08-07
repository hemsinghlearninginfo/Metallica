/* eslint-disable no-console*/

const express = require('express'),
  bodyParser = require("body-parser"),
  expressSantitzer = require("express-sanitizer"), // To Remoce Inject scripts
  methodOverride = require('method-override'), // To support Delete, Put request
  path = require('path'),
  webpack = require('webpack'),
  webpackMiddleware = require('webpack-dev-middleware'),
  webpackConfig = require('../webpack.config');

const SeedDB = require("./seedDb").default;
  
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

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
