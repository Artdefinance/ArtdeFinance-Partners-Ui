import React from 'react';
import './Curation.scss';
import BreadCrumbs from '../Components/BreadCrumbs.js/BreadCrumbs';
import Side from './Side';

export default class Curation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="curation">
          <div className="curation__wrap" style={{ paddingTop: 0 }}>
            <div className="activity-list">
              <div className="activity-item--left">
                <BreadCrumbs
                  content1="Curation"
                  content2="(Vincent can Gogh Tauba Auerbach Ryan Trecartin)"
                />
                <Side />
              </div>
              <div className="activity-item--right">
                ddd
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
