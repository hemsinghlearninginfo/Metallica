import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import AllPages from '../route/importAllPages';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                    <Tab label="Tab1" className="homeTab">
                        <AllPages.HomeCard imagePath="../../clientResources/images/candleBasic.png" imageAtl="Candle" heading="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </Tab>
                    <Tab label="Tab2">Tab 2 content</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Home;