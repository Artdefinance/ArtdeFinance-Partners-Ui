/* eslint-disable react/prop-types */
import './Activity.scss';
import Button from '../Components/Button/Button';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Icons from '../Components/Icons/Icons';
import Info from './Info';
import Side from './Side';
import Status from './Status';
import TextBox from './TextBox';

function AuctionStatus() {
  return (
    <div className="activity">
      <div className="activity__wrap activity__wrap--long">
        <div className="activity-list">
          <div className="activity-item--left">
            <BreadCrumbs
              content1="Works Activity"
              content2="Works Activity list"
            />
            <Side />
            <Info />
          </div>
          <div className="activity-item--right activity-item--status">
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
        </div>
      </div>
    </div>
  );
}

export default AuctionStatus;
