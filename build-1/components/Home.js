import React, { Component } from "react";
import AllPages from './route/importAllPages';
 
class Home extends Component {
  render() {
    return (
      <div>
        <AllPages.PageHeader name="Home" description="test desc" />
      </div>
    );
  }
}
 
export default Home;