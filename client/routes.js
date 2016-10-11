import React from 'react';
import { Route,IndexRoute } from 'react-router';
import App from './components/App.js';
import Message from './components/Message.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Message} />
        <Route path='signup' component={SignupPage} /> 
        <Route path='login' component={LoginPage} />         
    </Route>
    );