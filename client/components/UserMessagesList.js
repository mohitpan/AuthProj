import React from 'react';
import {connect} from 'react-redux';
import UserMessage from './UserMessage';


class UserMessagesList extends React.Component {
    
    render() {
        console.dir( this.props);
        const messages =  <UserMessage  message={this.props.messages} />

        return(
            <div>{messages}</div>
            );
    }
}

function mapStateToProps(state) {
    console.dir(state);
    return {
        messages: state.UserMessages
    }
}

export default connect(mapStateToProps)(UserMessagesList);