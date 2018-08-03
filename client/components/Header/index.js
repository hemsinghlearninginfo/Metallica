import React, { Component } from 'react';
import NavigationBar from './navigationBar';

export default class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <header>
                <NavigationBar />
            </header>
        );
    }
}