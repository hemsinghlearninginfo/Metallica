
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">This app is responsible to track tade info.</span>
                    <span className="pull-right text-muted copyright">© 2018, HSP, All rights reserved.</span>
                </div>
            </footer>
        );
    }
}

export default Footer;