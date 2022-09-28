/* eslint-disable react/prop-types */
import './Process.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import ProcessStatus from './ProcessStatus';
import SummaryTab from './SummaryTab';
import ProcessAnimation from './ProcessAnimation';

function Process03() {
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
            <SummaryTab />
          </div>
          <div className="main-process--second">
            <div>
              <div className="main-step">
                <p className="main-step__main-title">Curation Process</p>
                <ProcessStatus step="2" />
                <ul>
                  <li>
                    NFT Minted
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>
                    Curating
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>Curated</li>
                  <li>Dao Voting</li>
                  <li>Dao Voted</li>
                </ul>
              </div>
              <div className="main-description">
                <div>
                  <ProcessAnimation values={[0, 20]} length="2">
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          rotation: 0.5 - (1 - percentage / 100) / 5,
                        })}
                      />
                    )}
                  </ProcessAnimation>
                  <p className="main-description__title">
                    The Curation for the work is now in progress
                  </p>
                  <p className="main-description__text">
                    Each expert participates in curating the registered works.
                    <br />
                    Everyone is careful and working hard to make the right value
                    judgment, so please be patient.
                  </p>
                  <Button
                    className="button button--black button--mid"
                    content="Sell in Marketplace"
                    type="type1"
                    disabled="true"
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>
              <div className="main-step">
                <p className="main-step__main-title">Curation Process</p>
                <ProcessStatus step="3" />
                <ul>
                  <li>
                    NFT Minted
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>
                    Curating
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>
                    Curated
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>Dao Voting</li>
                  <li>Dao Voted</li>
                </ul>
              </div>
              <div
                className="main-description"
                style={{ border: '1px solid #FF3B30' }}
              >
                <div className="main-description__alert">
                  <img
                    src="/assets/images/page/main/icon_warning.png"
                    alt="경고 아이콘"
                  />
                  <p>
                    <span>01 Curators</span>
                    Participated in this work
                  </p>
                </div>
                <div>
                  <p
                    className="main-description__title"
                    style={{ paddingTop: '115px' }}
                  >
                    Please resume curation of the registered works...
                  </p>
                  <p
                    className="main-description__text"
                    style={{ paddingBottom: '160px' }}
                  >
                    DAO voting is not possible if there are
                    <span>less than 3 curation participants.</span>
                    <br />
                    <br />
                    3 or more curators must participate for a registered work
                    DAO voting is in progress.
                    <br />
                    The registration fee paid during the curation process will
                    be refunded.
                    <br />
                    <br />
                    You must register again to proceed with the curation.
                  </p>
                  <div className="main-description__count">
                    <p>Registration Fee</p>
                    <div className="main-description__data">
                      <span>ADF</span>
                      <p className="main-description__numbering">0</p>
                      <p className="main-description__small">300.00</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: '80px' }}>
                    <Button
                      className="button button--black button--mid"
                      content="Curating Try again"
                      type="type1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process03;
