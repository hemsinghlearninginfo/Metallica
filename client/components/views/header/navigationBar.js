import React, { Component } from 'react';
import { NavLink, HashRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

                <NavLink className="navbar-brand" to="/"><FontAwesomeIcon icon="align-left" /> Metallica</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/postOrders">Post My Order</NavLink>
                        </li>
                        <li className="nav-item">
                        <div className=""></div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Help
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/faqs">FAQs</NavLink>
                                <NavLink className="dropdown-item" to="/termsofuser">Terms of User</NavLink>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register"><FontAwesomeIcon icon="user-plus" /> Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login"><FontAwesomeIcon icon="sign-in-alt" /> Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}