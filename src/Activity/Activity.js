/* eslint-disable react/prop-types */
import React from 'react';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistCount: 1000000,
    };
  }

  render() {
    const { artistCount } = this.state;
    const { data } = this.props;
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
    const nodataStyle = {
      backgroundImage: 'url(/assets/images/page/artist/img_no_data.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div>
        {data === 'true' ? (
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
        ) : (
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
              <div className="side-list__no-data">
                <i className="side-list__img" style={nodataStyle}><span className="a11y">데이터 없을때 이미지</span></i>
                <p>
                  There is no registered artist information.
                  {'\n'}
                  Register an artist first and start curating your work.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
