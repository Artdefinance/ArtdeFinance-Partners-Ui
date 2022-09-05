/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.scss';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: true, // false 일경우 nodata 화면
    };
  }

  render() {
    const { isData } = this.state;
    const ExampleContent1 = [
      {
        id: '1',
        title: 'Sort by ending soon',
      },
      {
        id: '2',
        title: 'Sort by recently active',
      },
      {
        id: '3',
        title: 'Sort by newest',
      },
      {
        id: '4',
        title: 'Sort by oldest',
      },
    ];
    const ExampleData = [
      {
        id: '1',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'Auction',
        price: '1,500,000 USD',
        priceToBUSD: '= 1,500,000 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'For Sale',
      },
      {
        id: '2',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'List Price',
        price: '1,500,000 ~ 9,999,999 USD',
        priceToBUSD: '= 1,500,000 ~ 9,99,999 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'Sold Out',
      },
      {
        id: '3',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'List Price',
        price: '1,500,000 ~ 9,999,999 USD',
        priceToBUSD: '= 1,500,000 ~ 9,99,999 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'Sold Out',
      },
      {
        id: '4',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'Auction',
        price: '1,500,000 USD',
        priceToBUSD: '= 1,500,000 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'For Sale',
      },
      {
        id: '5',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'List Price',
        price: '1,500,000 ~ 9,999,999 USD',
        priceToBUSD: '= 1,500,000 ~ 9,99,999 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'Sold Out',
      },
      {
        id: '6',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'Auction',
        price: '1,500,000 USD',
        priceToBUSD: '= 1,500,000 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'For Sale',
      },
      {
        id: '7',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
        type: 'Auction',
        price: '1,500,000 USD',
        priceToBUSD: '= 1,500,000 BUSD',
        duration: '180d 17h 38m 52s',
        status: 'For Sale',
      },
    ];
    return (
      <div className="activity">
        <div className="activity__wrap">
          <h2>Works Activity</h2>
          <div className="filter">
            <div className="filter-header">
              <div className="filter-header__inputs">
                <label htmlFor="filter-radio1">
                  <input type="radio" id="filter-radio1" name="filter-radio" />
                  <span />
                  All
                </label>
                <label htmlFor="filter-radio2">
                  <input type="radio" id="filter-radio2" name="filter-radio" />
                  <span />
                  For Sale
                </label>
                <label htmlFor="filter-radio3">
                  <input type="radio" id="filter-radio3" name="filter-radio" />
                  <span />
                  Sold Out
                </label>
              </div>
              <div className="filter-header__drop">
                <Dropdown
                  dropWidth="215px"
                  dropHeight="60px"
                  dropTitle="Sort by"
                  content={ExampleContent1}
                  dropFontSize="16px"
                  dropFontColor="#000000"
                />
                <p>10,000 Results</p>
              </div>
            </div>
            <div className="filter-content">
              <ul className="filter-content__type">
                <li>Artworks</li>
                <li>Sale Type</li>
                <li>Price</li>
                <li>Duration</li>
                <li>Status</li>
              </ul>
            </div>
            {isData ? (
              <div className="filter-content__wrap">
                <ul className="filter-content__list">
                  {ExampleData.map((items) => (
                    <li key={items.id}>
                      <Link to="/">
                        <div className="art">
                          <div className="art__wrap">
                            <span
                              style={{ backgroundImage: `url(${items.bg})` }}
                              className="art__bg"
                            />
                            <div className="art__box">
                              <p className="art__title">{items.title}</p>
                              <p className="art__desc">{items.desc}</p>
                            </div>
                          </div>
                          <div>
                            <p
                              className={
                                items.type === 'Auction'
                                  ? 'art__type art__type--color'
                                  : 'art__type art__type--default'
                              }
                            >
                              {items.type}
                            </p>
                          </div>
                          <div>
                            <div>
                              <p className="art__price">{items.price}</p>
                              <p className="art__price--busd">
                                {items.priceToBUSD}
                              </p>
                            </div>
                          </div>
                          <div>
                            <Icons shape="clock" width="20px" height="20px" />
                            <p className="art__clock">{items.duration}</p>
                          </div>
                          <div>
                            <p
                              className={
                                items.status === 'For Sale'
                                  ? 'art__status art__status--color'
                                  : 'art__status art__status--default'
                              }
                            >
                              {items.status}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Pagenation />
              </div>
            ) : (
              <div className="filter-content">
                <div className="nodata">
                  <span className="nodata__img" />
                  <p>No artworks found for this search</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
