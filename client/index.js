import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
// import App from './components/App.js';
import { Router,browserHistory } from 'react-router';
import  thunk from 'redux-thunk'
import routes from './routes.js';
import mainReducer from './reducers/mainReducer';


const store = createStore(
    mainReducer,
    applyMiddleware(thunk));


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.querySelector('#Myapp'));