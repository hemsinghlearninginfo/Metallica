import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
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
                <div className="pageContent" id="frmForgotPassword">
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
