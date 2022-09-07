/* eslint-disable react/prop-types */
import React from 'react';
import './Main.scss';
import Button from '../Components/Button/Button';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <div className="dashboard_top">
          <div className="personal_area dash_item">
            <div className="item_inner">
            personal_area
            </div>
          </div>
          <div className="personal_status">
            <div className="status_count dash_item">
              <div className="item_inner">
              personal_status
              </div>
            </div>
            <div className="current_bid dash_item">
              <div className="item_inner">
                <div className="item_head">
                  <h2>Current Bid</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="dashboad_wide dash_item">
          <div className="item_inner">
            <div className="item_head">
              <h2>Now Curating</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="dashboad_half">
          <div className="dash_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Curated Results</h2>
              </div>
            </div>
          </div>
          <div className="dash_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Waiting for Sale</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
