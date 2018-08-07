import React, { Component } from "react";
import AllPages from '../../route/importAllPages';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icons from '../../controls/icon';

class PostOrders extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <AllPages.PageHeader name="Post My Orders" description="You can post your orders on Zerodha or Upstox terminal." />
        <div className=" pageContent">
          <div className="table-responsive">
            <table id="postOrder" className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th className="icon">
                    <NavLink className="nav-link" to="/addEditOrder" title="Add New Stock to post">
                      <FontAwesomeIcon icon="plus-square" />
                    </NavLink>
                  </th>
                  <th>Push</th>
                  <th>Chart</th>
                  <th>Company</th>
                  <th>Action</th>
                  <th>Method</th>
                  <th>#Size</th>
                  <th>Entry</th>
                  <th>SL</th>
                  <th>Risk Pt.</th>
                  <th>Risk</th>
                  <th>Exit</th>
                  <th>Exit Pt.</th>
                  <th>P&amp;L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="icon"><a href="" title="Edit this stock"><FontAwesomeIcon icon="edit" /></a> <a href="" title="Delete this stock"><FontAwesomeIcon icon="trash-alt" /></a></td>
                  <td className="icon"><a href="" title="Post my order to Zerodha"><img src="../resources/images/kite-logo.svg" className="externalWebsiteActionIcon" /></a>
                    <a href="" title="Post my order to Upstox"><img src="../resources/images/upstox.png" className="externalWebsiteActionIcon" /></a></td>
                  <td className="icon">
                    <a href="" title="Go to Zerodha Chart"><img src="../resources/images/kite-logo.svg" className="externalWebsiteActionIcon" /></a>
                    <a href="" title="Go to Investing Chart"><img src="../resources/images/investing.png" className="externalWebsiteActionIcon" /></a>
                  </td>
                  <td>Canara Bank
                    <div className="cashStockName">Canbnk</div>
                    {/* <div className="futureStockName">Canbnk</div> */}
                  </td>
                  <td>Long</td>
                  <td>Cash</td>
                  <td className="numberRight">21.00</td>
                  <td className="addINRsymbol">276.50</td>
                  <td className="addINRsymbol">281.30</td>
                  <td className="numberRight">4.80</td>
                  <td></td>
                  <td className="addINRsymbol">100.80</td>
                  <td className="numberRight"></td>
                  <td className="addINRsymbol"></td>
                </tr>

              </tbody>
            </table>
            <button className="btn btn-primary btn-sm">Post All order to Upstox</button> <button className="btn btn-danger btn-sm">Post All order to Zerodha</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostOrders;
