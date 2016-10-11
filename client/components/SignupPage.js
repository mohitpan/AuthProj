import React from 'react';
import {connect} from 'react-redux';
import {signupRequest} from '../actions/signUpAction';
import {addUserMessages} from '../actions/UserMessages';
import Form from './Form';

class SignupPage extends React.Component {
    render() {
        const pagetype = 'SignUp';
        
    return(
        <div className="row">
            <div className="col-md-5 col-md-offset-3">
            <h1>Register to become previliged user</h1>
                <Form Request={this.props.signupRequest} 
                addUserMessages={this.props.addUserMessages} pagetype={pagetype}/>
            </div>
        </div>
        );
        }
}

export default connect(null, {signupRequest,addUserMessages})(SignupPage);