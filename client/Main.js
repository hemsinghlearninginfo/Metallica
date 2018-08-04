import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import CustomRouting from './components/route/index';
import AllPages from './components/route/importAllPages';

class Main extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>

            <AllPages.Header />
            <div className="content mainContainer">
              {/* <ul className="header">
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul> */}
              <CustomRouting />
            </div>
            <AllPages.Footer />
          </div>

        </HashRouter>
      </div>
    );
  }
}

export default Main;