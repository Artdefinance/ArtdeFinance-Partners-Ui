/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.scss';
import Button from '../Components/Button/Button';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class List extends React.Component {
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
                <Dropdown dropWidth="216px" dropHeight="60px" dropTitle="Sort by" content={Content1} dropFontSize="16px" dropFontColor="#000000" />
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
                <div className="side-list__pagenation">
                  <Pagenation />
                </div>
              </div>
            </div>
          </div>
          <div className="side-info">
            <div className="side-info__header">
              <p>Artist Registration</p>
            </div>
            <div className="side-info__content">
              <p className="side-info__description">
                Before registering a work, please register your affiliated artist first.
                {'\n'}
                {'\n'}
                After initial registration, the artist&apos;s exhibition history or work activities
                {'\n'}
                They can be updated at any time as they are added.
                {'\n'}
                {'\n'}
                However, the registered artist cannot be deleted.
                {'\n'}
                Please review carefully before registering.
              </p>
              <div className="side-info__notice">
                <span className="side-info__img">
                  <Icons shape="exclama_fill" color="#366DFC" />
                </span>
                <p>
                  Please prepare a free-form PDF file in advance of the CV containing the
                  {'\n'}
                  artist&apos;s exhibition experience or work activities.
                </p>
              </div>
              <Link to="/artist/regist">
                <Button className="button button--black button--mid" content="Arttist Registration" type="type1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
