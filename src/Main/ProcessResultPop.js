/* eslint-disable react/prop-types */
import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ArtworkStatus from './ArtworkStatus';

export default class ProcessResultPop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabvalue: 0,
      subtabvalue: 'subtab_box1',
    };
    this.handleSubtabChange = this.handleSubtabChange.bind(this);
  }

  handleTabChange = (e, tabvalue) => {
    this.setState({ tabvalue });
  };

  handleSubtabChange(e) {
    e.preventDefault();
    const subtabvalue = e.target.getAttribute('data');
    this.setState({ subtabvalue });
  }

  render() {
    const { tabvalue, subtabvalue } = this.state;
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
      <div className="dialog_wrap artworkprocess_dialog">
        <Tabs value={tabvalue} onChange={this.handleTabChange}>
          <Tab label="Exhibition History" />
          <Tab label="DAO Voting Result" />
          <Tab label="Curation Result" />
        </Tabs>
        {tabvalue === 0 && (
          <>
          {/* Exhibition History */}
          <div className="dialog__content content_history">
            <ul className="history_list-head">
              <li>Years</li>
              <li>Location</li>
              <li>Country</li>
            </ul>
            <ul className="history_list">
              {listData.map((item) => (
                <li key={item.id}>
                  <p>{item.years}</p>
                  <p>{item.location}</p>
                  <p>{item.country}</p>
                </li>
              ))}
            </ul>
          </div>
          </>
        )}
        {tabvalue === 1 && (
          <>
          {/* DAO Voting Result */}
          <div className="dialog__content content_dao">
          <p>DAO Voting Result</p>
          </div>
          </>
        )}
        {tabvalue === 2 && (
          <>
          {/* Curation Result */}
          <div className="dialog__content content_curation">
            <div className="tab_panel dialog_panel">
              <div className="panel_half">
                <div className="panel_box">
                  <div className="curator_name">
                    <span>Curator</span>
                    <p>Artdefinance Reality sub labs galler Artdefinance</p>
                  </div>
                  <div className="price_area">
                    <div className="price_box">
                      <p>Curation Price</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                    <div className="price_box">
                      <p>Expected Value</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_wrap">
                    <Accordion>
                      <AccordionSummary>
                        <div className="util_area">
                          <div>
                            <button
                              type="button"
                              name="sub_box1"
                              onClick={() => this.handleShowHide(0)}
                              className="btn_showmore"
                            >
                              Show Info more
                            </button>
                          </div>
                          <div className="period">
                            Expected Value after
                            <span>3</span>
                            years
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails className="accordion_detail">
                        <div className="more_area">
                          <div className="tab_list">
                            <button
                              type="button"
                              onClick={this.handleSubtabChange}
                              role="tab"
                              className={subtabvalue === 'subtab_box1' ? 'tab_button active' : 'tab_button '}
                            >
                              <span data="subtab_box1">Artwork Status</span>
                            </button>
                            <button
                              type="button"
                              onClick={this.handleSubtabChange}
                              role="tab"
                              className={subtabvalue === 'subtab_box2' ? 'tab_button active' : 'tab_button '}
                            >
                              <span data="subtab_box2">Artwork Info</span>
                            </button>
                          </div>
                          <div className="tab_contents">
                            {subtabvalue === 'subtab_box1' && (
                            <div className="tab_box">
                              <ArtworkStatus />
                            </div>
                            )}
                            {subtabvalue === 'subtab_box2' && (
                            <div className="tab_box">
                              <p>
                              Born in 1979, Jisan Ahn studied plastic art at
                              Korea National University of Arts and has a degree
                              with paintings at Frank Mohr International in the Netherlands.
                              He debuted in the Netherlands first while he was staying
                              in Rijks akademie residency for 2 years from 2013.
                              European Art Scene started paying attention to him
                              after his solo exhibition at Galerie Bart/Born in 1979,
                              Jisan Ahn studied plastic art at Korea National University of Arts
                              and has a degree with paintings at
                              Frank Mohr International in the Netherlands.
                              He debuted in the Netherlands first while he was staying
                              in Rijks akademie residency for 2 years from 2013.
                              European Art Scene started paying attention
                              to him after his solo exhibition at Galerie Bart/
                              </p>
                            </div>
                            )}
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>

                <div className="panel_box">
                  <div className="curator_name">
                    <span>Curator</span>
                    <p>Artdefinance Reality sub labs galler Artdefinance</p>
                  </div>
                  <div className="price_area">
                    <div className="price_box">
                      <p>Curation Price</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                    <div className="price_box">
                      <p>Expected Value</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_wrap">
                    <Accordion className="accordion_wrap">
                      <AccordionSummary>
                        <div className="util_area">
                          <div>
                            <button
                              type="button"
                              name="sub_box1"
                              onClick={() => this.handleShowHide(0)}
                              className="btn_showmore"
                            >
                              Show Info more
                            </button>
                          </div>
                          <div className="period">
                            Expected Value after
                            <span>3</span>
                            years
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails className="accordion_detail">
                        <div className="more_area">
                          <div className="tab_list">
                            <button
                              type="button"
                              onClick={this.handleSubtabChange}
                              role="tab"
                              className={subtabvalue === 'subtab_box1' ? 'tab_button active' : 'tab_button '}
                            >
                              <span data="subtab_box1">Artwork Status</span>
                            </button>
                            <button
                              type="button"
                              onClick={this.handleSubtabChange}
                              role="tab"
                              className={subtabvalue === 'subtab_box2' ? 'tab_button active' : 'tab_button '}
                            >
                              <span data="subtab_box2">Artwork Info</span>
                            </button>
                          </div>
                          <div className="tab_contents">
                            {subtabvalue === 'subtab_box1' && (
                            <div className="tab_box">
                              <ArtworkStatus />
                            </div>
                            )}
                            {subtabvalue === 'subtab_box2' && (
                            <div className="tab_box">
                              <p>
                              Born in 1979, Jisan Ahn studied plastic art at
                              Korea National University of Arts and has a degree
                              with paintings at Frank Mohr International in the Netherlands.
                              He debuted in the Netherlands first while he was staying
                              in Rijks akademie residency for 2 years from 2013.
                              European Art Scene started paying attention to him
                              after his solo exhibition at Galerie Bart/Born in 1979,
                              Jisan Ahn studied plastic art at Korea National University of Arts
                              and has a degree with paintings at
                              Frank Mohr International in the Netherlands.
                              He debuted in the Netherlands first while he was staying
                              in Rijks akademie residency for 2 years from 2013.
                              European Art Scene started paying attention
                              to him after his solo exhibition at Galerie Bart/
                              </p>
                            </div>
                            )}
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="panel_half">
                <div className="panel_box">
                  <div className="curator_name">
                    <span>Curator</span>
                    <p>Artdefinance Reality sub labs galler Artdefinance</p>
                  </div>
                  <div className="price_area">
                    <div className="price_box">
                      <p>Curation Price</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                    <div className="price_box">
                      <p>Expected Value</p>
                      <div className="price">
                        1,800,000.00
                        <span className="unit">USD</span>
                      </div>
                    </div>
                  </div>
                  <Accordion>
                    <AccordionSummary>
                      <div className="util_area">
                        <div>
                          <button
                            type="button"
                            name="sub_box1"
                            onClick={() => this.handleShowHide(0)}
                            className="btn_showmore"
                          >
                            Show Info more
                          </button>
                        </div>
                        <div className="period">
                          Expected Value after
                          <span>3</span>
                          years
                        </div>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="more_area">
                        <div className="tab_list">
                          <button
                            type="button"
                            onClick={this.handleSubtabChange}
                            role="tab"
                            className={subtabvalue === 'subtab_box1' ? 'tab_button active' : 'tab_button '}
                          >
                            <span data="subtab_box1">Artwork Status</span>
                          </button>
                          <button
                            type="button"
                            onClick={this.handleSubtabChange}
                            role="tab"
                            className={subtabvalue === 'subtab_box2' ? 'tab_button active' : 'tab_button '}
                          >
                            <span data="subtab_box2">Artwork Info</span>
                          </button>
                        </div>
                        <div className="tab_contents">
                          {subtabvalue === 'subtab_box1' && (
                          <div className="tab_box">
                            <ArtworkStatus />
                          </div>
                          )}
                          {subtabvalue === 'subtab_box2' && (
                          <div className="tab_box">
                            <p>
                            Born in 1979, Jisan Ahn studied plastic art at
                            Korea National University of Arts and has a degree
                            with paintings at Frank Mohr International in the Netherlands.
                            He debuted in the Netherlands first while he was staying
                            in Rijks akademie residency for 2 years from 2013.
                            European Art Scene started paying attention to him
                            after his solo exhibition at Galerie Bart/Born in 1979,
                            Jisan Ahn studied plastic art at Korea National University of Arts
                            and has a degree with paintings at
                            Frank Mohr International in the Netherlands.
                            He debuted in the Netherlands first while he was staying
                            in Rijks akademie residency for 2 years from 2013.
                            European Art Scene started paying attention
                            to him after his solo exhibition at Galerie Bart/
                            </p>
                          </div>
                          )}
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    );
  }
}
