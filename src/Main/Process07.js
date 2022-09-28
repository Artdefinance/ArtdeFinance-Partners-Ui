/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import Dialog from '@material-ui/core/Dialog';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import ButtonGray from '../Components/Button/ButtonGray';
import Icons from '../Components/Icons/Icons';
import ProcessPop from './ProcessPop';
import RadioButton from '../Components/Button/RadioButton';
import SummaryTab from './SummaryTab';

export default class Process07 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    console.log(e.target);
    this.setState({ open: false });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  openDialog() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <>
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
                <div>
                  <div className="main-setting">
                    <p className="main-setting__main-title">
                      Market Place Setting
                    </p>
                    <p className="main-setting__title">
                      The whole journey of choosing the value of the
                      <br />
                      work has come to an end!
                    </p>
                    <p className="main-setting__text">
                      The value of the work was determined by the opinions and
                      votes of each expert.
                      <br />
                      You can now sell your work by registering on the market.
                      The sale can be set to a full price sale or auction type.
                    </p>
                    <div className="main-setting__wrap">
                      <div className="main-setting__box">
                        <p className="main-setting__sub-title">
                          Curation Price
                        </p>
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
                        <p>Curation Price</p>
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
                    <div className="main-regist">
                      <p className="main-regist__title">
                        Marketplace Registration
                      </p>
                      <p className="main-regist__text">
                        Would you like to register on the marketplace to sell
                        your work?
                      </p>
                      <div className="button-position">
                        <RadioButton
                          content="Register on the market Start selling."
                          value="option1"
                          name="option"
                        />
                        <RadioButton
                          content="No, work. I will not sell"
                          value="option2"
                          name="option"
                          pressFucn={() => this.openDialog()}
                        />
                      </div>
                      <p className="main-regist__description">
                        If the work is not registered in the market, it is
                        necessary to prove the value of the work.
                        <br />
                        The curation and DAO voting will need to be done again.
                        <br />
                        And when curation proceeds, the registration fee for the
                        work must be paid again.
                      </p>
                      <div className="main-regist__wrap">
                        <ButtonGray
                          className="button button--gray-line button--mid"
                          content="Cancle"
                        />
                        <button
                          type="button"
                          className="button button--black button--mid"
                          onClick={this.openDialog}
                        >
                          Not listing on the Marketplace
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* process full dialog */}
        <Dialog fullScreen open={Boolean(open)} onClose={this.closeDialog}>
          <div className="dialog_close" onClick={this.closeDialog}>
            <Icons shape="close" width="24px" height="24px" />
            <span className="a11y">close</span>
          </div>
          <ProcessPop />
        </Dialog>
      </>
    );
  }
}
