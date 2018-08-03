/* eslint-disable no-console*/

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';


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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log('App is running on localhost: ', PORT);
});
