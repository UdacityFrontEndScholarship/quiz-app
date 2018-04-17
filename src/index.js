import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker'; //Don't change this line

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker(); //invoking ServiceWorker
