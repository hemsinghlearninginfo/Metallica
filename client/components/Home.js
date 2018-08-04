import React, { Component } from "react";
import AllPages from './route/importAllPages';
 
class Home extends Component {
  render() {
    return (
      <div>
        <AllPages.PageHeader name="Home" />
      </div>
    );
  }
}
 
export default Home;