/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Regist.scss';
import {
  Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel,
} from 'react-accessible-accordion';
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input';
import RadioTabButton from '../Components/Button/RadioTabButton';
import Dropdown from '../Components/Dropdown/Dropdown';

export default class ArtworksRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreechecked: false,
    };
    this.handleAgreeChange = this.handleAgreeChange.bind(this);
  }

  handleAgreeChange = (e) => {
    this.setState({
      agreechecked: e.target.checked,
    });
  };

  render() {
    const GallerySize = [
      {
        id: '1',
        title: '10 or less',
        named: 'gallery_size',
        value: '1',
      },
      {
        id: '2',
        title: '10 - 20',
        named: 'gallery_size',
        value: '2',
      },
      {
        id: '3',
        title: '20 - 50',
        named: 'gallery_size',
        value: '3',
      },
      {
        id: '4',
        title: '50 or more',
        named: 'gallery_size',
        value: '4',
      },
    ];

    const nationCode = [
      {
        id: '1',
        value: '+82',
        title: 'South Korea (+82)',
      },
      {
        id: '2',
        value: '+233',
        title: 'Ghana (+233)',
      },
      {
        id: '3',
        value: '+241',
        title: 'Gabon (+241)',
      },
      {
        id: '4',
        value: '+592',
        title: 'Guyana (+592)',
      },
      {
        id: '5',
        value: '+220',
        title: 'Gambia (+220)',
      },
    ];

    const PersonNumber = [
      {
        id: '1',
        title: 'less than 10p',
        named: 'person_number',
        value: '1',
      },
      {
        id: '2',
        title: '10 - 20p',
        named: 'person_number',
        value: '2',
      },
      {
        id: '3',
        title: '20 - 50p',
        named: 'person_number',
        value: '3',
      },
      {
        id: '4',
        title: 'More than 50p',
        named: 'person_number',
        value: '4',
      },
    ];

    const { agreechecked } = this.state;
    const chkboxChecked = {
      backgroundImage: 'url(/assets/images/component/check_true.png)',
    };
    const chkboxUnChecked = {
      backgroundImage: 'url(/assets/images/component/check_false.png)',
    };

    return (
      <div className="main_regist">
        <div className="main_regist-wrap">
          <div className="head">
            <p>
              Artworks Registration
            </p>
            <span>
            You can register the artist&apos;s work and proceed with curation.
            <br />
            Please prepare a photo of the work and a certificate of authenticity
            before registering the work.
            </span>
          </div>
          <Accordion>
            <AccordionItem>
              <div className="regist__form">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="form__head">
                      <span>Requisite (0/7)</span>
                      <p>Partners Details</p>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="form__body">
                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      Please tell us the name of the gallery
                      you are running while working with artists.
                      </p>
                      <Input value="" placeholder="Text" />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      What is the size of the artists in the gallery?
                      </p>
                      <div className="button-position">
                        <RadioTabButton data={GallerySize} name="" widthStyle="775px" heightStyle="80px" />
                      </div>
                    </div>

                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      Please let me know if there is an address of a site
                      where you can introduce and view your work.
                      </p>
                      <Input value="" placeholder="Text" />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      Please provide the official email address
                      you need when requesting assistance.
                      </p>
                      <Input value="" placeholder="Text" />
                      <div className="warning__message">
                        <span className="warning__text">Supporting Text</span>
                      </div>
                    </div>

                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      Please provide the official contact information
                      you need when requesting assistance.
                      </p>
                      <div className="form__multi">
                        <Dropdown dropClass="nation_code" dropWidth="245px" dropHeight="36px" dropTitle="South Korea (+82)" content={nationCode} />
                        {/* <select className="selectbox">
                          {nationCode.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.name}
                            </option>
                          ))}
                        </select> */}
                        <Input value="" placeholder="Please enter without hyphens," />
                      </div>
                    </div>

                    <div className="form__inputs">
                      <p className="form__title form__title--need">
                      Is there a storage or place to store the artist&apos;s work in the gallery?
                      </p>
                      <div className="button-position">
                        <RadioTabButton data={PersonNumber} name="" widthStyle="775px" heightStyle="80px" />
                      </div>
                    </div>

                    <div className="agree_check">
                      <label htmlFor="agreeChk" className="agr_chk">
                        <input
                          type="checkbox"
                          id="agreeChk"
                          name="agreeChk"
                          value=""
                          checked={agreechecked}
                          onChange={this.handleAgreeChange}
                        />
                        <i
                          className="ico_check"
                          style={agreechecked ? chkboxChecked : chkboxUnChecked}
                        />
                        By continuing, you agree to Art de Finance’s
                        <Link to="/gallery/regist"> Terms of Use </Link>
                        and confirm that you have read
                        <br />
                        Art de Finance’s
                        <Link to="/gallery/regist"> Privacy Policy </Link>
                      </label>
                    </div>

                  </div>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          </Accordion>

          <div className="form__fixed">
            <Button className="button button--black button--mid" content="Comfirm" type="type1" />
          </div>
        </div>
      </div>
    );
  }
}
