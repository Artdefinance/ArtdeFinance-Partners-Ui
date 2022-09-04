/* eslint-disable react/prop-types */
import React from 'react';
import './Gallery.scss';
import Button from '../Components/Button/Button';

export default class GalleryConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const backgroundStyle = {
      backgroundImage: 'url(/assets/images/page/gallery/confirm_bg.png)',
    };
    return (
      <div className="gallery gallery_confirm" style={backgroundStyle}>
        <div className="gallery__wrap">
          <div className="head">
            <p>
            Thank you!
            <br />
            Please allow time to review and confirm to partner with you.
            </p>
            <span>
            Once confirmed, you can register and curate
            <br />
            various works of art service will be provided.
            </span>
            <div className="btn_wrap">
              <Button className="button button--mid" content="Confirm" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
