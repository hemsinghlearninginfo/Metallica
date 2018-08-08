import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import { NavLink } from "react-router-dom";
import FieldGroup from '../../controls/controls'
import { FormGroup, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';


class Register extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="pageContent" id="frmRegister">
                    <form>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <h4>Register</h4>
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
                                    help="create your registered password"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <FieldGroup
                                    id="passwordMatch"
                                    type="password"
                                    label="Confirm Password:"
                                    required
                                    placeholder="Enter your confirm password"
                                    help="re-type your password to confirm"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-3">
                                <FieldGroup
                                    id="firstName"
                                    type="text"
                                    label="First Name:"
                                    required
                                    placeholder="Enter your First Name"
                                />
                            </div>
                            <div className="col col-3">
                                <FieldGroup
                                    id="lastName"
                                    type="text"
                                    label="Last Name:"
                                    required
                                    placeholder="Enter your Last Name"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <FormGroup>
                                    <Checkbox> I agree to the <NavLink className="link" to="/termsofuser" target="_blank" >Terms of user</NavLink></Checkbox>
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <button className="btn btn-sm btn-primary" type="submit"><FontAwesomeIcon icon="sign-in-alt" /> Submit</button>
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


export default Register;
