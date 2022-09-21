/* eslint-disable react/prop-types */
import React from 'react';
import './Curation';
import Dialog from '@material-ui/core/Dialog';
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Timer from '../Components/Timer/Timer';
import Side from './Side';
import StatusBar from '../Components/StatusBar/StatusBar';

export default class Evaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubble: true,
      totalByte: 0,
      bubble2: false,
      bubble3: false,
      bubble4: false,
      bubble5: false,
      open: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onToggleOpen = this.onToggleOpen.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onClickHandler() {
    this.setState((prevState) => ({
      bubble: !prevState.bubble,
    }));
  }

  onToggleOpen(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  openDialog() {
    this.setState({ open: true });
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
    const { bubble, totalByte, bubble2, bubble3, bubble4, bubble5, open } = this.state;
    const { disabled } = this.props;

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
        {disabled ? (
          <div className="curation-evaluation__medal">
            <Icons shape="medal" />
            <p>End of Curation</p>
          </div>
        ) : null}
        <p className="curation-evaluation__title">Curation end in</p>
        <Timer expiryTimestamp={time} />
        <div className="curation-evaluation__count">
          <p
            className={
              disabled
                ? 'curation-evaluation__title--disabled'
                : 'curation-evaluation__title'
            }
          >
            Now Curating
          </p>
          {disabled ? (
            <div className="curation-evaluation__number curation-evaluation__number--disabled">
              <p>
                <span>20</span>
                /20
              </p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="curation-evaluation__list">
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              {disabled ? (
                <div>
                  <p className="curation-evaluation__title curation-evaluation__title--disabled">
                    Artwork Trend
                  </p>
                  <span className="question-bubble__mark" />
                </div>
              ) : (
                <div>
                  <p className="curation-evaluation__title">Artwork Trend</p>
                  <button
                    type="button"
                    className="question-bubble__mark"
                    value="bubble2"
                    onMouseEnter={this.onToggleOpen}
                    onMouseLeave={this.onToggleOpen}
                  />
                  {bubble2 ? (
                    <div
                      className="bubble-description"
                      style={{ left: -125, top: -260 }}
                    >
                      <p>Artwork Trend</p>
                      <p>
                        Artwork Trend reflect market trend in current market.
                        Trend of artwork can be specific as
                        <br />
                        material or content of artwork, style or region
                        forexample asian art or aftrican art. Trend is broad
                        <br />
                        but good indicator to evaluate the value of artwork.
                      </p>
                      <img
                        src="/assets/images/page/curation/img_status_explain.png"
                        alt="설명"
                      />
                    </div>
                  ) : null}
                </div>
              )}
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              {disabled ? (
                <img
                  src="/assets/images/page/curation/img_status.png"
                  alt="설명"
                  className="disabled-status"
                />
              ) : (
                <StatusBar />
              )}
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              {disabled ? (
                <div>
                  <p className="curation-evaluation__title curation-evaluation__title--disabled">
                    Artist Status
                  </p>
                  <span className="question-bubble__mark" />
                </div>
              ) : (
                <div>
                  <p className="curation-evaluation__title">Artist Status</p>
                  <button
                    type="button"
                    className="question-bubble__mark"
                    value="bubble3"
                    onMouseEnter={this.onToggleOpen}
                    onMouseLeave={this.onToggleOpen}
                  />
                  {bubble3 ? (
                    <div
                      className="bubble-description"
                      style={{ left: -140, top: -340 }}
                    >
                      <p>Artist Status</p>
                      <p>
                        Artist Analysis is overall analysis of Artist. Factors
                        that affect Artist Analysis include:
                        <br />
                        <br />
                        Artist Market Status, which refers to the artist&apos;s
                        current position and demand in the art market,
                        <br />
                        artist&apos;s academic background, exhibition history
                        and awards history, affiliated gallery, etc.
                        <br />
                        These factors act as important factors in measuring the
                        artist&apos;s future growth potential and
                        <br />
                        whether he will continue his work. The Artist analysis
                        score includes not only the artist&apos;s current
                        <br />
                        status in the art market, but also that the artist will
                        maintain a good reputation and a high
                        <br />
                        position in the art market in the future.
                      </p>
                      <img
                        src="/assets/images/page/curation/img_status_explain.png"
                        alt="설명"
                      />
                    </div>
                  ) : null}
                </div>
              )}
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              {disabled ? (
                <img
                  src="/assets/images/page/curation/img_status.png"
                  alt="설명"
                  className="disabled-status"
                />
              ) : (
                <StatusBar />
              )}
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              {disabled ? (
                <div>
                  <p className="curation-evaluation__title curation-evaluation__title--disabled">
                    Resell Prospects
                  </p>
                  <span className="question-bubble__mark" />
                </div>
              ) : (
                <div>
                  <p className="curation-evaluation__title">Resell Prospects</p>
                  <button
                    type="button"
                    className="question-bubble__mark"
                    value="bubble4"
                    onMouseEnter={this.onToggleOpen}
                    onMouseLeave={this.onToggleOpen}
                  />
                  {bubble4 ? (
                    <div
                      className="bubble-description"
                      style={{ left: -110, top: -290 }}
                    >
                      <p>Resell Prospects</p>
                      <p>
                        Resell prospects is general perspective of future
                        secondary market demand based on market
                        <br />
                        trend, artist status, price and future speculation etc.
                        Low resell prospects means that it might be low chance
                        to trade in secondary market. This can
                        <br />
                        be caused by artwork’s price is extra high to easily
                        find secondary purchaser or Artwork is too
                        <br />
                        big or hard to store. It can be lead to high demand on
                        collatral lending.
                      </p>
                      <img
                        src="/assets/images/page/curation/img_status_explain.png"
                        alt="설명"
                      />
                    </div>
                  ) : null}
                </div>
              )}
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              {disabled ? (
                <img
                  src="/assets/images/page/curation/img_status.png"
                  alt="설명"
                  className="disabled-status"
                />
              ) : (
                <StatusBar />
              )}
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              {disabled ? (
                <div>
                  <p className="curation-evaluation__title curation-evaluation__title--disabled">
                    Originality
                  </p>
                  <span className="question-bubble__mark" />
                </div>
              ) : (
                <div>
                  <p className="curation-evaluation__title">Originality</p>
                  <button
                    type="button"
                    className="question-bubble__mark"
                    value="bubble5"
                    onMouseEnter={this.onToggleOpen}
                    onMouseLeave={this.onToggleOpen}
                  />
                  {bubble5 ? (
                    <div
                      className="bubble-description"
                      style={{ left: -160, top: -370 }}
                    >
                      <p>Originality</p>
                      <p>
                        Originality means any artwork considered to be the first
                        authentic example of an artist’s piece.
                        <br />
                        Originality can be broadly divided into originality in
                        the material and production process of the
                        <br />
                        work and originality in the content aspect of the work.
                        Both factors are important factors in
                        <br />
                        measuring originality, and a work with high originality
                        is a factor that has an important influence
                        <br />
                        on the price of a work and future price increase, such
                        as the work itself or art history being
                        <br />
                        highly valued.
                        <br />
                        <br />
                        Factors that affect Originality include;
                        <br />
                        The material (material) of the work, the production
                        process, and the content of the work (method
                        <br />
                        of interpreting images or presentation of concepts)
                      </p>
                      <img
                        src="/assets/images/page/curation/img_status_explain.png"
                        alt="설명"
                      />
                    </div>
                  ) : null}
                </div>
              )}
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              {disabled ? (
                <img
                  src="/assets/images/page/curation/img_status.png"
                  alt="설명"
                  className="disabled-status"
                />
              ) : (
                <StatusBar />
              )}
            </div>
          </div>
          <div className="curation-evaluation__item">
            <div className="curation-evaluation__header">
              <div>
                <p className="curation-evaluation__title curation-evaluation__title--disabled">
                  Artwork Curating
                </p>
              </div>
              <p className="curation-evaluation__desc">
                Artwork’s position in current art scene based on artwork’s
                creteria.
              </p>
              <div className="side-regist__inputs">
                {disabled ? (
                  <div className="textarea_box textarea_box--disabled">
                    <div>Type your contents here.</div>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
          <div className="curation-evaluation__item--input">
            <div className="curation-evaluation__header">
              {disabled ? (
                <>
                  <div>
                    <p className="curation-evaluation__title curation-evaluation__title--disabled">
                      Curation Price
                    </p>
                  </div>
                  <div className="curation-evaluation__inputs curation-evaluation__inputs--disabled">
                    <input type="text" placeholder="0" disabled />
                    <Icons shape="data-small--gray" />
                    <span>USD</span>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="curation-evaluation__item--input">
            <div className="curation-evaluation__header">
              {disabled ? (
                <>
                  <div>
                    <p className="curation-evaluation__title curation-evaluation__title--disabled">
                      xpected Value
                    </p>
                  </div>
                  <div className="curation-evaluation__inputs curation-evaluation__inputs--disabled">
                    <input type="text" placeholder="0" disabled />
                    <Icons shape="data-small--gray" />
                    <span>USD</span>
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="curation-evaluation__item--checkbox">
            {disabled ? null : (
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
            )}
          </div>
          <div className="curation-evaluation__item--buttons">
            <ButtonGray
              className="button button--gray-line button--mid"
              content="Back"
            />
            {disabled ? (
              <Button
                className="button button--black button--default"
                content="Confirm"
                type="type1"
                disabled="true"
              />
            ) : (
              <Button
                className="button button--black button--default"
                content="Confirm"
                type="type1"
                pressFucn={this.openDialog}
                value="open"
              />
            )}
          </div>
        </div>
        <Dialog fullScreen open={Boolean(open)} onClose={this.handleClose}>
          <div className="dialog_close" onClick={this.handleClose}>
            <Icons shape="close" width="24px" height="24px" />
            <span className="a11y">close</span>
          </div>
          <div className="dialog_wrap curation_dialog">
            <div className="dialog_left">
              <Side />
            </div>
            <div className="dialog_right">
              <div className="curation-evaluation__list">
                <div className="curation-evaluation__item">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Artwork Trend
                      </p>
                      <button
                        type="button"
                        className="question-bubble__mark"
                        value="bubble2"
                        onMouseEnter={this.onToggleOpen}
                        onMouseLeave={this.onToggleOpen}
                      />
                      {bubble2 ? (
                        <div
                          className="bubble-description"
                          style={{ left: -125, top: 30 }}
                        >
                          <p>Artwork Trend</p>
                          <p>
                            Artwork Trend reflect market trend in current
                            market. Trend of artwork can be specific as
                            <br />
                            material or content of artwork, style or region
                            forexample asian art or aftrican art. Trend is broad
                            <br />
                            but good indicator to evaluate the value of artwork.
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
                    <StatusBar step="5" />
                  </div>
                </div>
                <div className="curation-evaluation__item">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Artist Status
                      </p>
                      <button
                        type="button"
                        className="question-bubble__mark"
                        value="bubble3"
                        onMouseEnter={this.onToggleOpen}
                        onMouseLeave={this.onToggleOpen}
                      />
                      {bubble3 ? (
                        <div
                          className="bubble-description"
                          style={{ left: -140, top: 30 }}
                        >
                          <p>Artist Status</p>
                          <p>
                            Artist Analysis is overall analysis of Artist.
                            Factors that affect Artist Analysis include:
                            <br />
                            <br />
                            Artist Market Status, which refers to the
                            artist&apos;s current position and demand in the art
                            market,
                            <br />
                            artist&apos;s academic background, exhibition
                            history and awards history, affiliated gallery, etc.
                            <br />
                            These factors act as important factors in measuring
                            the artist&apos;s future growth potential and
                            <br />
                            whether he will continue his work. The Artist
                            analysis score includes not only the artist&apos;s
                            current
                            <br />
                            status in the art market, but also that the artist
                            will maintain a good reputation and a high
                            <br />
                            position in the art market in the future.
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
                    <StatusBar step="5" />
                  </div>
                </div>
                <div className="curation-evaluation__item">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Resell Prospects
                      </p>
                      <button
                        type="button"
                        className="question-bubble__mark"
                        value="bubble4"
                        onMouseEnter={this.onToggleOpen}
                        onMouseLeave={this.onToggleOpen}
                      />
                      {bubble4 ? (
                        <div
                          className="bubble-description"
                          style={{ left: -110, top: 30 }}
                        >
                          <p>Resell Prospects</p>
                          <p>
                            Resell prospects is general perspective of future
                            secondary market demand based on market
                            <br />
                            trend, artist status, price and future speculation
                            etc. Low resell prospects means that it might be low
                            chance to trade in secondary market. This can
                            <br />
                            be caused by artwork’s price is extra high to easily
                            find secondary purchaser or Artwork is too
                            <br />
                            big or hard to store. It can be lead to high demand
                            on collatral lending.
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
                    <StatusBar step="5" />
                  </div>
                </div>
                <div className="curation-evaluation__item">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">Originality</p>
                      <button
                        type="button"
                        className="question-bubble__mark"
                        value="bubble5"
                        onMouseEnter={this.onToggleOpen}
                        onMouseLeave={this.onToggleOpen}
                      />
                      {bubble5 ? (
                        <div
                          className="bubble-description"
                          style={{ left: -160, top: 30 }}
                        >
                          <p>Originality</p>
                          <p>
                            Originality means any artwork considered to be the
                            first authentic example of an artist’s piece.
                            <br />
                            Originality can be broadly divided into originality
                            in the material and production process of the
                            <br />
                            work and originality in the content aspect of the
                            work. Both factors are important factors in
                            <br />
                            measuring originality, and a work with high
                            originality is a factor that has an important
                            influence
                            <br />
                            on the price of a work and future price increase,
                            such as the work itself or art history being
                            <br />
                            highly valued.
                            <br />
                            <br />
                            Factors that affect Originality include;
                            <br />
                            The material (material) of the work, the production
                            process, and the content of the work (method
                            <br />
                            of interpreting images or presentation of concepts)
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
                    <StatusBar step="5" />
                  </div>
                </div>
                <div className="curation-evaluation__item">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Artwork Curating
                      </p>
                    </div>
                    <p className="curation-evaluation__desc">
                      Artwork’s position in current art scene based on artwork’s
                      creteria.
                    </p>
                    <div className="side-regist__inputs">
                      <div className="textarea_box">
                        <div>
                          Born in 1979, Jisan Ahn studied plastic art at Korea
                          National University of Arts and has a degree with
                          paintings at Frank Mohr International in the
                          Netherlands.
                        </div>
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
                      <p className="curation-evaluation__title">
                        Curation Price
                      </p>
                    </div>
                    <div className="curation-evaluation__inputs">
                      <p>1,500,000.00</p>
                      <Icons shape="data-small--gray" />
                      <span>USD</span>
                    </div>
                  </div>
                </div>
                <div className="curation-evaluation__item--input">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Expected Value
                      </p>
                    </div>
                    <div className="curation-evaluation__inputs">
                      <p>1,500,000.00</p>
                      <Icons shape="data-small--gray" />
                      <span>USD</span>
                    </div>
                  </div>
                </div>
                <div className="curation-evaluation__item--checkbox">
                  <div className="curation-evaluation__header">
                    <div>
                      <p className="curation-evaluation__title">
                        Expected value of this work after
                      </p>
                      <p className="year">3</p>
                      <p className="year-text">years</p>
                    </div>
                  </div>
                </div>
                <div className="curation-evaluation__item--buttons">
                  <ButtonGray
                    className="button button--gray-line button--mid"
                    content="Back"
                  />
                  {disabled ? (
                    <Button
                      className="button button--black button--default"
                      content="Confirm"
                      type="type1"
                      disabled="true"
                    />
                  ) : (
                    <Button
                      className="button button--black button--default"
                      content="Confirm"
                      type="type1"
                      pressFucn={this.openDialog}
                      value="open"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
