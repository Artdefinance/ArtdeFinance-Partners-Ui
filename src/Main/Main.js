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
    };
  }

  render() {
    const { photoImage } = this.state;
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
                  <a href="#" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></a>
                  <p className="desc">NFT Minted</p>
                </div>
                <div className="status_items">
                  <Icons shape="dashboard" width="20px" height="20px" color="#BBBBBB" />
                  0
                  <a href="#" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></a>
                  <p className="desc">Curating</p>
                </div>
                <div className="status_items">
                  <Icons shape="heart" width="20px" height="20px" color="#BBBBBB" />
                  10
                  <a href="#" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></a>
                  <p className="desc">Curated</p>
                </div>
                <div className="status_items">
                  <Icons shape="hand" width="20px" height="20px" color="#BBBBBB" />
                  999
                  <a href="#" className="more"><Icons shape="arrow-link" width="20px" height="20px" /></a>
                  <p className="desc">Dao Voted</p>
                </div>
              </div>
            </div>
            <div className="current_bid board_item">
              <div className="item_inner">
                <div className="item_head">
                  <h2>Current Bid</h2>
                  <a href="#" className="btn_update">
                    Update
                    <Icons shape="refresh" width="24px" height="24px" />
                  </a>
                </div>
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
                        <span className="date">2022/04/04  03:23:51</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/*  */}
        <div className="dashboad_wide board_item">
          <div className="item_inner">
            <div className="item_head">
              <h2>Now Curating</h2>
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
            </div>
          </div>
          <div className="board_item">
            <div className="item_inner">
              <div className="item_head">
                <h2>Waiting for Sale</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
