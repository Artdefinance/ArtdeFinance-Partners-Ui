/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    const { noData } = this.props;
    const data = [
      {
        id: '1',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
      {
        id: '2',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
      {
        id: '3',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
      {
        id: '4',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
      {
        id: '5',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
      {
        id: '6',
        address: '0x495f7b5e',
        price: '1,500,000.00',
        time: '22/06/2022 17:33:55',
      },
    ];
    return (
      <div className="activity-history">
        <div className={isToggleOn ? 'active' : ''}>
          <button
            type="button"
            className="activity-history__header"
            onClick={this.onClickHandler}
          >
            <span>Bid History</span>
          </button>
          <div className="activity-history__content">
            <div>
              {noData !== 'true' ? (
                <div>
                  {isToggleOn ? (
                    <div className="activity-history__wrap">
                      <ul className="activity-history__titles">
                        <li>Contract Address</li>
                        <li>Offer Price</li>
                        <li>Time</li>
                      </ul>
                      {data.map((items) => (
                        <ul className="activity-history__texts" key={items.id}>
                          <li>{items.address}</li>
                          <li>
                            {items.price}
                            <span>USD</span>
                          </li>
                          <li>{items.time}</li>
                        </ul>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div>
                  {isToggleOn ? (
                    <div className="activity-history__content">
                      <div className="activity-history__wrap">
                        <div>
                          <ul className="activity-history__titles">
                            <li>Contract Address</li>
                            <li>Offer Price</li>
                            <li>Time</li>
                          </ul>
                        </div>
                        <p className="activity-history__nodata">
                          There is no exhibition history of registered works.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
