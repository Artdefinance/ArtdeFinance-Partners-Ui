import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Button from '../Components/Button/Button';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';
import Pagenation from '../Components/Pagenation/Pagenation';

export default class List extends React.Component {
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Artworks</h2>
              <div style={{ marginTop: '-20px' }}>
                <Button className="button button--black button--mid" content="Registration of Works" type="type1" />
              </div>
            </div>
            <div className="curation__filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            {
              data === true
              ? (
                <>
                  <div className={isToggleOn ? 'curation-list curation-list--active' : 'curation-list'}>
                    {ExampleData.map((items) => (
                      <Link to="/" className="curation-list__item" key={items.id}>
                        <p className="curation_time-tag">
                          <Icons shape="clock" width="20px" height="20px" />
                          <span>180d</span>
                          <span>17h</span>
                          <span>38m</span>
                          <span>52s</span>
                        </p>
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
