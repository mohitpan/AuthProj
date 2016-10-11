import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">AuthDemo</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to='/'>Home</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><Link to='login'>LogIn</Link></li>
                    <li className="active"><Link to='signup'>Sign Up</Link></li>
                </ul>
            </div>
        </nav>
        );
}


export default NavBar;