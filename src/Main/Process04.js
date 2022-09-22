/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import { motion } from 'framer-motion';
import Dialog from '@material-ui/core/Dialog';
import { ToastContainer, toast } from 'react-toastify';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Input from '../Components/Inputs/Input';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Icons from '../Components/Icons/Icons';
import Button from '../Components/Button/Button';

export default class Process04 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOn2: false,
      open: false,
      dummyImg: 'https://www.worldhistory.org/img/r/p/500x600/15460.png',
      tabvalue: 0,
      subtabvalue: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.handleSubtabChange = this.handleSubtabChange.bind(this);
  }

  handleTabChange = (e, tabvalue) => {
    console.log(tabvalue);
    this.setState({ tabvalue });
  };

  handleSubtabChange(e) {
    e.preventDefault();
    const subtabvalue = e.target.getAttribute('data');
    console.log(subtabvalue);
    this.setState({ subtabvalue });
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

  openDialog(e) {
    this.setState({ open: true });
  }

  render() {
    const backgroundStyle = ['/assets/images/page/main/img_piece.png'];
    const { isToggleOn, isToggleOn2 } = this.state;
    const { open, dummyImg, tabvalue, subtabvalue } = this.state;
    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };
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
    return (
      <div className="main-process">
        <div className="main-process__wrap">
          <BreadCrumbs
            content1="Artworks"
            content2="NFT Minted"
            content3="Congregation Leaving the Reformed Church in Nuenen"
          />
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
                    Vincent van GoghVincent van GoghVincent van GoghVincent van
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
                          Netherlands. . He debuted in the Netherlands first while
                          he was staying in Rijks akademie residency for 2 years
                          from 2013. European Art Scene started paying attention
                          to him after his solo exhibition at Galerie Bart/
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
                              <p className="activity-info__title">Blockchain</p>
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
          </div>

          <Button pressFucn={this.openDialog} value="open" className="button button--black button--mid" content="Comfirm" type="type1" />

          {/* full dialog */}
          <Dialog
            fullScreen
            open={Boolean(open)}
            onClose={this.handleClose}
          >
            <div className="dialog_close" onClick={this.handleClose}>
              <Icons shape="close" width="24px" height="24px" />
              <span className="a11y">close</span>
            </div>
            <div className="dialog_wrap artworkprocess04_dialog">
              <Tabs value={tabvalue} onChange={this.handleTabChange}>
                <Tab label="Exhibition History" />
                <Tab label="Curation Result" />
                <Tab label="DAO Voting Result" />
              </Tabs>
              {tabvalue === 0 && (
              <div className="tab_panel dialog_panel">
                <div className="panel_half">
                  <div className="panel_box">
                    <div className="curator_name">
                      <span>Curator</span>
                      <p>Artdefinance Reality sub labs galler Artdefinance</p>
                    </div>
                    <div className="price_area">
                      <div className="price_box">
                        <p>Curation Price</p>
                        <div className="price">
                          1,800,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                      <div className="price_box">
                        <p>Expected Value</p>
                        <div className="price">
                          1,800,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                    </div>
                    <div className="util_area">
                      <div>
                        <button type="button" className="btn_showmore">
                          Show Info more
                        </button>
                      </div>
                      <div className="period">
                        Expected Value after
                        <span>3</span>
                        years
                      </div>
                    </div>

                    <div className="more_area">
                      <div className="tab_list">
                        <button type="button" onClick={this.handleSubtabChange}>
                          <span data="subtab_box1">Artwork Status</span>
                        </button>
                        <button type="button" onClick={this.handleSubtabChange}>
                          <span data="subtab_box2">Artwork Info</span>
                        </button>
                      </div>
                      <div className="tab_contents">
                        {subtabvalue === 'subtab_box1' && (
                        <div className="tab_box">
                          Artwork Status
                        </div>
                        )}
                        {subtabvalue === 'subtab_box2' && (
                        <div className="tab_box">
                          Artwork Info
                        </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel_half">
                  <div className="panel_box">
                    1234
                  </div>
                </div>
              </div>
              )}
              {tabvalue === 1 && (
                <div className="tab_panel">Item Two</div>
              )}
              {tabvalue === 2 && (
                <div className="tab_panel">Item Three</div>
              )}
            </div>
          </Dialog>

        </div>
      </div>
    );
  }
}
