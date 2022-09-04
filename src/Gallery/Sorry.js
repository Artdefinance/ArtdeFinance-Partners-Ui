/* eslint-disable react/prop-types */
import React from 'react';
import './Gallery.scss';
import Button from '../Components/Button/Button';

export default class GallerySorry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const backgroundStyle = {
      backgroundImage: 'url(/assets/images/page/gallery/sorry_bg.png)',
    };
    return (
      <div className="gallery gallery_sorry" style={backgroundStyle}>
        <div className="gallery__wrap">
          <div className="head">
            <p>
            I’m Sorry...
            <br />
            Although we thought about it for a long time,
            <br />
            we decided to work on this project with us.
            <br />
            Please note that we cannot be together.
            </p>
            <span>
            If you provide more information, please submit
            <br />
            so that we can review it again and create a good opportunity.
            I&apos;ll try my best. thank you
            </span>
            <div className="btn_wrap">
              <Button className="button button--black button--mid" content="Confirm" type="type1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
