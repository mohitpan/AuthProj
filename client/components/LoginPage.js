import React from 'react';
import {connect} from 'react-redux';
import {LoginRequest} from '../actions/LoginAction';
import {addUserMessages} from '../actions/UserMessages';
import Form from './Form';

class LoginPage extends React.Component {
    render() {
        const pagetype = 'Login';
        
    return(
        <div className="row">
            <div className="col-md-5 col-md-offset-3">
            <h1>Login to see full details user</h1>
                <Form Request={this.props.LoginRequest} 
                addUserMessages={this.props.addUserMessages}  pagetype={pagetype}/>
            </div>
        </div>
        );
        }
}

export default connect(null, {LoginRequest,addUserMessages})(LoginPage);