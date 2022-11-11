/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Main.scss';
import './SlickSwiper.scss';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoImage: '/assets/images/page/artist/img_profile_view.png',
      nodataBid: '/assets/images/common/nodata_bid.png',
      nodataCurating: '/assets/images/common/nodata_curating.png',
      nodataContent: '/assets/images/common/nodata_content.png',
      curationImg0: 'https://www.corradi.eu/getattachment/d381ade5-acf8-45ae-8ddd-36a616efb8b3/image001-3-.jpg',
      curationImg1: 'https://www.worldhistory.org/img/r/p/500x600/15460.png',
    };
  }

  render() {
    const {
      photoImage, nodataBid, nodataCurating,
      nodataContent, curationImg0, curationImg1,
    } = this.state;
    const curatedSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="main">
        <div className="dashboard_top">
          <div className="personal_area board_item">
            <Link to="/" className="btn__setting">
              <Icons shape="setting" />
            </Link>
            <div className="item_inner">
              <div className="info">
                <p className="photo">
                  <img src={photoImage} alt="프로필 이미지" />
                </p>
                <div className="name">
                  <p>Art de finance gallery labs</p>
                  <span>ArtGallery@ArtdeFinance.io</span>
                </div>
              </div>
              <ul className="count">
                <li className="item">
                  <p>
                    <Icons shape="panorama" viewBox=" 0 0 18.33 13.33" />
                    Artworks
                  </p>
                  <strong>0</strong>
                </li>
                <li className="item">
                  <p>
                  <Icons shape="account" width="20px" height="20px" color="#BBBBBB" viewBox=" 0 0 20 20" />
                  Artist
                  </p>
                  <strong>0</strong>
                </li>
              </ul>
              <div className="btnwrap">
                <Button className="button button--black button--mid" content="Artist Registration" />
                <Button className="button button--black-line button--mid" content="Artwork Registration" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="personal_status">
            <div className="status_count board_item">
              <div className="item_inner">
                <div className="status_items">
                  <Icons shape="data" width="20px" height="20px" viewBox="0 0 20 20" />
                  1,234
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">NFT Minted</p>
                </div>
                <div className="status_items">
                  <Icons shape="dashboard" width="20px" height="20px" viewBox="0 0 20 20" color="#BBBBBB" />
                  0
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">Curating</p>
                </div>
                <div className="status_items">
                  <Icons shape="heart" width="20px" height="20px" viewBox="0 0 20 20" color="#BBBBBB" />
                  10
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">Curated</p>
                </div>
                <div className="status_items">
                  <Icons shape="hand" width="20px" height="20px" viewBox="0 0 20 20" color="#BBBBBB" />
                  999
                  <p className="desc">Dao Voted</p>
                </div>
              </div>
            </div>
            <div className="current_bid board_item">
              <div className="item_inner">
                <div className="item_head">
                  <h2>Current Bid</h2>
                  <button type="button" className="btn_head">
                    Update
                    <Icons shape="refresh" width="24px" height="24px" />
                  </button>
                </div>
                {/* nodata */}
                <div className="nodata displaynone">
                  <img src={nodataBid} alt="nodata" className="nodata-img" />
                  <div className="nodata-desc">
                    <p>
                      As of yet, there are no works that are being auctioned off
                      or there are no new auction proposals.
                    </p>
                    <span>
                      When the value of a work is determined through
                      curation and DAO
                      <br />
                      You can register on the market by selecting
                      the type of sale between auction and full price sale.
                    </span>
                  </div>
                </div>
                {/*  */}
                <ul className="bid_list">
                  <li>
                    <Link to="/" className="items">
                      <p className="artist_nm">Vincent van Gogh Vinsas Bisdoale sdaa Bisdoale sdaa</p>
                      <p className="work_nm">Two Paintings (from the Paintings series) Spr (from the Paintings series) Spr</p>
                      <p className="wallet_nm">0x495f...7b5e</p>
                      <div className="price">
                        <p>
                          1,500,000.00
                          <span className="unit">USD</span>
                        </p>
                        <span className="date">2022/04/04  03:23:51</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="items">
                      <p className="artist_nm">Vincent van Gogh Vinsas Bisdoale sdaa Bisdoale sdaa</p>
                      <p className="work_nm">Two Paintings (from the Paintings series) Spr (from the Paintings series) Spr</p>
                      <p className="wallet_nm">0x495f...7b5e</p>
                      <div className="price">
                        <p>
                          1,500,000.00
                          <span className="unit">USD</span>
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <hr />
        {/*  */}
        <div className="dashboad_wide dashboad_curating board_item">
          <div className="item_inner">
            <div className="item_head">
              <h2>Now Curating</h2>
              <span className="item_tag">Live</span>
              <button type="button" className="btn_head btn_head_arrow">
                View All
              </button>
            </div>
            {/* nodata */}
            <div className="nodata displaynone">
              <img src={nodataCurating} alt="nodata" className="nodata-img" />
              <p>Currently in progress, There is no curation.</p>
            </div>
            <div className="curation_content">
              <div className="curation_total">
                <p>Total</p>
                <strong>6</strong>
              </div>
              <ul className="curation_list">
                <li className="curation_items">
                  <Link to="/">
                    <p className="curation_time-tag">
                      <Icons shape="clock" width="20px" height="20px" viewBox="0 0 20 20" />
                      <span>180d</span>
                      <span>17h</span>
                      <span>38m</span>
                      <span>52s</span>
                    </p>
                    <p className="figure"><img src={curationImg0} alt="curatingimg" /></p>
                    <div className="desc">
                      <p>Vincent van GoghVincent van Gogh Vincent van Gogh</p>
                      <span>Starry Night Over the RhonefOver the Rhonef, 2011</span>
                    </div>
                  </Link>
                </li>
                <li className="curation_items">
                  <Link to="/">
                    <p className="figure"><img src={curationImg1} alt="curatingimg" /></p>
                    <div className="desc">
                      <p>Vincent van GoghVincent van Gogh Vincent van Gogh</p>
                      <span>Starry Night Over the RhonefOver the Rhonef, 2011</span>
                    </div>
                  </Link>
                </li>
                <li className="curation_items">
                  <Link to="/">
                    <p className="curation_time-tag">
                      <Icons shape="clock" width="20px" height="20px" viewBox="0 0 20 20" />
                      <span>180d</span>
                      <span>17h</span>
                      <span>38m</span>
                      <span>52s</span>
                    </p>
                    <p className="figure"><img src={curationImg0} alt="curatingimg" /></p>
                    <div className="desc">
                      <p>Vincent van GoghVincent van Gogh Vincent van Gogh</p>
                      <span>Starry Night Over the RhonefOver the Rhonef, 2011</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="dashboad_half">
          <div className="board_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Curated Results</h2>
              </div>
              {/* nodata */}
              <div className="nodata-content displaynone">
                <img src={nodataContent} alt="nodata" className="nodata-img" />
                <p>
                There are currently no curated works.
                <br />
                Start curation now by minting your work.
                </p>
              </div>
              <Slider
                {...curatedSettings}
              >
                <div className="slide-item">
                  <div className="work_info">
                    <div className="figure" style={{ backgroundImage: `url(${curationImg0})` }} />
                    <div className="info">
                      <p className="name">Vincent van Gogh, 1955Vincent van</p>
                      <p className="desc">Congregation Leaving the Reformed Church in Nuenen, 2011</p>
                      <p className="number">Edition #2345</p>
                    </div>
                  </div>
                  <div className="price_info">
                    <p className="title">Curation Price</p>
                    <div className="price_box">
                      <div className="currency">
                        <Icons shape="data" width="20px" height="20px" />
                        1,500,000.00
                        <span className="unit">USD</span>
                      </div>
                      <div className="crypto">
                        <Icons shape="busd20" width="20px" height="20px" />
                        1,500,000.00
                        <span className="unit">BUSD</span>
                      </div>
                    </div>
                  </div>
                  <div className="price_info info-half">
                    <div>
                      <p className="title">Curation High Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                        <div className="crypto">
                          1,500,000.00
                          <span className="unit">BUSD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="title">Curation Low Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                        <div className="crypto">
                          1,500,000.00
                          <span className="unit">BUSD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-item">
                  <div className="work_info">
                    <div className="figure" style={{ backgroundImage: `url(${curationImg0})` }} />
                    <div className="info">
                      <p className="name">Vincent van Gogh, 1955Vincent van</p>
                      <p className="desc">Congregation Leaving the Reformed Church in Nuenen, 2011</p>
                      <p className="number">Edition #2345</p>
                    </div>
                  </div>
                  <div className="price_info">
                    <p className="title">Curation Price</p>
                    <div className="price_box">
                      <div className="currency">
                        <Icons shape="data" width="20px" height="20px" />
                        1,500,000.00
                        <span className="unit">USD</span>
                      </div>
                      <div className="crypto">
                        <Icons shape="busd20" width="20px" height="20px" />
                        1,500,000.00
                        <span className="unit">BUSD</span>
                      </div>
                    </div>
                  </div>
                  <div className="price_info info-half">
                    <div>
                      <p className="title">Curation High Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                        <div className="crypto">
                          1,500,000.00
                          <span className="unit">BUSD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="title">Curation Low Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                        <div className="crypto">
                          1,500,000.00
                          <span className="unit">BUSD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="board_item sale_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Waiting for Sale</h2>
              </div>
              {/* nodata */}
              <div className="nodata-content displaynone">
                <img src={nodataContent} alt="nodata" className="nodata-img" />
                <p>
                There are no works waiting for sale yet.
                <br />
                When the curation and DAO are completed, the
                <br />
                form of the  work is decided and Register on the market.
                </p>
              </div>
              <Slider
                {...curatedSettings}
              >
                <div className="slide-item">
                  <div className="work_info">
                    <div className="figure" style={{ backgroundImage: `url(${curationImg0})` }} />
                    <div className="info">
                      <p className="name">Vincent van Gogh, 1955Vincent van</p>
                      <p className="desc">Congregation Leaving the Reformed Church in Nuenen, 2011</p>
                      <p className="number">Edition #2345</p>
                    </div>
                  </div>
                  <div className="price_info info-half">
                    <div>
                      <p className="title">Curation High Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="title">Curation Low Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price_info price_info--dao">
                    <div className="price_box">
                      <p>DAO</p>
                      <div className="currency">
                        3,567,878,654
                        <span className="unit">Voted</span>
                      </div>
                    </div>
                  </div>
                  <div className="btnwrap">
                    <Button className="button button--black button--mid" content="Artist Registration" type="type1" />
                  </div>
                </div>
                <div className="slide-item">
                  <div className="work_info">
                    <div className="figure" style={{ backgroundImage: `url(${curationImg0})` }} />
                    <div className="info">
                      <p className="name">Vincent van Gogh, 1955Vincent van</p>
                      <p className="desc">Congregation Leaving the Reformed Church in Nuenen, 2011</p>
                      <p className="number">Edition #2345</p>
                    </div>
                  </div>
                  <div className="price_info info-half">
                    <div>
                      <p className="title">Curation High Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="title">Curation Low Price</p>
                      <div className="price_box">
                        <div className="currency">
                          1,500,000.00
                          <span className="unit">USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price_info price_info--dao">
                    <div className="price_box">
                      <p>DAO</p>
                      <div className="currency">
                        3,567,878,654
                        <span className="unit">Voted</span>
                      </div>
                    </div>
                  </div>
                  <div className="btnwrap">
                    <Button className="button button--black button--mid" content="Artist Registration" type="type1" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
