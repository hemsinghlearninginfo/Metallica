import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import { NavLink } from "react-router-dom";
import FieldGroup from '../../controls/controls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';


class ForgotPassword extends Component {

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
                            <AllPages.UserScreenHeading name="Forgot password!" />
                            <div className="form-group">
                                <FieldGroup
                                    id="username"
                                    type="email"
                                    required
                                    placeholder="Enter your email Id"
                                    help="type your registered email address"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
