/* eslint-disable react/prop-types */
import React from 'react';
import Status from './Status';
import TextBox from './TextBox';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';

export default class StatusGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="status-guide">
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="1" />
            <TextBox borderBlack mainText="Curation is in progress now" />
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="1" />
            <TextBox
              borderRed
              mainText="This work has not been curated and thus has not been voted on for Dao."
              subText="During the curation period, if there are less than 3 curations for a work, voting will not proceed."
            />
            <Button
              className="button button--black button--default"
              content="Remove Market list"
              type="type1"
            />
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="1" />
            <TextBox
              borderBlue
              mainText="Curating ends and DAO Voting begins."
            />
            <Button
              className="button button--black button--default"
              content="Remove Market list"
              type="type1"
            />
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="2" />
            <TextBox
              borderBlue
              mainText={
                'The final value selection for the work has ended with \n fair voting participation.'
              }
              subText="We are waiting for market registration to sell works."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
            <div className="artboard-status__notice">
              <Icons
                shape="exclama24"
                width="24px"
                height="24px"
                color="#366DFC"
              />
              <p>
                If the work is not registered in the market, it is necessary to
                prove the value of the work. The curation and DAO voting will
                need to be done again. And when curation proceeds, the
                registration fee for the work must be paid again.
              </p>
            </div>
          </div>
          <div className="more-info">
            <p className="more-info__title">
              Congratulations! Selected as a Winner Curator.
            </p>
            <p className="more-info__text">
              If the proposed curation amount is close to the sales amount, you
              will receive a higher reward.
            </p>
            <div>
              <p className="more-info__sub-title">Expected Curation Revenue</p>
              <div className="more-info__count">
                <Icons shape="data-small" />
                <p>
                  <span>1,500,000.00</span>
                  <span>BUSD</span>
                </p>
              </div>
              <div className="more-info__desc">
                <Icons
                  shape="exclama24"
                  width="24px"
                  height="24px"
                  color="#366DFC"
                />
                <p>
                  The three curators who evaluated the closest value were 5% of
                  the sales value of the work. Additional compensation will be
                  paid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="2" />
            <TextBox
              borderBlue
              mainText={
                'The final value selection for the work has ended with \n fair voting participation.'
              }
              subText="We are waiting for market registration to sell works."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
            <div className="artboard-status__notice">
              <Icons
                shape="exclama24"
                width="24px"
                height="24px"
                color="#366DFC"
              />
              <p>
                If the work is not registered in the market, it is necessary to
                prove the value of the work. The curation and DAO voting will
                need to be done again. And when curation proceeds, the
                registration fee for the work must be paid again.
              </p>
            </div>
          </div>
          <div className="more-info">
            <p className="more-info__title">
              Unfortunately, we were not selected as the Winner Curator.
            </p>
            <p className="more-info__text">
              Expect additional rewards if the proposed curation amount is close
              to the sales amount.
            </p>
            <div className="more-info__desc">
              <Icons
                shape="exclama24"
                width="24px"
                height="24px"
                color="#366DFC"
              />
              <p>
                The three curators who evaluated the closest value were 5% of
                the sales value of the work. Additional compensation will be
                paid.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="3" />
            <TextBox
              borderBlack
              mainText="The curation has ended, but the owner of the work does not want to sell it."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="3" />
            <TextBox
              backgroundRed
              mainText="The sale of the artwork in the market has been stopped."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="3" />
            <TextBox
              borderBlue
              mainText="The work has been registered in the market and is on sale."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
            <div className="artboard-status__notice">
              <Icons
                shape="exclama24"
                width="24px"
                height="24px"
                color="#366DFC"
              />
              <p>
                If the work is not registered in the market, it is necessary to
                prove the value of the work. The curation and DAO voting will
                need to be done again. And when curation proceeds, the
                registration fee for the work must be paid again.
              </p>
            </div>
          </div>
          <div className="more-info">
            <p className="more-info__title">
              Congratulations! Selected as a Winner Curator.
            </p>
            <p className="more-info__text">
              If the proposed curation amount is close to the sales amount, you
              will receive a higher reward.
            </p>
            <div>
              <p className="more-info__sub-title">Expected Curation Revenue</p>
              <div className="more-info__count">
                <Icons shape="data-small" />
                <p>
                  <span>1,500,000.00</span>
                  <span>BUSD</span>
                </p>
              </div>
              <div className="more-info__desc">
                <Icons
                  shape="exclama24"
                  width="24px"
                  height="24px"
                  color="#366DFC"
                />
                <p>
                  The three curators who evaluated the closest value were 5% of
                  the sales value of the work. Additional compensation will be
                  paid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="3" />
            <TextBox
              borderRed
              mainText="The work was put up for auction and the sale was stopped."
              subText="The bid works will be registered in the market when the owner re-registers for sale."
            />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
            <div className="artboard-status__notice">
              <Icons
                shape="exclama24"
                width="24px"
                height="24px"
                color="#366DFC"
              />
              <p>
                If the work is not registered in the market, it is necessary to
                prove the value of the work. The curation and DAO voting will
                need to be done again. And when curation proceeds, the
                registration fee for the work must be paid again.
              </p>
            </div>
          </div>
          <div className="more-info">
            <p className="more-info__title">
              Congratulations! Selected as a Winner Curator.
            </p>
            <p className="more-info__text">
              If the proposed curation amount is close to the sales amount, you
              will receive a higher reward.
            </p>
            <div>
              <p className="more-info__sub-title">Expected Curation Revenue</p>
              <div className="more-info__count">
                <Icons shape="data-small" />
                <p>
                  <span>1,500,000.00</span>
                  <span>BUSD</span>
                </p>
              </div>
              <div className="more-info__desc">
                <Icons
                  shape="exclama24"
                  width="24px"
                  height="24px"
                  color="#366DFC"
                />
                <p>
                  The three curators who evaluated the closest value were 5% of
                  the sales value of the work. Additional compensation will be
                  paid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="4" />
            <TextBox backgroundBlue mainText="The work has been sold." />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
          </div>
          <div className="sale-type">
            <div>
              <p className="sale-type__title">Sale Type</p>
              <p className="sale-type__text">Auction</p>
            </div>
            <div>
              <p>Amount Sold</p>
              <p className="sale-type__text">1,500,000.00</p>
              <p className="sale-type__count">USD</p>
            </div>
          </div>
          <div className="curator-info">
            <div className="curator-info__header">
              <p>Curator</p>
              <p>Curation High Price</p>
            </div>
            <div className="curator-info__content">
              <div className="curator-info__info">
                <span className="curator-info__numbering">1</span>
                <p>
                  Artdefinance Reality sub labs
                  <br />
                  galler Artdefinance
                </p>
              </div>
              <div className="curator-info__count">
                <p>1,500,000.00</p>
                <span>USD</span>
              </div>
            </div>
            <div className="curator-info__content">
              <div className="curator-info__info">
                <span className="curator-info__numbering">2</span>
                <p>
                  Artdefinance Reality sub labs
                  <br />
                  galler Artdefinance
                </p>
              </div>
              <div className="curator-info__count">
                <p>1,500,000.00</p>
                <span>USD</span>
              </div>
            </div>
            <div className="curator-info__content">
              <div className="curator-info__info">
                <span className="curator-info__numbering">2</span>
                <p>
                  Artdefinance Reality sub labs
                  <br />
                  galler Artdefinance
                </p>
              </div>
              <div className="curator-info__count">
                <p>1,500,000.00</p>
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="more-info more-info--noTitle">
            <div className="more-info__wrap">
              <div>
                <p className="more-info__sub-title">Expected Curation Revenue</p>
                <div className="more-info__count">
                  <p>
                    <span>1,500,000.00</span>
                    <span>BUSD</span>
                  </p>
                </div>
              </div>
              <div className="more-info__desc">
                <Icons
                  shape="exclama24"
                  width="24px"
                  height="24px"
                  color="#366DFC"
                />
                <p>
                  The three curators who evaluated the closest value were 5% of
                  the sales value of the work. Additional compensation will be
                  paid.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="artboard-status">
            <p className="artboard-status__main-title">Artwork Status</p>
            <Status step="4" />
            <TextBox backgroundBlue mainText="The work has been sold." />
            <div className="artboard-status__content">
              <p className="artboard-status__main-title">Winner Curator</p>
              <div className="artboard-status__wrap">
                <div className="artboard-status--top">
                  <p className="artboard-status__title">Curator</p>
                  <p className="artboard-status__sub-text">
                    Artdefinance Reality sub labs galler Art de finance
                  </p>
                  <p className="artboard-status__percent">78.56%</p>
                </div>
                <div className="artboard-status--bottom">
                  <div className="artboard-status__box">
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Curation Price
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                    <div className="artboard-status__info">
                      <p className="artboard-status__sub-title">
                        Expected Value
                      </p>
                      <p className="artboard-status__price">
                        <span>1,800,000.00</span>
                        <span>USD</span>
                      </p>
                    </div>
                  </div>
                  <p className="artboard-status__desc">
                    Expected Value after
                    <span>3</span>
                    years
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="button button--black button--default"
              content="All Result View"
              type="type1"
            />
          </div>
          <div className="sale-type">
            <div>
              <p className="sale-type__title">Sale Type</p>
              <p className="sale-type__text">Fixed Price</p>
            </div>
            <div>
              <p>Amount Sold</p>
              <p className="sale-type__text">1,800,000.00</p>
              <p className="sale-type__count">USD</p>
            </div>
          </div>
          <div className="curator-info">
            <div className="curator-info__header">
              <p>Curator</p>
              <p>Curation High Price</p>
            </div>
            <div className="curator-info__content">
              <div className="curator-info__info">
                <p>
                  Artdefinance Reality sub labs
                  <br />
                  galler Artdefinance
                </p>
              </div>
              <div className="curator-info__count">
                <p>1,500,000.00</p>
                <span>USD</span>
              </div>
            </div>
          </div>
          <div className="more-info more-info--noTitle">
            <div className="more-info__wrap">
              <div>
                <p className="more-info__sub-title">Expected Curation Revenue</p>
                <div className="more-info__count">
                  <p>
                    <span>1,500,000.00</span>
                    <span>BUSD</span>
                  </p>
                </div>
              </div>
              <div className="more-info__desc">
                <Icons
                  shape="exclama24"
                  width="24px"
                  height="24px"
                  color="#366DFC"
                />
                <p>
                  The three curators who evaluated the closest value were 5% of
                  the sales value of the work. Additional compensation will be
                  paid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
