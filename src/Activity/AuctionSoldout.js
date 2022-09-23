/* eslint-disable react/prop-types */
import './Activity.scss';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Info from './Info';
import SaleTypeAuction from './SaleTypeAuction';
import Side from './Side';
import History from './History';
import Buyer from './Buyer';

function AuctionSoldout() {
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
            <SaleTypeAuction hammerPrice content="Sold Out" disabled="true" />
            <History />
            <Buyer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionSoldout;
