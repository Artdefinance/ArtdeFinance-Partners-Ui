/* eslint-disable react/prop-types */
import React from 'react';
import './Artist.scss';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';

export default class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistCount: 1000000,
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
                    <Icons shape="account" width="20px" height="20px" color="#BBBBBB" />
                  </span>
                  <p className="side-list__type">Artist</p>
                  <p className="side-list__count">{ artistCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</p>
                </div>
                <Dropdown dropWidth="216px" dropHeight="100%" dropTitle="Sort by" content={Content1} />
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
              <ul className="side-list__items">
                {
                  exampleData.map((items) => (
                    <li key={items.id}>
                      <p>{items.artist}</p>
                      <p>{items.birth}</p>
                      <p>{items.update}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="side-info side-regist">
            <div className="side-info__header">
              <p>Artist Registration</p>
            </div>
            <div className="side-info__content">
              <div className="side-regist__profile">
                <button type="button" className="side-regist__profile-button">
                  <Icons shape="camera" width="38px" height="38px" viewBox="0 0 38 38" />
                  <span>A</span>
                </button>
              </div>
              <div className="side-regist__inputs">
                <p>Artist Name</p>
                <input type="text" className="side-regist__input" placeholder="Text" />
                <span className="side-regist__more">Supporting Text</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
