/* eslint-disable react/prop-types */
import React from 'react';
import './Activity.scss';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOnHistory: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
  }

  onClickHandler(props) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  onClickHandler2() {
    this.setState((prevState) => ({
      isToggleOnHistory: !prevState.isToggleOnHistory,
    }));
  }

  render() {
    const { isToggleOn, isToggleOnHistory } = this.state;
    const { activeNFT, activeHistory } = this.props;
    const nftDatas = [
      {
        id: '1',
        address: '0x495f...7b5e',
        tokenID: '2629546618532116...',
        standard: 'ERC-1155',
        blockchain: 'Ethereum',
        metadata: 'Centralized',
      },
    ];

    const history = [
      {
        id: '1',
        activity: 'Sale',
        price: '1,500,000.00 USD',
        date: '13day ago',
      },
      {
        id: '2',
        activity: 'List',
        price: '1,500,000.00 USD',
        date: '13day ago',
      },
      {
        id: '3',
        activity: 'Voting',
        price: '1,500,000.00 USD',
        date: '13day ago',
      },
      {
        id: '4',
        activity: 'Curation',
        price: '1,500,000.00 USD',
        date: '13day ago',
      },
      {
        id: '5',
        activity: 'Minted',
        price: '1,500,000.00 USD',
        date: '13day ago',
      },
    ];

    return (
      <div className="activity-info">
        <div className={isToggleOn ? 'active' : ''}>
          <button
            type="button"
            className="activity-info__header"
            onClick={this.onClickHandler}
          >
            <span>NFT Certification</span>
          </button>
          <div className="activity-info__content">
            {isToggleOn ? (
              <div>
                {nftDatas.map((items) => (
                  <div className="activity-info__list" key={items.id}>
                    <div className="activity-info__item">
                      <p className="activity-info__title">Contract Address</p>
                      <p className="activity-info__text">{items.address}</p>
                    </div>
                    <div className="activity-info__item">
                      <p className="activity-info__title">Token ID</p>
                      <p className="activity-info__text">{items.tokenID}</p>
                    </div>
                    <div className="activity-info__item">
                      <p className="activity-info__title">Token Standard</p>
                      <p className="activity-info__text">{items.standard}</p>
                    </div>
                    <div className="activity-info__item">
                      <p className="activity-info__title">Blockchain</p>
                      <p className="activity-info__text">{items.blockchain}</p>
                    </div>
                    <div className="activity-info__item">
                      <p className="activity-info__title">Metadata</p>
                      <p className="activity-info__text">{items.metadata}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className={isToggleOnHistory ? 'active' : ''}>
          <button
            type="button"
            className="activity-info__header"
            onClick={this.onClickHandler2}
          >
            <span>Artwork Activity History</span>
          </button>
          <div className="activity-info__content">
            {isToggleOnHistory ? (
              <div>
                <ul className="activity-info__titles">
                  <li>Activity</li>
                  <li>Price</li>
                  <li>Date</li>
                </ul>
                {history.map((items) => (
                  <ul className="activity-info__texts" key={items.id}>
                    <li>{items.activity}</li>
                    <li>{items.price}</li>
                    <li className="activity-info__date">
                      <button type="button">
                        {items.date}
                        <span />
                      </button>
                    </li>
                  </ul>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
