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
          <Tab label="Curation Result" />
          <Tab label="DAO Voting Result" />
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
                                className={
                                  subtabvalue === 'subtab_box1'
                                    ? 'tab_button active'
                                    : 'tab_button '
                                }
                              >
                                <span data="subtab_box1">Artwork Status</span>
                              </button>
                              <button
                                type="button"
                                onClick={this.handleSubtabChange}
                                role="tab"
                                className={
                                  subtabvalue === 'subtab_box2'
                                    ? 'tab_button active'
                                    : 'tab_button '
                                }
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
                                    Born in 1979, Jisan Ahn studied plastic art
                                    at Korea National University of Arts and has
                                    a degree with paintings at Frank Mohr
                                    International in the Netherlands. He debuted
                                    in the Netherlands first while he was
                                    staying in Rijks akademie residency for 2
                                    years from 2013. European Art Scene started
                                    paying attention to him after his solo
                                    exhibition at Galerie Bart/Born in 1979,
                                    Jisan Ahn studied plastic art at Korea
                                    National University of Arts and has a degree
                                    with paintings at Frank Mohr International
                                    in the Netherlands. He debuted in the
                                    Netherlands first while he was staying in
                                    Rijks akademie residency for 2 years from
                                    2013. European Art Scene started paying
                                    attention to him after his solo exhibition
                                    at Galerie Bart/
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
                                className={
                                  subtabvalue === 'subtab_box1'
                                    ? 'tab_button active'
                                    : 'tab_button '
                                }
                              >
                                <span data="subtab_box1">Artwork Status</span>
                              </button>
                              <button
                                type="button"
                                onClick={this.handleSubtabChange}
                                role="tab"
                                className={
                                  subtabvalue === 'subtab_box2'
                                    ? 'tab_button active'
                                    : 'tab_button '
                                }
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
                                    Born in 1979, Jisan Ahn studied plastic art
                                    at Korea National University of Arts and has
                                    a degree with paintings at Frank Mohr
                                    International in the Netherlands. He debuted
                                    in the Netherlands first while he was
                                    staying in Rijks akademie residency for 2
                                    years from 2013. European Art Scene started
                                    paying attention to him after his solo
                                    exhibition at Galerie Bart/Born in 1979,
                                    Jisan Ahn studied plastic art at Korea
                                    National University of Arts and has a degree
                                    with paintings at Frank Mohr International
                                    in the Netherlands. He debuted in the
                                    Netherlands first while he was staying in
                                    Rijks akademie residency for 2 years from
                                    2013. European Art Scene started paying
                                    attention to him after his solo exhibition
                                    at Galerie Bart/
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
                              className={
                                subtabvalue === 'subtab_box1'
                                  ? 'tab_button active'
                                  : 'tab_button '
                              }
                            >
                              <span data="subtab_box1">Artwork Status</span>
                            </button>
                            <button
                              type="button"
                              onClick={this.handleSubtabChange}
                              role="tab"
                              className={
                                subtabvalue === 'subtab_box2'
                                  ? 'tab_button active'
                                  : 'tab_button '
                              }
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
                                  Korea National University of Arts and has a
                                  degree with paintings at Frank Mohr
                                  International in the Netherlands. He debuted
                                  in the Netherlands first while he was staying
                                  in Rijks akademie residency for 2 years from
                                  2013. European Art Scene started paying
                                  attention to him after his solo exhibition at
                                  Galerie Bart/Born in 1979, Jisan Ahn studied
                                  plastic art at Korea National University of
                                  Arts and has a degree with paintings at Frank
                                  Mohr International in the Netherlands. He
                                  debuted in the Netherlands first while he was
                                  staying in Rijks akademie residency for 2
                                  years from 2013. European Art Scene started
                                  paying attention to him after his solo
                                  exhibition at Galerie Bart/
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
        {tabvalue === 2 && (
          <>
            {/* DAO Voting Result */}
            <div className="dialog__content content_dao">
              <div className="main-result">
                <div className="main-result--top">
                  <div>
                    <p className="main-result__title">Voted</p>
                    <p>
                      <span>123,456,678,234</span>
                      <span>%</span>
                    </p>
                  </div>
                  <div>
                    <p className="main-result__title">Request Amount</p>
                    <p>
                      <span>133,500,000,000.00</span>
                      <span>vADF</span>
                    </p>
                  </div>
                </div>
                <div className="main-result__content">
                  <div className="main-result__list">
                    <div className="main-result__item main-result__item--popular">
                      <div className="main-result__mark">
                        <p>Most Votes</p>
                      </div>
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler
                          <br />
                          Artdefinance
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
                    <div className="main-result__item">
                      <div className="main-result__sub-title">
                        <p>Curator</p>
                        <p className="main-result__description">
                          Artdefinance Reality sub labs galler Artde
                        </p>
                        <p>
                          78.56
                          <span>%</span>
                        </p>
                      </div>
                      <div className="main-result__box">
                        <div>
                          <p>Curation Price</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                        <div>
                          <p>Expected Value</p>
                          <div className="main-result__count">
                            <p>1,800,000.00</p>
                            <p>USD</p>
                          </div>
                        </div>
                      </div>
                      <p className="main-result__info">
                        Expected Value after
                        <span>3</span>
                        years
                      </p>
                    </div>
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
