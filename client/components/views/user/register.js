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
                <div className="pageContent frmUser frmUserWidth-Register container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="col-12">
                            <AllPages.UserScreenHeading name="Register" />
                            <div className="form-group">
                                <FieldGroup
                                    id="username"
                                    type="email"
                                    label="Email Id:"
                                    required
                                    placeholder="Enter your email Id"
                                    help="type your registered email address"
                                />
                            </div>
                            <div className="form-group">
                                <FieldGroup
                                    id="password"
                                    type="password"
                                    label="Password:"
                                    required
                                    placeholder="Enter your password"
                                    help="create your registered password"
                                />
                            </div>
                            <div className="form-group">
                                <FieldGroup
                                    id="passwordMatch"
                                    type="password"
                                    label="Confirm Password:"
                                    required
                                    placeholder="Enter your confirm password"
                                    help="re-type your password to confirm"
                                />
                            </div>
                            <div className="d-flex flex-nowrap">
                                <div className="order-1 p-2">
                                    <FieldGroup
                                        id="firstName"
                                        type="text"
                                        label="First Name:"
                                        required
                                        placeholder="Enter your First Name"
                                    /></div>
                                <div className="order-2 p-2">
                                    <FieldGroup
                                        id="lastName"
                                        type="text"
                                        label="Last Name:"
                                        required
                                        placeholder="Enter your Last Name"
                                    /></div>
                            </div>
                            <div className="form-group">
                                <FormGroup>
                                    <Checkbox> I agree to the <NavLink className="link" to="/termsofuser" target="_blank" >Terms of user</NavLink></Checkbox>
                                </FormGroup>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-sm btn-primary" type="submit"><FontAwesomeIcon icon="sign-in-alt" /> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;
