import React, { Component } from "react";
import AllPages from './route/importAllPages';

class FAQs extends Component {
  render() {
    return (
      <div>
        <AllPages.PageHeader name="FAQs" description="" />
        <div className="container pageContent">
          <div className="col-md-12 col-xl-12 col-sm-12">
              <div className="panel-group" id="help-accordion-1">
                <div className="panel panel-default panel-help">
                  <a href="#opret-produkt" data-toggle="collapse" data-parent="#help-accordion-1">
                    <div className="panel-heading">
                      <h2>How do I edit my profile?</h2>
                    </div>
                  </a>
                  <div id="opret-produkt" className="collapse in">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus nesciunt ut officiis accusantium quisquam minima praesentium, beatae fugit illo nobis fugiat adipisci quia distinctio repellat culpa saepe, optio aperiam est!</p>
                      <p><strong>Example: </strong>Facere, id excepturi iusto aliquid beatae delectus nemo enim, ad saepe nam et.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
