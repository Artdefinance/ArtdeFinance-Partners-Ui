/* eslint-disable react/prop-types */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Gallery.scss';
import Button from '../Components/Button/Button';
import Icons from '../Components/Icons/Icons';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    function notiBrowser() {
      toast(
        <div className="toastify__custom">
          <Icons shape="exclama_fill" color="#ffffff" />
          For a more stable service, please use it by accessing the Chrome browser.
        </div>,
      );
    }
    return (
      <div className="gallery">
        <div className="gallery__wrap">
          <div className="head">
            <p>
              We are creating the value of works of art
              <br />
              together with art experts.
            </p>
            <span>Are you ready to join us?</span>
          </div>

          <div className="card-list">
            <div className="items">
              <i>
                <img src="/assets/images/icons/ico_create.svg" alt="create icon" />
              </i>
              <p className="title">Create</p>
              <span className="desc">
              Register the artist&apos;s work of art
              Certificate of Authenticity is Safe
              Keep it as NFT.
              and what you think Please tell me the minimum value.
              </span>
              <span className="desc">
              for fair valuation Curation and popular vote It goes on.
              </span>
            </div>
            <div className="items">
              <i>
                <img src="/assets/images/icons/ico_curation.svg" alt="curation icon" />
              </i>
              <p className="title">Curation</p>
              <span className="desc">
              Each art expert is an artist&apos;s
              View activity history and work
              opinions on value can present.
              </span>
              <span className="desc">
              and you are the creator
              may be, and other works
              as a curator can be active.
              </span>
            </div>
            <div className="items">
              <i>
                <img src="/assets/images/icons/ico_connect.svg" alt="connect icon" />
              </i>
              <p className="title">Connect</p>
              <span className="desc">
              After curation by each art expert
              People who are interested in works of art
              by their fair vote
              final curation result
              is selected. Voting is for the general public only.
              Participation is possible.
              </span>
            </div>
            <div className="items">
              <i>
                <img src="/assets/images/icons/ico_collect.svg" alt="collect icon" />
              </i>
              <p className="title">Collect</p>
              <span className="desc">
              Now the whole journey is over.
              your work in the market
              will be sold. Pre-sale auction or full price sale, etc.
              You can decide how to sell.
              </span>
              <span className="desc">
              Get started right now.
              </span>
            </div>
          </div>
          <div className="btn_wrap">
            <ToastContainer
              position="bottom-center"
              autoClose={false}
              closeOnClick
              rtl={false}
            />
            <button type="button" onClick={() => notiBrowser()} className="button button--black button--mid">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}
