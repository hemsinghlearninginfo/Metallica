
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main'; // Entry Point for application
import 'bootstrap';
import './resources/css/main.scss';
import './resources/css/_custom.scss';
import './resources/css/_error.scss';

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
