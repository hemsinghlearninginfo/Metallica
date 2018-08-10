import React from 'react';

export default (props) => {
    return <div className="pageHeading">
        <span className="mainHeading">{props.name}</span><span className="mainHeadingDescription pull-right">{props.description}</span>
    </div>;
}
