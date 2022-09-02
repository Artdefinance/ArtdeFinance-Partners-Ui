/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Info from './Info';
import Side from './Side';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="activity-list">
        <div className="activity-list--left">
          <BreadCrumbs content1="Works Activity" content2="Works Activity list" />
          <Side />
          <Info />
        </div>
        <div className="activity-list--right">
          <Info />
        </div>
      </div>
    );
  }
}
