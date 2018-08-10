import React, { Component } from 'react'
import Strategy from './pages';
import AllPages from '../../route/importAllPages';

const pageContent = {
    padding: '10px'
}

class StrategyDescription extends Component {

    constructor(props) {
        super(props);
    }

    renderSwitch(param) {
        param = param.toUpperCase();
        switch (param) {
            case 'MARUBOZU':
                return <Strategy.Marubozu />;
            default:
                return 'foo';
        }
    }

    render() {
        return (
            <div>
                <AllPages.PageHeader
                    name={this.props.match.params.strategy}
                    description="This information is refer from www.tradingsetupsreview.com"
                />
                <div style={pageContent}>
                    {this.renderSwitch(this.props.match.params.strategy)}
                </div>
            </div>
        )
    }
}

export default StrategyDescription;