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

function Process04() {
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
              <div className="main-description">
                <div className="main-description__alert main-description__alert2">
                  <img
                    src="/assets/images/page/main/icon_checking.png"
                    alt="체크 아이콘"
                  />
                  <p>
                    The Curation for the work has been completed!
                  </p>
                </div>
                <div>
                  <ProcessAnimation values={[0, 100]} length="2">
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          rotation: 0.5 - (1 - percentage / 100) / 5,
                          color: '#5F44FF',
                        })}
                      />
                    )}
                  </ProcessAnimation>
                  <p className="main-description__title">
                    The curation for the work has been completed!
                  </p>
                  <p className="main-description__text">
                    Your work has been curated by experts.
                    <br />
                    DAO voting is now conducted for a more fair evaluation.
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process04;
