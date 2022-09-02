/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';
import Icons from '../Components/Icons/Icons';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="activity-info">
        <div className="activity-info__header">
          <p>NFT Certification</p>
          <span className="activity-info__arrow" />
        </div>

      </div>
    );
  }
}
