/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';
import Button from '../Components/Button/Button';

export default class GalleryStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery__wrap">
          <div className="head">
            <p>
            Before starting the service
            <br />
            Please connect your wallet.
            </p>
            <div className="btn_wrap">
              <Button className="button button--black button--mid" content="Get Started" type="type1" />
            </div>
          </div>

          <div className="card-list item-center">
            <div className="items">
              <i>
                <span>1</span>
              </i>
              <p className="title">Don’t have a wallet yet?</p>
              <span className="desc">
              First, in the Chrome browser metamask extension? Please install it.
              </span>
            </div>
            <div className="items">
              <i>
                <span>2</span>
              </i>
              <p className="title">Please make a Wallet</p>
              <span className="desc">
              Metamask extension if installed
              <br />
              Please create a wallet.
              </span>
            </div>
            <div className="items">
              <i>
                <span>3</span>
              </i>
              <p className="title">Start the service</p>
              <span className="desc">
              By connecting the generated wallet address
              <br />
              You can start the service!
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
