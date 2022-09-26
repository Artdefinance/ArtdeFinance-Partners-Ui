/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import { motion } from 'framer-motion';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import ProcessStatus from './ProcessStatus';
import SummaryTab from './SummaryTab';
import CheckButton from '../Components/Button/CheckButton';

export default class Process02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOn1: false,
      isToggleOn2: false,
    };
    this.bubbleOpen = this.bubbleOpen.bind(this);
    this.bubbleClose = this.bubbleClose.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  onClickHandler2() {
    this.setState((prevState) => ({
      isToggleOn2: !prevState.isToggleOn2,
    }));
  }

  bubbleOpen(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  bubbleClose(e) {
    this.setState(() => ({
      [e.target.value]: false,
    }));
  }

  render() {
    const backgroundStyle = ['/assets/images/page/main/img_piece.png'];
    const { isToggleOn, isToggleOn1, isToggleOn2 } = this.state;
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

    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };

    return (
      <div className="main-process">
        <div className="main-process__wrap">
          <BreadCrumbs
            content1="Artworks"
            content2="NFT Minted"
            content3="Congregation Leaving the Reformed Church in Nuenen"
          />
          <div className="main-process__box">
            <div className="main-process--first">
              <div className="main-about">
                <div className="main-about__header">
                  <div className="main-about__img">
                    <img
                      src="/assets/images/page/artist/img_profile_view.png"
                      alt="프로필 이미지"
                    />
                  </div>
                  <div className="main-about__text">
                    <p>
                      Vincent van GoghVincent van GoghVincent van GoghVincent
                      van
                    </p>
                    <p>1999 - 2012</p>
                  </div>
                </div>
                <div className="main-about__content">
                  <div
                    className="main-about__piece"
                    style={{ backgroundImage: `url(${backgroundStyle})` }}
                  />
                  <div className="main-about__description">
                    <p className="main-about__date">2011</p>
                    <p className="main-about__title">
                      Congregation Leaving the Reformed Church in Nuenen
                    </p>
                    <p className="main-about__numbering">Edition #2345</p>
                    <p className="main-about__thing">
                      Oil on linen Oil on linenOil on...
                    </p>
                    <p className="main-about__size">
                      W 203.2 × D 203.2 cm x H 203.2 cm (80 × 80 × 80 in.)
                    </p>
                  </div>
                </div>
                <div className="activity-info">
                  <div className={isToggleOn ? 'active' : ''}>
                    <button
                      type="button"
                      className="activity-info__header"
                      onClick={this.onClickHandler}
                    >
                      <span>About Artworks</span>
                    </button>
                    <div className="activity-info__content">
                      {isToggleOn ? (
                        <div>
                          <p>
                            Born in 1979, Jisan Ahn studied plastic art at Korea
                            National University of Arts and has a degree with
                            paintings at Frank Mohr International in the
                            Netherlands. . He debuted in the Netherlands first
                            while he was staying in Rijks akademie residency for
                            2 years from 2013. European Art Scene started paying
                            attention to him after his solo exhibition at
                            Galerie Bart/
                          </p>
                          <button type="button">See more</button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className={isToggleOn2 ? 'active' : ''}>
                    <button
                      type="button"
                      className="activity-info__header"
                      onClick={this.onClickHandler2}
                    >
                      <span>NFT Certification</span>
                    </button>
                    <div className="activity-info__content">
                      {isToggleOn2 ? (
                        <div>
                          {nftDatas.map((items) => (
                            <div className="activity-info__list" key={items.id}>
                              <div className="activity-info__item">
                                <p className="activity-info__title">
                                  Contract Address
                                </p>
                                <p className="activity-info__text">
                                  {items.address}
                                </p>
                              </div>
                              <div className="activity-info__item">
                                <p className="activity-info__title">Token ID</p>
                                <p className="activity-info__text">
                                  {items.tokenID}
                                </p>
                              </div>
                              <div className="activity-info__item">
                                <p className="activity-info__title">
                                  Token Standard
                                </p>
                                <p className="activity-info__text">
                                  {items.standard}
                                </p>
                              </div>
                              <div className="activity-info__item">
                                <p className="activity-info__title">
                                  Blockchain
                                </p>
                                <p className="activity-info__text">
                                  {items.blockchain}
                                </p>
                              </div>
                              <div className="activity-info__item">
                                <p className="activity-info__title">Metadata</p>
                                <p className="activity-info__text">
                                  {items.metadata}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-side">
                <div className="main-side__result">
                  <p className="main-side__result-title">Suggested Price</p>
                  <div className="main-side__box">
                    <p>1,500,000.00</p>
                    <span>USD</span>
                  </div>
                  <div className="main-side__box">
                    <p>1,500,000.00</p>
                    <span>BUSD</span>
                  </div>
                </div>
              </div>
              <SummaryTab />
            </div>
            <div className="main-process--second">
              <div className="main-step">
                <p className="main-step__main-title">Curation Process</p>
                <ProcessStatus step="2" />
                <ul>
                  <li>
                    NFT Minted
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>Curating</li>
                  <li>Curated</li>
                  <li>Dao Voting</li>
                  <li>Dao Voted</li>
                </ul>
              </div>
              <div className="main-description curating_setting">
                <div className="setting_head">Curating Setting</div>
                <div className="setting_summary">
                  <p className="title">We start curating the registered works.</p>
                  <p className="desc">
                    After selecting the value for the work, the final sale is up to you.
                    <br />
                    <br />
                    From curation to DAO voting process Artwork registration fee must be paid.
                    The registration fee is for work curation and value selection.
                    Used to provide services.
                    <br />
                    <br />
                    The curation requires at least 3 people to participate,
                    but DAO voting will proceed. If the number of participants
                    in the curation is less than 3, the registration fee paid
                    Refunds will be processed immediately
                  </p>
                </div>
                <div className="setting_inner">
                  <div className="fee_area">
                    <div className="ti question-bubble">
                      <button
                        type="button"
                        onClick={this.bubbleOpen}
                        value="isToggleOn1"
                        className="fee_info"
                      >
                      Registration Fee
                      </button>
                      <motion.div
                        animate={
                          isToggleOn1 === true ? style.open : style.closed
                        }
                        className="question-bubble__wrap"
                        style={{ top: '-75px', left: '-40px' }}
                      >
                        <p>Registration is free during the promotion period.</p>
                      </motion.div>
                    </div>
                    <div className="price">
                      <span className="unit">ADF</span>
                      <p className="fee">0,000</p>
                      <p className="disc">300.00</p>
                    </div>
                  </div>
                  <div className="promo_period">
                    <span>Remaining Promotion Period</span>
                    <p>06/02/2022 14:32</p>
                  </div>

                  <CheckButton content="Approve" widthStyle="847px" heightStyle="80px" />

                  <div className="period_set">
                    <div className="period_head">
                      <p>Please set the period for the curation of the work.</p>
                      <span>
                        The curation runs for 7 days.
                        <br />
                        From the setting date when curation starts
                        The end date is automatically set to 7 days.
                      </span>
                    </div>
                  </div>

                  <div className="btn_wrap">
                    <Button className="button button--black button--mid" content="Curating Start" disabled="true" />
                    <Button className="button button--black button--mid" content="Curating Start" />
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
