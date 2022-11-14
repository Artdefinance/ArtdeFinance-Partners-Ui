/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Artist.scss';
import ArtistList from './ArtistList';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';
import Icons from '../Components/Icons/Icons';
import Input from '../Components/Inputs/Input';

export default class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileImage: '/assets/images/page/artist/img_profile.png',
      totalByte: 0,
      isToggleOn1: false,
      isblank1: true,
      isblank2: true,
      isNumberblank: true,
      isblank3: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkByte = this.checkByte.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.changeNumberInput = this.changeNumberInput.bind(this);
    this.isblankDropDown = this.isblankDropDown.bind(this);
    this.numberInputTarget1 = React.createRef();
    this.numberInputTarget2 = React.createRef();
  }

  handleClick(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
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

  clickClose(e) {
    this.setState(() => ({
      [e.target.value]: false,
    }));
  }

  changeNumberInput() {
    const target1 = this.numberInputTarget1.current.value.length;
    const target2 = this.numberInputTarget2.current.value.length;
    if (target1 > 3 && target2 > 3) {
      this.setState(() => ({
        isNumberblank: false,
      }));
    }
  }

  isblankDropDown(e) {
    if (e.target.className === 'dropdown__inner-text') {
      this.setState({
        isblank3: false,
       });
    }
  }

  render() {
    const { fileImage, totalByte,
      isToggleOn1, isblank1, isblank2, isblank3, isNumberblank } = this.state;

    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };

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
        <div className="artist__wrap artist__wrap--long">
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
                    shape="camera"
                    width="38px"
                    height="38px"
                    viewBox="0 0 38 38"
                  />
                  <input type="file" onChange={this.handleChange} />
                </div>
              </div>
              <div className="side-regist__inputs">
                <p
                  className={`side-regist__title ${
                    isblank1 ? 'side-regist__title--need' : ''
                  }`}
                >
                  Artist Name
                </p>
                <Input
                  name="artist"
                  placeholder="Text"
                  onChangeValue={
                    (value) => this.setState((state) => ({ ...state, isblank1: !value }))
                  }
                />
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs">
                <p
                  className={`side-regist__title ${
                    isblank2 ? 'side-regist__title--need' : ''
                  }`}
                >
                  ID
                </p>
                <Input
                  name="ID"
                  placeholder="Text"
                  onChangeValue={
                    (value) => this.setState((state) => ({ ...state, isblank2: !value }))
                  }
                />
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs side-regist__inputs--half">
                <div
                  className={`side-regist__title 
                  ${isNumberblank ? 'side-regist__title--need side-regist__title--mark' : ''}`}
                >
                  Birth
                  <button
                    type="button"
                    className="question-bubble__mark"
                    onClick={this.handleClick}
                    value="isToggleOn1"
                  />
                  <motion.div
                    animate={isToggleOn1 === true ? style.open : style.closed}
                    className="question-bubble__wrap"
                    style={{ top: '-80px', left: '-85px' }}
                  >
                    아직 작가가 살아있다면
                    <br />
                    태어난 해만 입력해 주세요
                    <button
                      type="button"
                      onClick={this.clickClose}
                      className="question-bubble__close"
                      value="isToggleOn1"
                    />
                  </motion.div>
                </div>
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
                    ref={this.numberInputTarget1}
                    onChange={this.changeNumberInput}
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
                    ref={this.numberInputTarget2}
                    onChange={this.changeNumberInput}
                  />
                </div>
                <span className="side-regist__more">Supporting Text</span>
              </div>
              <div className="side-regist__inputs">
                <p className={`side-regist__title ${isblank3 ? 'side-regist__title--need' : ''}`}>
                  Country
                </p>
                <div onClick={this.isblankDropDown}>
                  <CountryDropdown
                    dropWidth="100%"
                    dropHeight="80px"
                    dropTitle="Please select a country"
                    content={ExampleContent1}
                    dropFontSize="24px"
                  />
                </div>
                <span className="side-regist__more side-regist__more--right">
                  Up to 2000Bytes can be registered.
                </span>
              </div>
              <div className="side-regist__inputs side-regist__inputs--error">
                <p className="side-regist__title">Biography</p>
                <div className="textarea_box">
                  <textarea
                    placeholder="Type your contents here."
                    onKeyUp={this.checkByte}
                    maxLength={2000}
                  />
                  <div className="byte__check">
                    <p>{totalByte}</p>
                    <p>/2000 byte</p>
                  </div>
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
                />
                {/* <Button
                  className="button button--black button--default"
                  content="Registration"
                  type="type1"
                  disabled="true"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
