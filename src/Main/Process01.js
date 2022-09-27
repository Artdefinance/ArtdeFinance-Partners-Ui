/* eslint-disable react/prop-types */
import React from 'react';
import './Process.scss';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import ProcessStatus from './ProcessStatus';
import SummaryTab from './SummaryTab';

function Process01() {
  return (
    <div className="main-process">
      <div className="main-process__wrap">
        <BreadCrumbs
          content1="Artworks"
          content2="NFT Minted"
          content3="Congregation Leaving the Reformed Church in Nuenen"
        />
        <div className="main-process__box">
          <div className="main-process--first">
            <About />
            <div className="main-side">
              <div className="main-side__result">
                <p className="main-side__result-title">Suggested Price</p>
                <div className="main-side__box">
                  <p>1,500,000.00</p>
                  <span>USD</span>
                </div>
                <div className="main-side__box">
                  <p>1,500,000.00</p>
                  <span>BUSD</span>
                </div>
              </div>
            </div>
            <SummaryTab />
          </div>
          <div className="main-process--second">
            <div className="main-step">
              <p className="main-step__main-title">Curation Process</p>
              <ProcessStatus step="1" />
              <ul>
                <li>
                  NFT Minted
                  <span>4/13/2022 16:32</span>
                </li>
                <li>Curating</li>
                <li>Curated</li>
                <li>Dao Voting</li>
                <li>Dao Voted</li>
              </ul>
            </div>
            <div className="main-description">
              <div>
                <p className="main-description__title">
                  Your artwork’s NFT has been minted.
                </p>
                <p className="main-description__text">
                  The artwork&apos;s information and certificate of authenticity
                  are securely stored in the blockchain.
                  <br />
                  Curate the value of your work with an expert right now.
                </p>
                <Button
                  className="button button--black button--mid"
                  content="Curating Setting"
                  type="type1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process01;
