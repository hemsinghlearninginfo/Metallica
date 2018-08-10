import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import { NavLink } from "react-router-dom";
import FieldGroup from '../../controls/controls'
import { FormGroup, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';


class Login extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            companyName: ''
        };
    }

    render() {
        return (
            <div>
                <div className="pageContent frmUser frmUserWidth-Login container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="col-12">
                            <AllPages.UserScreenHeading name="Login" />
                            <div className="form-group">
                                <FieldGroup
                                    id="username"
                                    type="email"
                                    label="Email Id:"
                                    required
                                    placeholder="Enter your email Id"
                                    help="type your registered email address"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <FieldGroup
                                    id="password"
                                    type="password"
                                    label="Password:"
                                    required
                                    placeholder="Enter your password"
                                    help="type your registered password associated with email address"
                                />
                            </div>
                            <div className="form-group">
                                <label className="checkbox-inline">
                                    <input type="checkbox" value="rememberMe" />Remember Me
                                </label>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <button className="btn btn-sm btn-primary button100" type="submit"><FontAwesomeIcon icon="sign-in-alt" /> Submit</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8 col-md-8 col-lg-5">
                                        <NavLink className="link" to="/forgotpassword"> Forgot password?</NavLink>
                                    </div>
                                    <div className="col-sm-8 col-md-10 col-lg-7">
                                        Not Register <NavLink className="link" to="/register">Create an account</NavLink>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



export default Login;

