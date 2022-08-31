/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.scss';
import Button from '../Components/Button/Button';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistCount: 123451,
    };
  }

  render() {
    const { artistCount } = this.state;
    const Content1 = [
      {
        id: '1',
        title: 'Sort by recently active',
      },
      {
        id: '2',
        title: 'Sort by artist name',
      },
    ];
    const exampleData = [
      {
        id: '1',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '2',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '3',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '4',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '5',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '6',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '7',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '8',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '9',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
      {
        id: '10',
        artist: 'Gordon Alexander Buchanan Gordon Alexander Buchanan',
        birth: '2000 - 2022',
        update: '22/06/2022 17:33:55',
      },
    ];
    return (
      <div className="artist">
        <div className="artist__wrap">
          <div className="side-list">
            <div className="side-list__header">
              <div className="side-list__info">
                <div className="side-list__wrap">
                  <span className="side-list__icon">
                    <Icons
                      shape="account"
                      width="20px"
                      height="20px"
                      color="#BBBBBB"
                    />
                  </span>
                  <p className="side-list__type">Artist</p>
                  <p className="side-list__count">
                    {artistCount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </p>
                </div>
                <Dropdown
                  dropWidth="216px"
                  dropHeight="60px"
                  dropTitle="Sort by"
                  content={Content1}
                  dropFontSize="16px"
                  dropFontColor="#000000"
                />
              </div>
            </div>
            <div className="side-list__content">
              <div className="side-list__titles">
                <ul>
                  <li>Artist</li>
                  <li>Birth</li>
                  <li>Update date</li>
                </ul>
              </div>
              <div className="side-list__list">
                <ul className="side-list__items">
                  {exampleData.map((items) => (
                    <li key={items.id}>
                      <p>{items.artist}</p>
                      <p>{items.birth}</p>
                      <p>{items.update}</p>
                    </li>
                  ))}
                </ul>
                <div className="side-list__pagenation">
                  <Pagenation />
                </div>
              </div>
            </div>
          </div>
          <div className="side-view">
            <div className="side-view__header">
              <Link to="../artist/list">
                <Icons shape="arrow-left" width="24px" height="24px" />
              </Link>
              <p>Artist Registration</p>
            </div>
            <div className="side-view__content">
              <div className="side-view__content-wrap">
                <img
                  src="/assets/images/page/artist/img_profile_view.png"
                  alt="프로필 이미지"
                />
                <div>
                  <p className="side-view__title">
                    Vincent van Gogh, 1955Vincent vanVincent van Gogh
                  </p>
                  <p className="side-view__year">1999 - 2012</p>
                </div>
              </div>
              <div className="side-view__content-box">
                <p className="side-view__type">Country</p>
                <p className="side-view__description-country">
                  United States of America
                </p>
                <p className="side-view__type">Biography</p>
                <div className="side-view__description">
                  <p>
                    Born in 1979, Jisan Ahn studied plastic art at Korea National
                    University of Arts and has a degree with paintings at Frank
                    Mohr International in the Netherlands. . He debuted in the
                    Netherlands first while he was staying in Rijks akademie
                    residency for 2 years from 2013. European Art Scene started
                    paying attention to him after his solo exhibition at Galerie
                    Bart/Amsterdam (2014, 2015). He has participated major group
                    exhibition such as Arko Art Center/Seoul (2016), Gallery
                    SKAPE/Seoul (2015), Arti ET Amicitiae/Amsterdam (2014) and got
                    Buning Brongers Prize in 2014. Born in 1979, Jisan Ahn studied
                    plastic art at Korea National University of Arts and has a
                    degree with paintings at Frank Mohr International in the
                    Netherlands. . He debuted in the Netherlands first while he
                    was staying in Rijks akademie residency for 2 years from 2013.
                    European Art Scene started paying attention to him after his
                    solo exhibition at Galerie Bart/Amsterdam (2014, 2015). He has
                    participated major group exhibition such as Arko Art
                    Center/Seoul (2016), Gallery SKAPE/Seoul (2015), Arti ET
                    Amicitiae/Amsterdam (2014) and got Buning Brongers Prize in
                    2014.
                  </p>
                  <button type="button" className="side-view__more">See more</button>
                </div>
                <div className="side-view__download">
                  <p className="side-view__type">Artist CV</p>
                  <button type="button" className="side-view__download-button">
                    Artist CV Detail View
                    <span>
                      <Icons shape="download" />
                    </span>
                  </button>
                </div>
              </div>
              <Link to="/artist/regist">
                <Button
                  className="button button--black button--mid"
                  content="Update"
                  type="type1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
