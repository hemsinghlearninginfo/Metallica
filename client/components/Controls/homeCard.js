import React from 'react';
import { NavLink } from "react-router-dom";

const cardStyle = {
    width: '18rem'
};

export default (props) => {
    return <div className="card" style={cardStyle}>
        <NavLink className="nav-link homeTabText" to="/addEditOrder" title="Add New Stock to post">
            <img className="card-img-top" src={props.imagePath} alt={props.imageAlt} />
            <div className="card-body">
                <p className="card-text">{props.heading}</p>
            </div>
        </NavLink>
    </div>;
}

