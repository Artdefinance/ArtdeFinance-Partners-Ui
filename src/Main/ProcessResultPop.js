/* eslint-disable react/prop-types */
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

export default class ProcessResultPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabvalue: 0,
      open: false,
    };
    this.handleSubtabChange = this.handleSubtabChange.bind(this);
  }

  handleTabChange = (e, tabvalue) => {
    console.log(tabvalue);
    this.setState({ tabvalue });
  };

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
      <div className="dialog_wrap artworkprocess01_dialog">
        <Tabs value={tabvalue} onChange={this.handleTabChange}>
          <Tab label="Exhibition History" />
          <Tab label="DAO Voting Result" />
          <Tab label="Curation Result" />
        </Tabs>
        <div className="dialog__content">
          {tabvalue === 0 && (
            <>
            {/* Exhibition History */}
            <ul>
              <li>Years</li>
              <li>Location</li>
              <li>Country</li>
            </ul>
            <ul>
              {listData.map((item) => (
                <li key={item.id}>
                  <p>{item.years}</p>
                  <p>{item.location}</p>
                  <p>{item.country}</p>
                </li>
              ))}
            </ul>
            </>
          )}
          {tabvalue === 1 && (
            <>
            {/* DAO Voting Result */}
            <p>DAO Voting Result</p>
            </>
          )}
          {tabvalue === 2 && (
            <>
            {/* Curation Result */}
            <p>Curation Result</p>
            </>
          )}
        </div>
      </div>
    );
  }
}
