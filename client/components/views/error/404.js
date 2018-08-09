
import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '../../controls/icon';

export default (props) => {
    return <div>
        <h1>No match for <code>{props.location.pathname}</code></h1>
        <section className="error-container">
            <span className="four"><span className="screen-reader-text">4</span></span>
            <span className="zero"><span className="screen-reader-text">0</span></span>
            <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
            <NavLink className="btn btn-sm btn-danger" to="/">
                <FontAwesomeIcon icon="exclamation-triangle" /> Home
            </NavLink>
        </div>
    </div>;
}
