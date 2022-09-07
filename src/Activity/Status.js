/* eslint-disable react/prop-types */
import React from 'react';
import './Status.scss';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { step } = this.props;
    return (
      <div className="status">
        <ol
          className={
            (step === '1' ? 'step1' : null) || (step === '2' ? 'step2' : null) || (step === '3' ? 'step3' : null) || (step === '4' ? 'step4' : null)
          }
        >
          <li>
            <p>Curating</p>
          </li>
          <li>
            <p>DAO Voted</p>
          </li>
          <li>
            <p>Market Sale</p>
          </li>
          <li>
            <p>Sold Out</p>
          </li>
        </ol>
      </div>
    );
  }
}
