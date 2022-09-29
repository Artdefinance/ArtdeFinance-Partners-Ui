/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Icons from '../Components/Icons/Icons';
import ButtonGray from '../Components/Button/ButtonGray';
import SummaryTab from './SummaryTab';

export default class ProcessPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn1: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  render() {
    const artDatas = [
      {
        id: '1',
        artist: 'Vincent van Gogh Tauba Auerbach Ryan Trecartin',
        title: 'Two Paintings (from the Paintings series) Spring Flowers',
        year: '2001',
        edition: '#3547A',
        medium: 'Screenprint in colors on Saunders Waterford 425gsm pape',
        sign: 'Include Signed',
        dimensions: 'W 203.2 × D 203.2 cm x H 203.2 cm \n(80 × 80 × 80 in.)',
        condition: 'Excellent',
      },
    ];
    const backgroundStyle = [
      '/assets/images/page/activity/img_square_dummy.png',
    ];
    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };
    const { isToggleOn1 } = this.state;
    const { type, regist, delivery } = this.props;
    return (
      <div className="dialog_wrap process-dialog">
        <div className="process-dialog__wrap">
          <div className="process-dialog--left">
            <div className="activity-side">
              <span
                style={{ backgroundImage: `url(${backgroundStyle})` }}
                className="activity-side__img"
              />
              <button type="button" className="activity-side__more">
                <Icons shape="expand" />
                <p>View Image</p>
              </button>
              <div>
                {artDatas.map((items) => (
                  <div className="activity-side__list" key={items.id}>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Artist</p>
                      <p className="activity-side__text">{items.artist}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Title</p>
                      <p className="activity-side__text">{items.title}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Creation Year</p>
                      <p className="activity-side__text">{items.year}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Edition</p>
                      <p className="activity-side__text">{items.edition}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Medium</p>
                      <p className="activity-side__text">{items.medium}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Artist Sign</p>
                      <p className="activity-side__text">{items.sign}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Artist Sign</p>
                      <p className="activity-side__text">{items.sign}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Dimensions</p>
                      <p className="activity-side__text">{items.dimensions}</p>
                    </div>
                    <div className="activity-side__item">
                      <p className="activity-side__title">Condition</p>
                      <p className="activity-side__text">{items.condition}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="main-tab">
              <SummaryTab />
            </div>
          </div>
          <div className="process-dialog--right">
            <div className="main-setting">
              <div className="main-setting__wrap">
                <div className="main-setting__box">
                  <p className="main-setting__sub-title">Curation Price</p>
                  <div className="main-setting__count">
                    <div className="main-setting__numbering">
                      <p className="main-setting__number">1,500,000.00</p>
                      <p className="main-setting__unity">USD</p>
                    </div>
                    <div className="main-setting__numbering">
                      <p className="main-setting__number">1,500,000.00</p>
                      <p className="main-setting__unity">BUSD</p>
                    </div>
                  </div>
                </div>
                <div className="main-setting__box">
                  <p className="main-setting__sub-title">Curation Price</p>
                  <div className="main-setting__count">
                    <div className="main-setting__numbering">
                      <p className="main-setting__number">1,500,000.00</p>
                      <p className="main-setting__unity">USD</p>
                    </div>
                    <div className="main-setting__numbering">
                      <p className="main-setting__number">1,500,000.00</p>
                      <p className="main-setting__unity">BUSD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-setting__bottom">
                <p className="main-setting__sub-title">
                  Expected value of this work after
                </p>
                <p className="main-setting__year">3</p>
                <p className="main-setting__sub-title">years</p>
              </div>
              {type === 'true' && (
                <div className="main-market main-market--price">
                  <p className="main-market__title">Marketplace Registration</p>
                  <p className="main-market__text">
                    Register on the market Start selling.
                  </p>
                  <div className="main-market__box">
                    <p className="main-market__title">Sale Type</p>
                    <div className="main-setting__numbering">
                      <p>List Price</p>
                      <div>
                        <p className="main-setting__number">1,500,000.00</p>
                        <p className="main-setting__unity">USD</p>
                      </div>
                    </div>
                  </div>
                  <p className="main-market__title">
                    Artwork storage &amp; Delivery
                  </p>
                  <p className="main-market__text">
                    Separate storage is not possible. Delivery only.
                  </p>
                  <p className="main-market__description">
                    ADF Labs Co., Ltd. is a platform provider
                    <br />
                    The gallery is responsible for the storage and delivery of
                    the artwork.
                    <br />
                    Compensation and liability for damage when storing,
                    transporting, or installing works in the gallery
                    <br />
                    When shipping works, transportation and installation are
                    carried out after discussing the delivery
                    <br />
                    address and schedule with the buyer. You must ship directly
                    from the gallery.
                  </p>
                  <div className="main-market__wrap">
                    <ButtonGray
                      className="button button--gray-line button--mid"
                      content="Back"
                    />
                    <button
                      type="button"
                      className="button button--black button--mid"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}

              {type === 'false' && (
                <div className="main-market">
                  <p className="main-market__title">Marketplace Registration</p>
                  <p className="main-market__text">No, Work I will not sell.</p>
                  <p className="main-market__description">
                    If the work is not registered in the market, it is necessary
                    to prove the value of the work.
                    <br />
                    The curation and DAO voting will need to be done again.
                    <br />
                    And when curation proceeds, the registration fee for the
                    work must be paid again.
                  </p>
                  <div className="main-market__wrap">
                    <ButtonGray
                      className="button button--gray-line button--mid"
                      content="Back"
                    />
                    <button
                      type="button"
                      className="button button--black button--mid"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}

              {regist === 'true' ? (
                <>
                  <div className="main-market">
                    <p className="main-market__title">Market</p>
                    <p className="main-market__text">
                      Register on the market Start selling.
                    </p>
                  </div>
                  <div className="main-type">
                    <p className="main-type__main-title">Sale Type</p>
                    <div className="main-type__box">
                      <p className="main-type__title">Auction</p>
                      <p className="main-type__text">$ 1,500,000.00</p>
                    </div>
                    <div className="main-type__box">
                      <p className="main-type__title">Bid Period</p>
                      <p className="main-type__text">7 days</p>
                    </div>
                    <div className="main-type__box">
                      <p className="main-type__title">
                        Bid Period
                        <button
                          type="button"
                          className="question-bubble__mark"
                          onClick={this.handleClick}
                          value="isToggleOn1"
                        />
                        <motion.div
                          animate={
                            isToggleOn1 === true ? style.open : style.closed
                          }
                          className="question-bubble__wrap"
                          style={{ top: '40px', left: '-10px' }}
                        >
                          This is tooltip content.
                          <br />
                          Seamlessly formulate magnetic methodologies with go
                          forward deliverables.
                        </motion.div>
                      </p>
                      <p className="main-type__text">2</p>
                    </div>
                  </div>
                </>
              ) : null}

              {delivery === 'true' ? (
                <div className="main-market">
                  <p className="main-market__title">
                    Artwork storage &amp; Delivery
                  </p>
                  <p className="main-market__text">
                    Separate storage is not possible. Delivery only.
                  </p>
                  <p
                    className="main-market__description"
                    style={{ color: '#888888' }}
                  >
                    ADF Labs Co., Ltd. is a platform provider
                    <br />
                    The gallery is responsible for the storage and delivery of
                    the artwork.
                    <br />
                    Compensation and liability for damage when storing,
                    transporting, or installing works in the gallery
                    <br />
                    When shipping works, transportation and installation are
                    carried out after discussing the delivery address
                    <br />
                    and schedule with the buyer. You must ship directly from
                    the gallery.
                  </p>
                  <div className="main-market__wrap">
                    <ButtonGray
                      className="button button--gray-line button--mid"
                      content="Back"
                    />
                    <button
                      type="button"
                      className="button button--black button--mid"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
