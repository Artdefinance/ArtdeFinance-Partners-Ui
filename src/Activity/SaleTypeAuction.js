/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';
import Icons from '../Components/Icons/Icons';
import Timer from '../Components/Timer/Timer';
import Button from '../Components/Button/Button';

export default class SaleTypeAuction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hammerPrice, content, disabled } = this.props;
    return (
      <div>
        {hammerPrice ? (
          <div className="activity-sale activity-sale--inTimer activity-sale--hammer">
            <div className="activity-sale__header">
              <div>
                <p>Sale Type</p>
                <p>Auction</p>
              </div>
              <div className="activity-sale__timer">
                <p>Auction end in</p>
                <Timer expiryTimestamp="10" />
              </div>
            </div>
            <div className="activity-sale__content">
              <p>Bidding Start Price</p>
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
                <div className="activity-sale__price">
                  <p>Estimated Price</p>
                  <div>
                    <p>1,500,000.00 - 9,999,999.00</p>
                    <p className="activity-sale__currency">USD</p>
                  </div>
                </div>
                <div className="activity-sale__others">
                  <p>Hammer Price</p>
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
                  <Button className="button button--black button--mid" content={content} disabled={disabled} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="activity-sale activity-sale--inTimer">
            <div className="activity-sale__header">
              <div>
                <p>Sale Type</p>
                <p>Auction</p>
              </div>
              <div className="activity-sale__timer">
                <p>Auction end in</p>
                <Timer />
              </div>
            </div>
            <div className="activity-sale__content">
              <p>Bidding Start Price</p>
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
              </div>
              <div className="activity-sale__price">
                <p>Estimated Price</p>
                <div>
                  <p>1,500,000.00 - 9,999,999.00</p>
                  <p className="activity-sale__currency">USD</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
