/* eslint-disable react/prop-types */
import React from 'react';
import Icons from '../Components/Icons/Icons';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOn2: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  render() {
    const { isToggleOn, isToggleOn2, isToggleOn3, isToggleOn4 } = this.state;

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
      <div className="curation-about">
        <div className={isToggleOn ? 'active' : ''}>
          <button
            type="button"
            className="curation-about__header"
            onClick={this.onClickHandler}
            value="isToggleOn"
          >
            About Artworks
          </button>
          <div className="curation-about__content">
            {isToggleOn ? (
              <p>
                Born in 1979, Jisan Ahn studied plastic art at Korea National
                University of Arts and has a degree with paintings at Frank Mohr
                International in the Netherlands. . He debuted in the
                Netherlands first while he was staying in Rijks akademie
                residency for 2 years from 2013. European Art Scene started
                paying attention to him after his solo exhibition at Galerie
                Bart/Born in 1979, Jisan Ahn studied plastic art at Korea
                National University of Arts and has a degree with paintings at
                Frank Mohr International in the Netherlands. . He debuted in the
                Netherlands first while he was staying in Rijks akademie
                residency for 2 years from 2013. European Art Scene started
                paying attention to him after his solo exhibition at Galerie
                Bart/
              </p>
            ) : null}
          </div>
        </div>
        <div className={isToggleOn2 ? 'active' : ''}>
          <button
            type="button"
            className="curation-about__header"
            onClick={this.onClickHandler}
            value="isToggleOn2"
          >
            Exhibition History
          </button>
          <div className="curation-about__content curation-about__content--history">
            {isToggleOn2 ? (
              <div className="curation-about__list">
                <div className="curation-about__item">
                  <p>2012</p>
                  <p>Park Avenue Armory, New York Cityas</p>
                  <p>Los Angeles, California</p>
                </div>
                <div className="curation-about__item">
                  <p>2012</p>
                  <p>Park Avenue Armory, New York Cityas</p>
                  <p>Los Angeles</p>
                </div>
                <div className="curation-about__item">
                  <p>2012</p>
                  <p>Park Avenue Armory, New York Cityas</p>
                  <p>Los Angeles</p>
                </div>
                <div className="curation-about__item">
                  <p>2012</p>
                  <p>
                    Park Avenue Armory, New York Cityaa sdasdadqw wfsf
                    sfqqweqweqwes...
                  </p>
                  <p>Los Angeles, California</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={isToggleOn3 ? 'active' : ''}>
          <button
            type="button"
            className="curation-about__header"
            onClick={this.onClickHandler}
            value="isToggleOn3"
          >
            About Artist
          </button>
          <div className="curation-about__content">
            {isToggleOn3 ? (
              <div className="curation-about__content">
                <div className="curation-about__content-wrap">
                  <div className="curation-about__img">
                    <img
                      src="/assets/images/page/artist/img_profile_view.png"
                      alt="프로필 이미지"
                    />
                  </div>
                  <div className="curation-about__box">
                    <p className="curation-about__titles">
                      Vincent van Gogh, 1955Vincent vanVincent van Gogh
                    </p>
                    <p className="curation-about__year">1999 - 2012</p>
                  </div>
                </div>
                <div className="curation-about__content-box">
                  <div className="curation-about__download">
                    <div>
                      <p className="curation-about__type">Country</p>
                      <p className="curation-about__description-country">
                        United States of America
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="curation-about__download-button"
                      >
                        Artist CV Detail View
                        <span>
                          <Icons shape="download" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <p className="curation-about__type">Biography</p>
                  <div className="curation-about__description">
                    <p>
                      Born in 1979, Jisan Ahn studied plastic art at Korea
                      National University of Arts and has a degree with
                      paintings at Frank Mohr International in the Netherlands.
                      . He debuted in the Netherlands first while he was staying
                      in Rijks akademie residency for 2 years from 2013.
                      European Art Scene started paying attention to him after
                      his solo exhibition at Galerie Bart/Amsterdam (2014,
                      2015). He has participated major group exhibition such as
                      Arko Art Center/Seoul (2016), Gallery SKAPE/Seoul (2015),
                      Arti ET Amicitiae/Amsterdam (2014) and got Buning Brongers
                      Prize in 2014. Born in 1979, Jisan Ahn studied plastic art
                      at Korea National University of Arts and has a degree with
                      paintings at Frank Mohr International in the Netherlands.
                      . He debuted in the Netherlands first while he was staying
                      in Rijks akademie residency for 2 years from 2013.
                      European Art Scene started paying attention to him after
                      his solo exhibition at Galerie Bart/Amsterdam (2014,
                      2015). He has participated major group exhibition such as
                      Arko Art Center/Seoul (2016), Gallery SKAPE/Seoul (2015),
                      Arti ET Amicitiae/Amsterdam (2014) and got Buning Brongers
                      Prize in 2014.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={isToggleOn4 ? 'active' : ''}>
          <button
            type="button"
            className="curation-about__header"
            onClick={this.onClickHandler}
            value="isToggleOn4"
          >
            NFT Certification
          </button>
          <div className="curation-about__content curation-about__content--nft">
            {isToggleOn4 ? (
              <div>
                {nftDatas.map((items) => (
                  <div className="curation-about__lists" key={items.id}>
                    <div className="curation-about__items">
                      <p className="curation-about__title">Contract Address</p>
                      <p className="curation-about__text">{items.address}</p>
                    </div>
                    <div className="curation-about__items">
                      <p className="curation-about__title">Token ID</p>
                      <p className="curation-about__text">{items.tokenID}</p>
                    </div>
                    <div className="curation-about__items">
                      <p className="curation-about__title">Token Standard</p>
                      <p className="curation-about__text">{items.standard}</p>
                    </div>
                    <div className="curation-about__items">
                      <p className="curation-about__title">Blockchain</p>
                      <p className="curation-about__text">{items.blockchain}</p>
                    </div>
                    <div className="curation-about__items">
                      <p className="curation-about__title">Metadata</p>
                      <p className="curation-about__text">{items.metadata}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
