/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import Dialog from '@material-ui/core/Dialog';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import ButtonGray from '../Components/Button/ButtonGray';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import ProcessPop from './ProcessPop';
import RadioButton from '../Components/Button/RadioButton';
import SummaryTab from './SummaryTab';

export default class Process07 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      toggleButton: false,
      auctionButton: false,
      deliveryButton: false,
    };
    this.checkAuctionFalse = this.checkAuctionFalse.bind(this);
    this.checkAuction = this.checkAuction.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.checkDelivery = this.checkDelivery.bind(this);
    this.checkDeliveryFalse = this.checkDeliveryFalse.bind(this);
  }

  onClickHandler() {
    this.setState({ toggleButton: true });
  }

  onClickHandler2() {
    this.setState({ toggleButton: false });
  }

  checkDeliveryFalse() {
    this.setState({ deliveryButton: false });
  }

  checkDelivery() {
    this.setState({ deliveryButton: true });
  }

  checkAuction() {
    this.setState({ auctionButton: true });
  }

  checkAuctionFalse() {
    this.setState({ auctionButton: false });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  openDialog() {
    this.setState({ open: true });
  }

  render() {
    const { open, toggleButton, auctionButton, deliveryButton } = this.state;
    const ExampleContent1 = [
      {
        id: '1',
        title: '1day',
      },
      {
        id: '2',
        title: '3day',
      },
      {
        id: '3',
        title: '7day',
      },
    ];
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
                          pressFucn={() => this.onClickHandler()}
                        />
                        <RadioButton
                          content="No, work. I will not sell"
                          value="option2"
                          name="option"
                          pressFucn={() => this.onClickHandler2()}
                        />
                      </div>
                      {toggleButton ? (
                        <>
                          <p className="main-regist__title">
                            Marketplace Registration
                          </p>
                          <p className="main-regist__text">
                            Please select a sales type.
                          </p>
                          <div className="button-position">
                            <RadioButton
                              content="List Price"
                              value="optionPrice"
                              name="sale"
                              pressFucn={() => this.checkAuctionFalse()}
                            />
                            <RadioButton
                              content="Auction"
                              value="optionAuction"
                              name="sale"
                              pressFucn={() => this.checkAuction()}
                            />
                          </div>
                          {auctionButton ? (
                            <div className="main-market">
                              <p className="main-market__title">
                                Marketplace Registration
                              </p>
                              <p className="main-regist__text">
                                Auction starting price starts at 80% of the
                                curated evaluation price.
                              </p>
                              <div className="main-market__box">
                                <div className="main-setting__numbering">
                                  <p>List Price</p>
                                  <div>
                                    <p className="main-setting__number">
                                      1,500,000.00
                                    </p>
                                    <p className="main-setting__unity">USD</p>
                                  </div>
                                </div>
                              </div>
                              <p className="main-market__title">Bid Period</p>
                              <p className="main-regist__text">
                                Please set the auction participation period.
                              </p>
                              <Dropdown
                                dropWidth="100%"
                                dropHeight="80px"
                                dropTitle="Select a bid Period"
                                content={ExampleContent1}
                                dropFontSize="24px"
                                dropFontColor="#BBBBBB"
                              />
                              <p className="main-regist__description">
                                AWhen bidding within the auction period, the
                                auction can be sold up to 3 times.
                                <br />
                                Auction sales are limited after the 3rd time.
                              </p>
                            </div>
                          ) : null}
                          <p className="main-regist__title">
                            Marketplace Registration
                          </p>
                          <p className="main-regist__text">
                            Buyers may request that the artwork be shipped or
                            stored in the gallery.
                            <br />
                            Please select a storage or delivery method for this
                            artwork.
                          </p>
                          <div className="button-position">
                            <RadioButton
                              content="Separate storage is not possible. Delivery only"
                              value="optionDelivery"
                              name="how"
                              pressFucn={() => this.checkDelivery()}
                            />
                            <RadioButton
                              content="Shipping or storage in gallery All are possible"
                              value="optionShipping"
                              name="how"
                              pressFucn={() => this.checkDeliveryFalse()}
                            />
                          </div>
                          <p className="main-regist__description">
                            ADF Labs Co., Ltd. is a platform provider
                            <br />
                            The gallery is responsible for the storage and
                            delivery of the artwork.
                            <br />
                            Compensation and liability for damage when storing,
                            transporting, or installing works in the gallery
                            <br />
                            When shipping works, transportation and installation
                            are carried out after discussing the delivery
                            address
                            <br />
                            and schedule with the buyer. You must ship directly
                            from the gallery.
                          </p>
                        </>
                      ) : (
                        <p className="main-regist__description">
                          If the work is not registered in the market, it is
                          necessary to prove the value of the work.
                          <br />
                          The curation and DAO voting will need to be done
                          again.
                          <br />
                          And when curation proceeds, the registration fee for
                          the work must be paid again.
                        </p>
                      )}
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
          { toggleButton === false && <ProcessPop type="false" /> }
          { toggleButton === true && auctionButton === false && deliveryButton === true && <ProcessPop type="true" />}
          { toggleButton === true && auctionButton === true && deliveryButton === true && <ProcessPop type="undefined" regist="true" delivery="true" />}
        </Dialog>
      </>
    );
  }
}
