import React from 'react';
import { NavLink } from "react-router-dom";

export default (props) => {
    return (

        <div className="card">
            <img className="card-img-top" src={props.imagePath} alt={props.imageAlt} />
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.smalldescription}</p>
            </div>
            <div className="card-footer align-content-center">
                <NavLink className="btn btn-sm btn-primary" to={props.url} title="More">More</NavLink>
            </div>
        </div>

    );
}

