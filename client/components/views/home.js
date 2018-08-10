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
                <div className="card-deck">
                    <AllPages.HomeCard
                        imagePath="../../resources/images/MarubozuCandlestick-354x396.png"
                        imageAtl="Candle"
                        url="/strategydetail/Marubozu"
                        heading="Marubozu"
                        smalldescription="This candle is full of one dire"
                    />
                    <AllPages.HomeCard
                        imagePath="../../clientResources/images/candleBasic.png"
                        imageAtl="Candle"
                        url="/strategydetail"
                        heading="Hammer"
                    />
                    <AllPages.HomeCard
                        imagePath="../../clientResources/images/candleBasic.png"
                        imageAtl="Candle"
                        url="/strategydetail"
                        heading="Body with wick"
                    />
                    <AllPages.HomeCard
                        imagePath="../../clientResources/images/candleBasic.png"
                        imageAtl="Candle"
                        url="/strategydetail"
                        heading="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />
                </div>

            </div>
        )
    }
}

export default Home;

// <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
//                     <Tab label="Tab1" className="homeTab">

//                     </Tab>
//                     <Tab label="Tab2">Tab 2 content</Tab>
//                 </Tabs>