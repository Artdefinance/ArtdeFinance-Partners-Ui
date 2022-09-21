/* eslint-disable react/prop-types */
import React from 'react';
import './Curation';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Timer from '../Components/Timer/Timer';
import StatusBar from '../Components/StatusBar/StatusBar';

export default class Evaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: true,
      totalByte: 0,
      bubble2: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => ({
      bubble: !prevState.bubble,
    }));
  }

  onToggleOpen(e) {
    this.setState((prevState) => ({
      bubble2: !prevState[e.target.value],
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
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1); // 1초
    const { bubble, totalByte, bubble2 } = this.state;

    const ExampleContent1 = [
      {
        id: '1',
        title: '1',
      },
      {
        id: '2',
        title: '2',
      },
      {
        id: '3',
        title: '3',
      },
    ];

    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 }, zIndex: -1 },
    };

    return (
      <div className="curation-evaluation">
        <p className="curation-evaluation__title">Curation end in</p>
        <Timer expiryTimestamp={time} />
        <div className="curation-evaluation__count">
          <p className="curation-evaluation__title">Now Curating</p>
          <div className="curation-evaluation__number">
            <p>
              <span>11</span>
              /20
            </p>
          </div>
          {bubble ? (
            <div className="bubble">
              <p className="bubble-left-center">
                The curation of artworks is limited
                <br />
                to
                <span>20 curator</span>
              </p>
              <button type="button" onClick={this.onClickHandler}>
                <Icons shape="close_small" color="#366DFC" />
              </button>
            </div>
          ) : null}
        </div>
        <div className="curation-evaluation__list">
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Artwork Trend</p>
                <button
                  type="button"
                  className="question-bubble__mark"
                  onClick={this.bubbleHandler}
                  value="bubble2"
                  onMouseEnter={this.onToggleOpen}
                  onMouseLeave={this.onToggleOpen}
                />
                {bubble2 ? (
                  <div className="bubble-description">
                    <p>Artwork Trend</p>
                    <p>
                      Artwork Trend reflect market trend in current market.
                      Trend of artwork can be specific as material or content of
                      artwork, style or region forexample asian art or aftrican
                      art. Trend is broad but good indicator to evaluate the
                      value of artwork.
                    </p>
                    <img
                      src="/assets/images/page/curation/img_status_explain.png"
                      alt="설명"
                    />
                  </div>
                ) : null}
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <StatusBar />
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Artist Status</p>
                <button type="button">
                  <Icons
                    shape="question"
                    width="21px"
                    height="20px"
                    color="#366DFC"
                  />
                </button>
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <StatusBar />
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Resell Prospects</p>
                <button type="button">
                  <Icons
                    shape="question"
                    width="21px"
                    height="20px"
                    color="#366DFC"
                  />
                </button>
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <StatusBar />
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Originality</p>
                <button type="button">
                  <Icons
                    shape="question"
                    width="21px"
                    height="20px"
                    color="#366DFC"
                  />
                </button>
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <StatusBar />
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Artwork Curating</p>
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <div className="side-regist__inputs">
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
              </div>
            </div>
          </div>
          <div className="curation-evaluation__item--input">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Curation Price</p>
              </div>
              <div className="curation-evaluation__inputs">
                <input
                  type="text"
                  placeholder="0"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <Icons shape="data-small--gray" />
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="curation-evaluation__item--input">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">Expected Value</p>
              </div>
              <div className="curation-evaluation__inputs">
                <input
                  type="text"
                  placeholder="0"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <Icons shape="data-small--gray" />
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="curation-evaluation__item--checkbox">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title">
                  Expected value of this work after years
                </p>
                <Dropdown
                  dropWidth="215px"
                  dropHeight="60px"
                  dropTitle="1"
                  content={ExampleContent1}
                  dropFontSize="36px"
                  dropFontColor="#000000"
                />
              </div>
            </div>
          </div>
          <div className="curation-evaluation__item--buttons">
            <ButtonGray
              className="button button--gray-line button--mid"
              content="Back"
            />
            <Button
              className="button button--black button--default"
              content="Confirm"
              type="type1"
              disabled="true"
            />
          </div>
        </div>
      </div>
    );
  }
}
