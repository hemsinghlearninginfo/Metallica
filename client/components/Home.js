import React, { Component } from "react";
import AllPages from './Route/ImportAllPages';
 
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