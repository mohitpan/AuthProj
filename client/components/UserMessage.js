import React from 'react';
import classnames from 'classnames';

class UserMessage extends React.Component {
    render() {
        console.log("andar wale component ki prop");
        console.dir(this.props);
        return(
            <div className={classnames('alert',{'alert-success': this.props.message.type==='success'},
                {'alert-danger': this.props.message.type==='failure'})}>
            {this.props.message.text}
            </div>
            );
    }
}



export default UserMessage;