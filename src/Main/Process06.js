/* eslint-disable react/prop-types */
import './Process.scss';
import About from './About';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Button from '../Components/Button/Button';
import ProcessStatus from './ProcessStatus';
import SummaryTab from './SummaryTab';

function Process06() {
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
                <ProcessStatus step="5" />
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
                  <li>
                    Dao Voting
                    <span>4/13/2022 16:32</span>
                  </li>
                  <li>
                    Dao Voted
                    <span>4/13/2022 16:32</span>
                  </li>
                </ul>
              </div>
              <div className="main-description">
                <div>
                  <img src="/assets/images/page/main/img_books.png" alt="북 이미지" className="main-description__img" />
                  <p className="main-description__title">
                    All curation and voting for the work has ended!
                  </p>
                  <p className="main-description__text">
                    DIn the selection of the value of the work, all processes
                    were carried out in a transparent manner.
                    <br />
                    Now decide which
                    type to register on the market bassed on the fair outcome.
                  </p>
                  <Button
                    className="button button--black button--mid"
                    content="Sell in Marketplace"
                    type="type1"
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

export default Process06;
