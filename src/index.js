import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './Components/App/App.js';

import reducers from './reducers/reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import registerServiceWorker from './registerServiceWorker'; //Don't change this line

const store = createStore(reducers,  applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// registerServiceWorker(); //invoking ServiceWorker
 