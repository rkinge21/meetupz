import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper light-blue lighten-2">
                    <div className="nav-wrapper">
                        <a href="/"className="brand-logo">Rahul Kinge</a>
                        <Link to="#" data-activates="main-menu" className="button-collapse show-on-large">
                            <i className="fa fa-bars"></i>
                        </Link>

                        <ul className="right hide-on-small-only">
                            <li> <Link to="/"> <i className="fa fa-users"></i>Meetups</Link> </li>
                            <li> <Link to="/meetups/add"> <i className="fa fa-plus"></i>Add Meetup</Link> </li>
                        </ul>
                        <ul className="side-nav" id="main-menu">
                            <li> <Link to="/"> <i className="fa fa-users"></i>Meetups</Link> </li>
                            <li> <Link to="/meetups/add"> <i className="fa fa-plus"></i>Add Meetup</Link> </li>
                            <li> <Link to="/About"> <i className="fa fa-question-circle"></i>About</Link> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
