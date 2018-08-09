import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            key: 1
        };
        //console.log(this.state.key);
    }

    handleSelect(key) {
        //console.log(`selected ${key}`);
        this.setState({ key });
    }

    render() {
        return (
            <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
                animation={false}
            >
                <Tab eventKey={1} title="Tab 1" >
                    Tab 1 content
              </Tab>
                <Tab eventKey={2} title="Tab 2">
                    Tab 2 content
              </Tab>
            </Tabs>
        );
    }
}

export default Home;