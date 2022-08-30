/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.scss';
import Button from '../Components/Button/Button';
import Dropdown from '../Components/Dropdown/Dropdown';
import Icons from '../Components/Icons/Icons';

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistCount: 0,
    };
  }

  render() {
    const { artistCount } = this.state;
    const Content1 = [
      {
        id: '1',
        title: 'Sort by recently active',
      },
      {
        id: '2',
        title: 'Sort by artist name',
      },
    ];
    const nodataStyle = {
      backgroundImage: 'url(/assets/images/page/artist/img_no_data.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className="artist">
        <div className="artist__wrap">
          <div className="side-list">
            <div className="side-list__header">
              <div className="side-list__info">
                <div className="side-list__wrap">
                  <span className="side-list__icon">
                    <Icons shape="account" width="20px" height="20px" color="#BBBBBB" />
                  </span>
                  <p className="side-list__type">Artist</p>
                  <p className="side-list__count">{ artistCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</p>
                </div>
                <Dropdown dropWidth="216px" dropHeight="60px" dropTitle="Sort by" content={Content1} dropFontSize="16px" />
              </div>
            </div>
            <div className="side-list__content">
              <div className="side-list__titles">
                <ul>
                  <li>Artist</li>
                  <li>Birth</li>
                  <li>Update date</li>
                </ul>
              </div>
              <div className="side-list__no-data">
                <i className="side-list__img" style={nodataStyle}><span className="a11y">데이터 없을때 이미지</span></i>
                <p>
                  There is no registered artist information.
                  {'\n'}
                  Register an artist first and start curating your work.
                </p>
              </div>
            </div>
          </div>
          <div className="side-info">
            <div className="side-info__header">
              <p>Artist Registration</p>
            </div>
            <div className="side-info__content">
              <p className="side-info__description">
                Before registering a work, please register your affiliated artist first.
                {'\n'}
                {'\n'}
                After initial registration, the artist&apos;s exhibition history or work activities
                {'\n'}
                They can be updated at any time as they are added.
                {'\n'}
                {'\n'}
                However, the registered artist cannot be deleted.
                {'\n'}
                Please review carefully before registering.
              </p>
              <div className="side-info__notice">
                <span className="side-info__img">
                  <Icons shape="exclama_fill" color="#366DFC" />
                </span>
                <p>
                  Please prepare a free-form PDF file in advance of the CV containing the
                  {'\n'}
                  artist&apos;s exhibition experience or work activities.
                </p>
              </div>
              <Link to="/artist/regist">
                <Button className="button button--black button--mid" content="Arttist Registration" type="type1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
