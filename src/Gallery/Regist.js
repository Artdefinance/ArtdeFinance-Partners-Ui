/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.scss';
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input';
import RadioTabButton from '../Components/Button/RadioTabButton';
import Dropdown from '../Components/Dropdown/Dropdown';

export default class GalleryRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreechecked: false,
      isblank1: true,
      isblank2: true,
      isblank3: true,
      isblank4: true,
      isblank5: true,
      isblank6: true,
      isFooterShow: true,
    };
    this.handleAgreeChange = this.handleAgreeChange.bind(this);
    this.clickRadioTabButton = this.clickRadioTabButton.bind(this);
    this.clickRadioTabButton2 = this.clickRadioTabButton2.bind(this);
    this.changeNumberInput = this.changeNumberInput.bind(this);
    this.numberInputTarget = React.createRef();
    this.registTarget = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.registTarget.current) return;
    if (window.pageYOffset > this.registTarget.current.clientHeight - 1124) {
      this.setState((state) => ({
        ...state,
        isFooterShow: true,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        isFooterShow: false,
      }));
    }
  };

  handleAgreeChange = (e) => {
    this.setState({
      agreechecked: e.target.checked,
    });
  };

  clickRadioTabButton(e) {
    if (e.target.className === 'radio-tab__button') {
      this.setState({
        isblank2: false,
      });
    }
  }

  clickRadioTabButton2(e) {
    if (e.target.className === 'radio-tab__button') {
      this.setState({
        isblank6: false,
      });
    }
  }

  changeNumberInput() {
    const target1 = this.numberInputTarget.current.value.length;
    if (target1 > 8) {
      this.setState(() => ({
        isblank5: false,
      }));
    }
  }

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

    const {
      agreechecked, isblank1, isblank2,
      isblank3, isblank4, isblank5, isblank6, isFooterShow,
     } = this.state;
    const chkboxChecked = {
      backgroundImage: 'url(/assets/images/component/check_true.png)',
    };
    const chkboxUnChecked = {
      backgroundImage: 'url(/assets/images/component/check_false.png)',
    };

    return (
      <div className="gallery">
        <div className="gallery__wrap regist_wrap" ref={this.registTarget}>
          <div className="head">
            <p>
              Partner Registration
            </p>
            <span>
            We have a few questions to share with you as partners. This step doesn&apos;t take long.
            <br />
            Just think of it as a process for establishing a stable partnership.
            </span>
          </div>
          <div className="regist__form">
            <div className="form__head">
              <span>Requisite (0/7)</span>
              <p>Partners Details</p>
            </div>
            <div className="form__body">
              <div className="form__inputs">
                <p className={isblank1 ? 'form__title form__title--need' : 'form__title'}>
                Please tell us the name of the gallery you are running while working with artists.
                </p>
                <Input value="" placeholder="Text" onChangeValue={(value) => this.setState((state) => ({ ...state, isblank1: !value }))} />
                <div className="warning__message">
                  <span className="warning__text">Supporting Text</span>
                </div>
              </div>

              <div className="form__inputs">
                <p className={isblank2 ? 'form__title form__title--need' : 'form__title'}>
                  What is the size of the artists in the gallery?
                </p>
                <div className="button-position" onClick={this.clickRadioTabButton}>
                  <RadioTabButton data={GallerySize} name="" widthStyle="775px" heightStyle="80px" />
                </div>
              </div>

              <div className="form__inputs">
                <p className={isblank3 ? 'form__title form__title--need' : 'form__title'}>
                Please let me know if there is an address of a site
                where you can introduce and view your work.
                </p>
                <Input value="" placeholder="Text" onChangeValue={(value) => this.setState((state) => ({ ...state, isblank3: !value }))} />
                <div className="warning__message">
                  <span className="warning__text">Supporting Text</span>
                </div>
              </div>

              <div className="form__inputs">
                <p className={isblank4 ? 'form__title form__title--need' : 'form__title'}>
                Please provide the official email address you need when requesting assistance.
                </p>
                <Input value="" placeholder="Text" onChangeValue={(value) => this.setState((state) => ({ ...state, isblank4: !value }))} />
                <div className="warning__message">
                  <span className="warning__text">Supporting Text</span>
                </div>
              </div>

              <div className="form__inputs">
                <p className={isblank5 ? 'form__title form__title--need' : 'form__title'}>
                Please provide the official contact information you need when requesting assistance.
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
                  <input
                    type="text"
                    placeholder="Please enter without hyphens,"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onChange={this.changeNumberInput}
                    ref={this.numberInputTarget}
                  />
                </div>
              </div>

              <div className="form__inputs">
                <p className={isblank6 ? 'form__title form__title--need' : 'form__title'}>
                Is there a storage or place to store the artist&apos;s work in the gallery?
                </p>
                <div className="button-position" onClick={this.clickRadioTabButton2}>
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
          </div>
          <div className={isFooterShow ? 'form__fixed hide' : 'form__fixed'}>
            <div>
              <Button className="button button--black button--mid" content="Comfirm" type="type1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
