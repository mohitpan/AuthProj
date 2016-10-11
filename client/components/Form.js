import React from 'react';
import { browserHistory} from 'react-router';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {username:'', password:''};


        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        // console.log(e.target.name + " : " + e.target.value);
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("state from form component");
        console.dir(this.state);
        this.props.Request(this.state).then(
            (data)=> {
                
                console.log("state after login is");
                console.dir(this.state);
                const response = JSON.parse(data.request.response);
                console.log(response);
                this.props.addUserMessages({
                    type:response.status,
                    text:response.description,
                    user: this.state.username
                });
                
                browserHistory.push('/')},
            ({data})=> {this.setState({error:data})});

    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
            

            <div className="form-group">
                <label className="control-label">UserName</label>
                <input type="text" 
                name="username" 
                value={this.state.username} onChange={this.onChange} 
                className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input type="password" 
                name="password"
                 value={this.state.password} onChange={this.onChange} 
                className="form-control"/>
            </div>
            <div className="form-group">
                
                <button  className="btn btn-primary btn-lg">{this.props.pagetype}</button>
            </div>
            </form>
            );
    }
}

export default Form;