/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Artist.scss';
import ArtistList from './ArtistList';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';

function View() {
  return (
    <div className="artist">
      <div className="artist__wrap">
        <ArtistList data="true" />
        <div className="side-view">
          <div className="side-view__header">
            <Link to="../artist/list">
              <Icons shape="arrow-left" width="24px" height="24px" />
            </Link>
            <p>Artist Registration</p>
          </div>
          <div className="side-view__content">
            <div className="side-view__content-wrap">
              <img
                src="/assets/images/page/artist/img_profile_view.png"
                alt="프로필 이미지"
              />
              <div>
                <p className="side-view__title">
                  Vincent van Gogh, 1955Vincent vanVincent van Gogh
                </p>
                <p className="side-view__year">1999 - 2012</p>
              </div>
            </div>
            <div className="side-view__content-box">
              <p className="side-view__type">Country</p>
              <p className="side-view__description-country">
                United States of America
              </p>
              <p className="side-view__type">Biography</p>
              <div className="side-view__description">
                <p>
                  Born in 1979, Jisan Ahn studied plastic art at Korea National
                  University of Arts and has a degree with paintings at Frank
                  Mohr International in the Netherlands. . He debuted in the
                  Netherlands first while he was staying in Rijks akademie
                  residency for 2 years from 2013. European Art Scene started
                  paying attention to him after his solo exhibition at Galerie
                  Bart/Amsterdam (2014, 2015). He has participated major group
                  exhibition such as Arko Art Center/Seoul (2016), Gallery
                  SKAPE/Seoul (2015), Arti ET Amicitiae/Amsterdam (2014) and got
                  Buning Brongers Prize in 2014. Born in 1979, Jisan Ahn studied
                  plastic art at Korea National University of Arts and has a
                  degree with paintings at Frank Mohr International in the
                  Netherlands. . He debuted in the Netherlands first while he
                  was staying in Rijks akademie residency for 2 years from 2013.
                  European Art Scene started paying attention to him after his
                  solo exhibition at Galerie Bart/Amsterdam (2014, 2015). He has
                  participated major group exhibition such as Arko Art
                  Center/Seoul (2016), Gallery SKAPE/Seoul (2015), Arti ET
                  Amicitiae/Amsterdam (2014) and got Buning Brongers Prize in
                  2014.
                </p>
                <button type="button" className="side-view__more">See more</button>
              </div>
              <div className="side-view__download">
                <p className="side-view__type">Artist CV</p>
                <button type="button" className="side-view__download-button">
                  Artist CV Detail View
                  <span>
                    <Icons shape="download" />
                  </span>
                </button>
              </div>
            </div>
            <Link to="/artist/regist">
              <Button
                className="button button--black button--mid"
                content="Update"
                type="type1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
