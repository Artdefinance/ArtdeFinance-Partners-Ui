/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Dialog from '@material-ui/core/Dialog';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';
import ProcessResultPop from './ProcessResultPop';
import Status from './Status';

export default class Process01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOn2: false,
      value: 0,
      open: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openDialog = this.openDialog.bind(this);
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

  handleTabChange = (event, newValue) => {
    this.setState(() => ({
      value: newValue,
    }));
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog() {
    this.setState({ open: true });
  }

  render() {
    const backgroundStyle = ['/assets/images/page/main/img_piece.png'];
    const { isToggleOn, isToggleOn2, value, open } = this.state;
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

    const listData = [
      {
        id: '1',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '2',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '3',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '4',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '5',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '6',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
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
              <div className="main-tab">
                <Tabs value={value} onChange={this.handleTabChange}>
                  <Tab label="Exhibition History" />
                  <Tab label="DAO Voting Result" />
                  <Tab label="Curation Result" />
                </Tabs>
                {value === 0 && (
                  <div className="tab_panel" style={{ display: 'block' }}>
                    <div>
                      <button type="button" onClick={this.openDialog}>Show all</button>
                      <ul>
                        {listData.map((item) => (
                          <li key={item.id}>
                            <p>{item.years}</p>
                            <p>{item.position}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {value === 1 && (
                  <div className="tab_panel">
                    <div>
                      <button type="button">Show all</button>
                      <ul>
                        {listData.map((item) => (
                          <li key={item.id}>
                            <p>{item.years}</p>
                            <p>{item.position}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {value === 2 && (
                  <div className="tab_panel">
                    <div>
                      <button type="button">Show all</button>
                      <ul>
                        {listData.map((item) => (
                          <li key={item.id}>
                            <p>{item.years}</p>
                            <p>{item.position}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="main-process--second">
              <div className="main-step">
                <p className="main-step__main-title">Curation Process</p>
                <Status step="1" />
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
              <div className="main-description">
                <div>
                  <p className="main-description__title">
                    Your artwork’s NFT has been minted.
                  </p>
                  <p className="main-description__text">
                    The artwork&apos;s information and certificate of
                    authenticity are securely stored in the blockchain.
                    <br />
                    Curate the value of your work with an expert right now.
                  </p>
                  <Button
                    className="button button--black button--mid"
                    content="Curating Setting"
                    type="type1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog fullScreen open={Boolean(open)} onClose={this.handleClose}>
          <div className="dialog_close" onClick={this.handleClose}>
            <Icons shape="close" width="24px" height="24px" />
            <span className="a11y">close</span>
          </div>
          <ProcessResultPop />
        </Dialog>
      </div>
    );
  }
}
