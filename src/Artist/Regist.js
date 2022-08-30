/* eslint-disable react/prop-types */
import React from 'react';
import './Artist.scss';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';

export default class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistCount: 1000000,
      fileImage: '/assets/images/page/artist/img_profile.png',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(() => ({
      fileImage: URL.createObjectURL(e.target.files[0]),
    }));
  }

  render() {
    const { artistCount, fileImage } = this.state;
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
    const ExampleContent4 = [
      {
        id: '1',
        title: '[SPM] Saint Pierre and Miquelon',
        country: 'korea_',
      },
      {
        id: '2',
        title: '[ATG] Antigua and Barbuda',
        country: 'korea_',
      },
      {
        id: '3',
        title: '[TTO] Trinidad and Tobago',
        country: 'korea_',
      },
      {
        id: '4',
        title: '[PNG] Papua New Guinea',
        country: 'korea_',
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
                <Dropdown dropWidth="216px" dropHeight="60px" dropTitle="Sort by" content={Content1} dropFontSize="16px" />
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
          <div className="side-info side-regist">
            <div className="side-info__header">
              <p>Artist Registration</p>
            </div>
            <div className="side-regist__content">
              <div className="side-regist__profile">
                <div className="side-regist__profile-button">
                  <img src={fileImage} alt="프로필 이미지" />
                </div>
                <div className="side-regist__file">
                  <Icons
                    shape="camera"
                    width="38px"
                    height="38px"
                    viewBox="0 0 38 38"
                  />
                  <input type="file" onChange={this.handleChange} />
                </div>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need">Artist Name</p>
                <input
                  type="text"
                  className="side-regist__input"
                  placeholder="Text"
                />
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need">ID</p>
                <input
                  type="text"
                  className="side-regist__input"
                  placeholder="Text"
                />
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs side-regist__inputs--half">
                <p className="side-regist__title side-regist__title--need side-regist__title--mark">
                  Birth
                  <Icons shape="question" width="21px" height="20px" color="#366DFC" />
                </p>
                <div className="side-regist__box">
                  <input
                    type="text"
                    className="side-regist__input"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                  <span />
                  <input
                    type="text"
                    className="side-regist__input"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                </div>
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need">Country</p>
                <CountryDropdown dropWidth="650px" dropHeight="80px" dropTitle="Please select a country" content={ExampleContent4} dropFontSize="24px" />
                <span className="side-regist__more">Up to 2000Bytes can be registered.</span>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title">Biography</p>
                <textarea placeholder="Type your contents here." />
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need side-regist__title--mark">
                  Artist CV
                  <Icons shape="question" width="21px" height="20px" color="#366DFC" />
                </p>
                <div className="side-regist__drag-drop">
                  <FileDragDrop />
                </div>
              </div>
              <div className="buttons">
                <ButtonGray className="button button--gray-line button--default" content="Back" />
                <Button className="button button--black button--default" content="Registration" type="type1" disabled="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
