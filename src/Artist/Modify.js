/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.scss';
import ArtistList from './ArtistList';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
import Icons from '../Components/Icons/Icons';
import Input from '../Components/Inputs/Input';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';

export default class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileImage: '/assets/images/page/artist/img_profile_view.png',
      totalByte: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkByte = this.checkByte.bind(this);
  }

  handleChange(e) {
    this.setState(() => ({
      fileImage: URL.createObjectURL(e.target.files[0]),
    }));
  }

  checkByte(e) {
    const message = e.target.value;
    let currentBytes = 0;
    let totalBytes = 0;

    for (let i = 0; i < message.length; i += 1) {
      currentBytes = message.charCodeAt(i);
      if (currentBytes > 128) totalBytes += 2;
      else totalBytes += 1;
    }
    this.setState(() => ({
      totalByte: totalBytes,
    }));
  }

  render() {
    const { fileImage, totalByte } = this.state;
    const ExampleContent1 = [
      {
        id: '1',
        title: '[SPM] Saint Pierre and Miquelon',
        country: 'miquelon_',
      },
      {
        id: '2',
        title: '[ATG] Antigua and Barbuda',
        country: 'barbuda_',
      },
      {
        id: '3',
        title: '[TTO] Trinidad and Tobago',
        country: 'tobago_',
      },
      {
        id: '4',
        title: '[PNG] Papua New Guinea',
        country: 'guinea',
      },
    ];
    return (
      <div className="artist">
        <div className="artist__wrap">
          <ArtistList data="true" />
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
                    shape="pencil"
                    width="38px"
                    height="38px"
                    viewBox="0 0 38 38"
                  />
                  <input type="file" onChange={this.handleChange} />
                </div>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title">
                  Artist Name
                </p>
                <Input name="artist" disabled="true" placeholder="Content" />
                <div className="side-regist__message">
                  <Icons shape="warning_fill" color="#FF3B30" />
                  <span className="side-regist__more">Supporting Text</span>
                </div>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title">
                  ID
                </p>
                <Input name="ID" placeholder="Content" getValue="Content" />
                <div className="side-regist__message">
                  <Icons shape="warning_fill" color="#FF3B30" />
                  <span className="side-regist__more">Supporting Text</span>
                </div>
              </div>
              <div className="side-regist__inputs side-regist__inputs--half">
                <p className="side-regist__title side-regist__title--need side-regist__title--mark">
                  Birth
                  <button type="button">
                    <Icons
                      shape="question"
                      width="21px"
                      height="20px"
                      color="#366DFC"
                    />
                  </button>
                </p>
                <div className="side-regist__box">
                  <input
                    type="text"
                    className="side-regist__input"
                    placeholder="YYYY"
                    maxLength={4}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  <span />
                  <input
                    type="text"
                    className="side-regist__input"
                    placeholder="YYYY"
                    maxLength={4}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="side-regist__message">
                  <Icons shape="warning_fill" color="#FF3B30" />
                  <span className="side-regist__more">Supporting Text</span>
                </div>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need">
                  Country
                </p>
                <CountryDropdown
                  dropWidth="650px"
                  dropHeight="80px"
                  dropTitle="Please select a country"
                  content={ExampleContent1}
                  dropFontSize="24px"
                />
                <span className="side-regist__more">
                  Up to 2000Bytes can be registered.
                </span>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title">Biography</p>
                <textarea
                  placeholder="Type your contents here."
                  onKeyUp={this.checkByte}
                  maxLength={2000}
                />
                <div className="side-regist__text">
                  <p>{totalByte}</p>
                  <p>/2000 byte</p>
                </div>
                <div className="side-regist__message">
                  <Icons shape="warning_fill" color="#FF3B30" />
                  <span className="side-regist__more">Supporting Text</span>
                </div>
              </div>
              <div className="side-regist__inputs">
                <p className="side-regist__title side-regist__title--need side-regist__title--mark">
                  Artist CV
                  <button type="button">
                    <Icons
                      shape="question"
                      width="21px"
                      height="20px"
                      color="#366DFC"
                    />
                  </button>
                </p>
                <div className="side-regist__drag-drop">
                  <FileDragDrop />
                </div>
              </div>
              <div className="buttons">
                <Link to="/artist/list">
                  <ButtonGray
                    className="button button--gray-line button--default"
                    content="Back"
                  />
                </Link>
                <Button
                  className="button button--black button--default"
                  content="Registration"
                  type="type1"
                  disabled="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
