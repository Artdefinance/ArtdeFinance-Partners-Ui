/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
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
                  <Icons shape="panorama" width="20px" height="20px" color="#BBBBBB" />
                  Artworks
                  </p>
                  <strong>0</strong>
                </li>
                <li className="item">
                  <p>
                  <Icons shape="account" width="20px" height="20px" color="#BBBBBB" />
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
                  <Icons shape="data" width="20px" height="20px" />
                  1,234
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">NFT Minted</p>
                </div>
                <div className="status_items">
                  <Icons shape="dashboard" width="20px" height="20px" color="#BBBBBB" />
                  0
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">Curating</p>
                </div>
                <div className="status_items">
                  <Icons shape="heart" width="20px" height="20px" color="#BBBBBB" />
                  10
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
                  <p className="desc">Curated</p>
                </div>
                <div className="status_items">
                  <Icons shape="hand" width="20px" height="20px" color="#BBBBBB" />
                  999
                  <button type="button" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></button>
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
              <button type="button" className="btn_head">
                View All
                <Icons shape="refresh" width="24px" height="24px" />
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
                      <Icons shape="clock" width="20px" height="20px" />
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
                      <Icons shape="clock" width="20px" height="20px" />
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
              <div className="nodata-content">
                <img src={nodataContent} alt="nodata" className="nodata-img" />
                <p>
                There are currently no curated works.
                <br />
                Start curation now by minting your work.
                </p>
              </div>
            </div>
          </div>
          <div className="board_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Waiting for Sale</h2>
              </div>
              {/* nodata */}
              <div className="nodata-content">
                <img src={nodataContent} alt="nodata" className="nodata-img" />
                <p>
                There are no works waiting for sale yet.
                <br />
                When the curation and DAO are completed, the
                <br />
                form of the  work is decided and Register on the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
