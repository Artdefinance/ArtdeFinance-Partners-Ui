/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import { motion } from 'framer-motion';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import ProcessStatus from './ProcessStatus';
import SummaryTab from './SummaryTab';
import CheckButton from '../Components/Button/CheckButton';

export default class Process02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn1: false,
    };
    this.bubbleOpen = this.bubbleOpen.bind(this);
    this.bubbleClose = this.bubbleClose.bind(this);
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
    const { isToggleOn1 } = this.state;
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
              <About />
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
