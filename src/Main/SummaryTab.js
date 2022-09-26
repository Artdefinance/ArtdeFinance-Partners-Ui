/* eslint-disable react/prop-types */
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Dialog from '@material-ui/core/Dialog';
import Icons from '../Components/Icons/Icons';
import ProcessResultPop from './ProcessResultPop';

export default class SummaryTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tabvalue: 0,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.openDialog = this.openDialog.bind(this);
  }

  handleTabChange = (e, tabvalue) => {
    this.setState({ tabvalue });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  openDialog() {
    this.setState({ open: true });
  }

  render() {
    const { tabvalue, open } = this.state;
    const listData = [
      {
        id: '1',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '2',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '3',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '4',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '5',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
      {
        id: '6',
        years: '2012',
        position: 'Park Avenue Armory, New York City',
        location: 'Los Angeles Institute of Contemporary British Museum,British Los Angeles Institute of ContemporaryLos Angeles Institute of ContemporaryLos Angeles Institute of',
        country: 'Los Angeles, CaliforniaLos Angeles, CaliforniaLos Angeles, California',
      },
    ];
    return (
      <>
      <div className="main-tab">
        <Tabs value={tabvalue} onChange={this.handleTabChange}>
          <Tab label="Exhibition History" />
          <Tab label="DAO Voting Result" />
          <Tab label="Curation Result" />
        </Tabs>
        {tabvalue === 0 && (
          // Exhibition History
          <div className="tab_panel" style={{ display: 'block' }}>
            <button type="button" onClick={this.openDialog}>Show all</button>
            <ul className="history_list">
              {listData.map((item) => (
                <li key={item.id}>
                  <p>{item.years}</p>
                  <p>{item.position}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {tabvalue === 1 && (
          // DAO Voting Result
          <div className="tab_panel">
            <button type="button" onClick={this.openDialog}>Show all</button>
            <dl className="dao_list">
              <dt>
                <span>Curator</span>
                Artdefinance Reality sub labs gallery
              </dt>
              <dd className="price_box">
                <p>Curation Price</p>
                <div className="price">
                  1,800,000.00
                  <span className="unit">USD</span>
                </div>
              </dd>
            </dl>
            <dl className="dao_list">
              <dt>
                <span>Curator</span>
                Artdefinance Reality sub labs gallery
              </dt>
              <dd className="price_box">
                <p>Curation Price</p>
                <div className="price">
                  1,800,000.00
                  <span className="unit">USD</span>
                </div>
              </dd>
            </dl>
            <dl className="dao_list">
              <dt>
                <span>Curator</span>
                Artdefinance Reality sub labs gallery
              </dt>
              <dd className="price_box">
                <p>Curation Price</p>
                <div className="price">
                  1,800,000.00
                  <span className="unit">USD</span>
                </div>
              </dd>
            </dl>
          </div>
        )}
        {tabvalue === 2 && (
          // Curation Result
          <div className="tab_panel">
            <button type="button" onClick={this.openDialog}>Show all</button>
            <div className="curation_result">
              <p className="rate items">
                <i className="ico_rate"><span className="a11y">result percent</span></i>
                78.56%
              </p>
              <div className="items">
                <dl className="item_line">
                  <dt>Curator</dt>
                  <dd>artdefinance labs galleryartdefinance labs ga</dd>
                </dl>
                <dl className="item_line">
                  <dt>Curation Price</dt>
                  <dd className="price">
                    1,500,000
                    <span className="unit">USD</span>
                  </dd>
                </dl>
                <dl className="item_line">
                  <dt>Expected Value</dt>
                  <dd className="price">
                    1,500,000
                    <span className="unit">USD</span>
                  </dd>
                </dl>
              </div>
              <div className="items">
                <dl className="item_line">
                  <dt>Turnout</dt>
                  <dd>20.21%</dd>
                </dl>
                <dl className="item_line">
                  <dt>Voted</dt>
                  <dd>
                    123,456,678,234 voted
                  </dd>
                </dl>
                <dl className="item_line">
                  <dt>Request Amount</dt>
                  <dd>
                    133,500,000.000.00  VADF
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* process full dialog */}
      <Dialog fullScreen open={Boolean(open)} onClose={this.closeDialog}>
        <div className="dialog_close" onClick={this.closeDialog}>
          <Icons shape="close" width="24px" height="24px" />
          <span className="a11y">close</span>
        </div>
        <ProcessResultPop />
      </Dialog>
      </>
    );
  }
}
