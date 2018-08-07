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
                            <div className="col col-8">
                                <FieldGroup
                                    id="username"
                                    type="email"
                                    label="Email Id:"
                                    required
                                    placeholder="Enter your email Id"
                                    help="type your registered email address"
                                />
                            </div>
                            <div className="col col-8">
                                <FieldGroup
                                    id="password"
                                    type="password"
                                    label="Password:"
                                    required
                                    placeholder="Enter your password"
                                    help="type your registered password associated with email address"
                                />
                            </div>
                            <div className="col col-8">
                                <FormGroup>
                                    <Checkbox> Remember me</Checkbox>
                                </FormGroup>
                            </div>
                            <div className="col col-8 ">
                                <div className="row">
                                    <div className="col-sm-4 col-md-2 col-lg-2">
                                        <button className="btn btn-sm btn-primary" type="submit"><FontAwesomeIcon icon="sign-in-alt" /> Submit</button>
                                    </div>
                                    <div className="col-sm-8 col-md-10 col-lg-10">
                                        <NavLink className="link" to="/forgotpassword"> Forgot password?</NavLink>
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
