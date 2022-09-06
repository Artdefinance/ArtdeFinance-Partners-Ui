/* eslint-disable react/prop-types */
import './Activity.scss';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Info from './Info';
import SaleTypePrice from './SaleTypePrice';
import Side from './Side';

function List() {
  return (
    <div className="activity">
      <div className="activity__wrap activity__wrap--long">
        <div className="activity-list">
          <div className="activity-item--left">
            <BreadCrumbs content1="Works Activity" content2="Works Activity list" />
            <Side />
            <Info activeHistory />
          </div>
          <div className="activity-item--right">
            <SaleTypePrice contents="Remove Market list" isDisabled="false" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
