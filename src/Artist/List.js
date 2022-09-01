/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Artist.scss';
import ArtistList from './ArtistList';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';

function List() {
  return (
    <div className="artist">
      <div className="artist__wrap">
        <ArtistList data="true" />
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

export default List;
