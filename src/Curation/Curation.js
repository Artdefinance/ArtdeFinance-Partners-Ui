import React from 'react';
import { Link } from 'react-router-dom';
import './Curation.scss';
import Checkbox from '../Components/Inputs/Checkbox';
import Dropdown from '../Components/Dropdown/Dropdown';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class Curation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: true, // 데이터 여부 false 시 데이터 없음 화면 전환
      categoryActive1: true,
      categoryActive2: false,
      categoryActive3: false,
      isToggleOn: false,
      isToggleOn2: true,
      isToggleOn3: true,
    };
    this.categoryClick = this.categoryClick.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  categoryClick(e) {
    this.setState((prevState) => ({
      categoryActive1: false,
      categoryActive2: false,
      categoryActive3: false,
      [e.target.value]: false,
      [e.target.value]: !prevState[e.target],
    }));
  }

  clickHandler(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  render() {
    const {
      data,
      categoryActive1,
      categoryActive2,
      categoryActive3,
      isToggleOn,
      isToggleOn2,
      isToggleOn3,
    } = this.state;
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
      },
      {
        id: '2',
        bg: '',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '3',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '4',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '5',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '6',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '7',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '8',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '9',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '10',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '11',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
      {
        id: '12',
        bg: '/assets/images/page/activity/img_square_dummy.png',
        title: 'Vincent van GoghVincent van Gogh Vincent',
        desc: 'Starry Night Over the RhonefOver the rho nef dafsd ober aldedfdaq...2011',
      },
    ];
    return (
      <div>
        <div className="curation">
          <div className="curation__wrap">
            <h2>Curation</h2>
            <div className="curation__filter">
              <div className="tab-category">
                <button
                  type="button"
                  onClick={this.categoryClick}
                  className={
                    categoryActive1
                      ? 'tab-category__button tab-category__button--active'
                      : 'tab-category__button'
                  }
                  value="categoryActive1"
                >
                  Now Curating
                </button>
                <button
                  type="button"
                  onClick={this.categoryClick}
                  className={
                    categoryActive2
                      ? 'tab-category__button tab-category__button--active'
                      : 'tab-category__button'
                  }
                  value="categoryActive2"
                >
                  Curation Result
                </button>
                <button
                  type="button"
                  onClick={this.categoryClick}
                  className={
                    categoryActive3
                      ? 'tab-category__button tab-category__button--active'
                      : 'tab-category__button'
                  }
                  value="categoryActive3"
                >
                  Curation History
                </button>
              </div>
              <div className="curation-filter">
                <div className="curation-filter__wrap">
                  <button
                    type="button"
                    onClick={this.clickHandler}
                    className={
                      isToggleOn
                        ? 'curation-filter__header curation-filter__header--acitve'
                        : 'curation-filter__header'
                    }
                    value="isToggleOn"
                  >
                    Filter &middot; 3
                  </button>
                  {isToggleOn ? (
                    <div className="curation-filter__content">
                      <div className="curation-filter__item">
                        <button
                          type="button"
                          onClick={this.clickHandler}
                          className={
                            isToggleOn2
                              ? 'curation-filter__content-title curation-filter__content-title--active'
                              : 'curation-filter__content-title'
                          }
                          value="isToggleOn2"
                        >
                          Artist Owner
                        </button>
                        {isToggleOn2 ? (
                          <div className="curation-filter__checkbox">
                            <Checkbox chkId="sale1" content="For Sale (10)" />
                            <Checkbox chkId="sale2" content="For Sale (10)" />
                            <Checkbox chkId="sale3" content="For Sale (10)" />
                            <Checkbox chkId="sale4" content="For Sale (10)" />
                            <Checkbox chkId="sale5" content="For Sale (10)" />
                            <Checkbox chkId="sale6" content="For Sale (10)" />
                            <button type="button">See more</button>
                          </div>
                        ) : null}
                      </div>
                      <div className="curation-filter__item">
                        <button
                          type="button"
                          onClick={this.clickHandler}
                          className={
                            isToggleOn3
                              ? 'curation-filter__content-title curation-filter__content-title--active'
                              : 'curation-filter__content-title'
                          }
                          value="isToggleOn3"
                        >
                          Artist
                        </button>
                        {isToggleOn3 ? (
                          <div className="curation-filter__checkbox">
                            <Checkbox chkId="artist1" content="For Sale (10)" />
                            <Checkbox chkId="artist2" content="For Sale (10)" />
                            <Checkbox
                              chkId="artist3"
                              content="For Sale (10)"
                              disabled="true"
                            />
                            <Checkbox chkId="artist4" content="For Sale (10)" />
                            <Checkbox chkId="artist5" content="For Sale (10)" />
                            <Checkbox chkId="artist6" content="For Sale (10)" />
                            <button type="button">See more</button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="curation-filter__dropdown">
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
            </div>
            {
              data === true
              ? (
                <>
                  <div className={isToggleOn ? 'curation-list curation-list--active' : 'curation-list' }>
                    {ExampleData.map((items) => (
                      <Link to="/" className="curation-list__item" key={items.id}>
                        <span className="curation-list__img">
                          <span style={{ backgroundImage: `url(${items.bg})` }} />
                        </span>
                        <div className="curation-list__content">
                          <p className="curation-list__title">{items.title}</p>
                          <p className="curation-list__desc">{items.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Pagenation />
                </>
              ) : (
                <div className="filter-content">
                  <div className="nodata">
                    <span className="nodata__img" />
                    <p>No artworks found for this search</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
