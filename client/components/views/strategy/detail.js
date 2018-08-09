import React, { Component } from 'react'
import AllPages from '../../Route/importAllPages';


class StrategyDescription extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AllPages.PageHeader
                    name="Details"
                />
            </div>
        )
    }
}

export default StrategyDescription;