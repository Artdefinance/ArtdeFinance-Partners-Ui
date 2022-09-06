/* eslint-disable react/prop-types */
import './Activity.scss';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Info from './Info';
import SaleTypeAuction from './SaleTypeAuction';
import Side from './Side';
import History from './History';

function Auction() {
  return (
    <div className="activity">
      <div className="activity__wrap activity__wrap--long">
        <div className="activity-list">
          <div className="activity-item--left">
            <BreadCrumbs
              content1="Works Activity"
              content2="Works Activity list"
            />
            <Side />
            <Info />
          </div>
          <div className="activity-item--right">
            <SaleTypeAuction />
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auction;
