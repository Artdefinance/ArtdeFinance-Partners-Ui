/* eslint-disable react/prop-types */
import React from 'react';
import './Gallery.scss';
import Button from '../Components/Button/Button';

export default class GalleryRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery__wrap regist_wrap">
          <div className="head">
            <p>
              Partner Registration
            </p>
            <span>
            We have a few questions to share with you as partners. This step doesn&apos;t take long.
            <br />
            Just think of it as a process for establishing a stable partnership.
            </span>
          </div>
          <div className="regust__form">
            <div className="form__head">
              <span>Requisite (0/7)</span>
              <p>Partners Details</p>
            </div>
            <div className="form__body">
            form__body
            </div>
          </div>
          <div className="form__fixed">
            <Button className="button button--black button--mid" content="Comfirm" type="type1" />
          </div>
        </div>
      </div>
    );
  }
}
