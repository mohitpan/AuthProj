import React, {Component} from 'react';
import Message from './Message.js';
import NavBar from './NavBar.js';
import UserMessagesList from './UserMessagesList';

class App extends Component {

    render() {
        console.log("what is children");
        console.dir(this.props.children);
        return(
        <div className="container-fluid">
            <NavBar />
            <UserMessagesList />
            {this.props.children}
        </div>
        );
    }
}


export default App;