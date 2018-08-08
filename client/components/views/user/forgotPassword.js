import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import { NavLink } from "react-router-dom";
import FieldGroup from '../../controls/controls'
import { FormGroup, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';


class ForgotPassword extends Component {

    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <div className="pageContent" id="frmLogin">
                    <form>
                        <div className="row justify-content-md-center">
                            <div className="col col-6">
                                <h4>Forgot Password</h4>
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
                                <div className="row">
                                    <div className="col-sm-4 col-md-4 col-lg-4">
                                        <button className="btn btn-sm btn-primary" type="submit"><FontAwesomeIcon icon="envelope-square" /> Submit</button>
                                    </div>
                                    <div className="col-sm-8 col-md-8 col-lg-8">
                                        <NavLink className="link" to="/Login"> Login?</NavLink>
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


export default ForgotPassword;
