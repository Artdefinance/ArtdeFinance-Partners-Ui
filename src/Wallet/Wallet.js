import React from 'react';
import './Wallet.scss';
import { motion } from 'framer-motion';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn1: false,
      isToggleOn2: false,
      isToggleOn3: false,
      isToggleOn4: false,
      isToggleOn5: false,
      categoryActive1: true,
      categoryActive2: false,
      categoryActive3: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  clickClose(e) {
    this.setState(() => ({
      [e.target.value]: false,
    }));
  }

  categoryClick(e) {
    this.setState((prevState) => ({
      categoryActive1: false,
      categoryActive2: false,
      categoryActive3: false,
      [e.target.value]: false,
      [e.target.value]: !prevState[e.target],
    }));
  }

  render() {
    const {
      isToggleOn1,
      isToggleOn2,
      isToggleOn3,
      isToggleOn4,
      isToggleOn5,
      categoryActive1,
      categoryActive2,
      categoryActive3,
    } = this.state;
    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };
    const Content1 = [
      {
        id: '1',
        title: 'Sort by ending soon',
      },
      {
        id: '2',
        title: 'Sort by recently active',
      },
      {
        id: '3',
        title: 'Sort by newest',
      },
      {
        id: '4',
        title: 'Sort by oldest',
      },
    ];

    const exampleData = [
      {
        id: '1',
        event: 'Artwork Minting',
        txid: '9a24688899...099076e723',
        amount: '+234,654,876,345.0000000',
        asset: 'ADF',
        status: 'Failed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '2',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '-234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '3',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Cancled',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '4',
        event: 'Artwork Minting',
        txid: '9a24688899...099076e723',
        amount: '234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '5',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '6',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '-234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '7',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '+234,654,876,345.0000000',
        asset: 'ADF',
        status: 'Failed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '8',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Cancled',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '9',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '10',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '-234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
      {
        id: '11',
        event: 'Curation Reward',
        txid: '9a24688899...099076e723',
        amount: '-234,654,876,345.0000000',
        asset: 'BNB',
        status: 'Succeed',
        date: '22/06/2022 17:33:55',
      },
    ];

    return (
      <div>
        <div className="wallet">
          <div className="wallet__wrap">
            <div className="wallet__box">
              <div className="wallet-profile">
                <div className="wallet-profile__wrap">
                  <img
                    src="/assets/images/page/artist/img_profile_view.png"
                    alt="프로필 이미지"
                    className="wallet-profile__img"
                  />
                  <p className="wallet-profile__title">
                    Art de finance gallery labs
                  </p>
                  <p className="wallet-profile__text">
                    ArtGallery@ArtdeFinance.io
                  </p>
                  <button type="button" className="wallet-profile__button">
                    <Icons shape="setting" />
                  </button>
                </div>
              </div>
              <div className="wallet-account">
                <div className="wallet-account__list">
                  <div className="wallet-account__item">
                    <p className="wallet-account__title">Wallet Address</p>
                    <p className="wallet-account__text">
                      0x5423D6F1099f6616C7412E8c5360958c4B89432d0x5423D6F1099f6616C
                    </p>
                  </div>
                  <div className="wallet-account__item">
                    <p className="wallet-account__title">Wallet Account</p>
                    <p className="wallet-account__account">
                      <Icons shape="adf" />
                      <span className="wallet-account__number">
                        135,567,654,876,098,978.00000000
                      </span>
                      <span className="wallet-account__type">ADF</span>
                    </p>
                  </div>
                  <div className="wallet-account__item">
                    <p className="wallet-account__title" />
                    <p className="wallet-account__account">
                      <Icons shape="bnb" />
                      <span className="wallet-account__number">
                        135,567,654,876,098,978.00000000
                      </span>
                      <span className="wallet-account__type">BNB</span>
                    </p>
                  </div>
                  <div className="wallet-account__item">
                    <p className="wallet-account__title" />
                    <p className="wallet-account__account">
                      <Icons shape="busd20" />
                      <span className="wallet-account__number">
                        135,567,654,876,098,978.00000000
                      </span>
                      <span className="wallet-account__type">BUSD</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wallet__box">
              <div className="wallet-info">
                <div className="wallet-info__list">
                  <div className="wallet-info__item">
                    <div className="wallet-info__header">
                      <p className="wallet-info__header-text">Total Sales</p>
                      <div className="question-bubble">
                        <button
                          type="button"
                          onClick={this.handleClick}
                          className="question-bubble__mark"
                          value="isToggleOn1"
                        />
                        <motion.div
                          animate={
                            isToggleOn1 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '-80px', left: '-115px' }}
                        >
                          Among the registered works,
                          <br />
                          sold in the market. Total quantity.
                          <button
                            type="button"
                            onClick={this.clickClose}
                            className="question-bubble__close"
                            value="isToggleOn1"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="wallet-info__box">
                      <p className="wallet-info__number">1,345,678</p>
                    </div>
                  </div>
                  <div className="wallet-info__item">
                    <div className="wallet-info__header">
                      <p className="wallet-info__header-text">
                        Total Sales Vaule
                      </p>
                      <div className="question-bubble">
                        <button
                          type="button"
                          onClick={this.handleClick}
                          className="question-bubble__mark"
                          value="isToggleOn2"
                        />
                        <motion.div
                          animate={
                            isToggleOn2 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '-100px', left: '-115px' }}
                        >
                          Among the registered works,
                          <br />
                          sold in the market.
                          <br />
                          The full value of the work.
                          <button
                            type="button"
                            onClick={this.clickClose}
                            className="question-bubble__close"
                            value="isToggleOn2"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="wallet-info__box">
                      <p className="wallet-info__count-number">
                        999,999,999.00
                      </p>
                      <p className="wallet-info__count">BUSD</p>
                    </div>
                  </div>
                  <div className="wallet-info__item">
                    <div className="wallet-info__header">
                      <p className="wallet-info__header-text">Sale Revenue</p>
                      <div className="question-bubble">
                        <button
                          type="button"
                          onClick={this.handleClick}
                          className="question-bubble__mark"
                          value="isToggleOn3"
                        />
                        <motion.div
                          animate={
                            isToggleOn3 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '-135px', left: '-115px' }}
                        >
                          After the registered works
                          <br />
                          are sold in the market.
                          <br />
                          Total cumulative revenue
                          <br />
                          excluding fees and curation
                          <br />
                          costs.
                          <button
                            type="button"
                            onClick={this.clickClose}
                            className="question-bubble__close"
                            value="isToggleOn3"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="wallet-info__box">
                      <p className="wallet-info__count-number">
                        999,999,999.00
                      </p>
                      <p className="wallet-info__count">BUSD</p>
                    </div>
                  </div>
                  <div className="wallet-info__item">
                    <div className="wallet-info__header">
                      <p className="wallet-info__header-text">
                        Curation Reward
                      </p>
                      <div className="question-bubble">
                        <button
                          type="button"
                          onClick={this.handleClick}
                          className="question-bubble__mark"
                          value="isToggleOn4"
                        />
                        <motion.div
                          animate={
                            isToggleOn4 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '-115px', left: '-115px' }}
                        >
                          All accumulated rewards
                          <br />
                          received for participating in
                          <br />
                          the curation of works in
                          <br />
                          priority no see.
                          <button
                            type="button"
                            onClick={this.clickClose}
                            className="question-bubble__close"
                            value="isToggleOn4"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="wallet-info__box">
                      <p className="wallet-info__count-number">
                        999,999,999.00
                      </p>
                      <p className="wallet-info__count">BUSD</p>
                    </div>
                  </div>
                  <div className="wallet-info__item">
                    <div className="wallet-info__header">
                      <p className="wallet-info__header-text">
                        Curation Revenue
                      </p>
                      <div className="question-bubble">
                        <button
                          type="button"
                          onClick={this.handleClick}
                          className="question-bubble__mark"
                          value="isToggleOn5"
                        />
                        <motion.div
                          animate={
                            isToggleOn5 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '-135px', left: '-115px' }}
                        >
                          The total accumulation
                          <br />
                          received according to the
                          <br />
                          curator result selected by
                          <br />
                          participating in the curation.
                          <br />
                          It&apos;s a reward.
                          <button
                            type="button"
                            onClick={this.clickClose}
                            className="question-bubble__close"
                            value="isToggleOn5"
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="wallet-info__box">
                      <p className="wallet-info__count-number">
                        999,999,999.00
                      </p>
                      <p className="wallet-info__count">BUSD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wallet__list">
              <div className="wallet-data">
                <div className="wallet-data__filter">
                  <div className="wallet-category">
                    <button type="button" onClick={this.categoryClick} className={categoryActive1 ? 'wallet-category__button wallet-category__button--active' : 'wallet-category__button'} value="categoryActive1">
                      All
                    </button>
                    <button type="button" onClick={this.categoryClick} className={categoryActive2 ? 'wallet-category__button wallet-category__button--active' : 'wallet-category__button'} value="categoryActive2">
                      Deposit
                    </button>
                    <button type="button" onClick={this.categoryClick} className={categoryActive3 ? 'wallet-category__button wallet-category__button--active' : 'wallet-category__button'} value="categoryActive3">
                      Withdraw
                    </button>
                  </div>
                  <Dropdown
                    dropWidth="216px"
                    dropHeight="60px"
                    dropTitle="Artwork Owner"
                    content={Content1}
                    dropFontSize="16px"
                    dropFontColor="#000000"
                  />
                </div>
                <div className="wallet-data__header">
                  <ul>
                    <li>Event</li>
                    <li>TXID</li>
                    <li>Amount</li>
                    <li>Asset</li>
                    <li>Status</li>
                    <li>Date</li>
                  </ul>
                </div>
                <div className="wallet-data__content">
                  <div className="wallet-data__list">
                    <ul className="wallet-data__items">
                      {exampleData.map((items) => (
                        <li key={items.id}>
                          <p>{items.event}</p>
                          <p>{items.txid}</p>
                          <p
                            className={(() => {
                              if (items.amount.includes('+')) return 'wallet-data--plus';
                              if (items.amount.includes('-')) return 'wallet-data--minus';
                              return 'wallet-data--normal';
                            })()}
                          >
                            {items.amount}
                          </p>
                          <p>{items.asset}</p>
                          <p>
                            <span
                              className={`wallet-data__text wallet-data__text--${items.status}`}
                            >
                              {items.status}
                            </span>
                          </p>
                          <p>{items.date}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="wallet-data__pagenation">
                      <Pagenation />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
