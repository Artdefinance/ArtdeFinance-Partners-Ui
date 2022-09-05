/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Info from './Info';
import Sale from './Sale';
import Side from './Side';
import Buyer from './Buyer';

function Auction() {
  return (
    <div className="activity">
      <div className="activity__wrap activity__wrap--long">
        <div className="activity-list">
          <div className="activity-item--left">
            <BreadCrumbs content1="Works Activity" content2="Works Activity list" />
            <Side />
            <Info />
          </div>
          <div className="activity-item--right">
            <Sale />
            <Buyer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auction;
