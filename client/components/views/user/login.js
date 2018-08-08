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
                <div className="pageContent" id="frmLogin">
                    <form>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <h4>Login</h4>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <FieldGroup
                                    id="username"
                                    type="email"
                                    label="Email Id:"
                                    required
                                    placeholder="Enter your email Id"
                                    help="type your registered email address"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <FieldGroup
                                    id="password"
                                    type="password"
                                    label="Password:"
                                    required
                                    placeholder="Enter your password"
                                    help="type your registered password associated with email address"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <FormGroup>
                                    <Checkbox> Remember me</Checkbox>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <button className="btn btn-sm btn-primary" type="submit"><FontAwesomeIcon icon="sign-in-alt" /> Submit</button>
                                    </div>
                                    <div className="col-sm-8 col-md-8 col-lg-8">
                                        <NavLink className="link" to="/forgotpassword"> Forgot password?</NavLink>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8 col-md-10 col-lg-10">
                                        Not Register <NavLink className="link" to="/register">Create an account</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;
