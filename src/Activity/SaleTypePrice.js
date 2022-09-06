/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';
import Icons from '../Components/Icons/Icons';
import Button from '../Components/Button/Button';

export default class SaleTypePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contents, isDisabled } = this.props;
    return (
      <div className="activity-sale">
        <div className="activity-sale__header">
          <p>Sale Type</p>
          <p>List Price</p>
        </div>
        <div className="activity-sale__content">
          <p>Sale Price</p>
          <div className="activity-sale__count">
            <div className="activity-sale__wrap">
              <div className="activity-sale__box">
                <Icons shape="data-small" />
                <p>1,500,000.00</p>
                <p>USD</p>
              </div>
              <div className="activity-sale__box">
                <Icons shape="busd" />
                <p>1,500,000.00</p>
                <p>BUSD</p>
              </div>
            </div>
            <Button className="button button--black button--mid" content={ contents } disabled={ isDisabled } />
          </div>
        </div>
      </div>
    );
  }
}
