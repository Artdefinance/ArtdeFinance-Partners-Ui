/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './ArteComponent.scss';
// Carosel
import Slider from 'react-slick';
// Accordion
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
// Toast
import { ToastContainer, toast } from 'react-toastify';
// Sortable
import Sortable from 'react-sortable-list';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
// Dropdown
import Dropdown from '../Components/Dropdown/Dropdown';
import DateDropdown from '../Components/Dropdown/DateDropdown';
import TimeDropdown from '../Components/Dropdown/TimeDropdown';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
// Button
import Button from '../Components/Button/Button';
import ButtonGray from '../Components/Button/ButtonGray';
import ButtonBlack from '../Components/Button/ButtonBlack';
import ButtonFill from '../Components/Button/ButtonFill';
import RadioButton from '../Components/Button/RadioButton';
import RadioTabButton from '../Components/Button/RadioTabButton';
import CheckButton from '../Components/Button/CheckButton';
// Icons
import Icons from '../Components/Icons/Icons';
// Input
import Input from '../Components/Inputs/Input';
import Checkbox from '../Components/Inputs/Checkbox';

function ArteComponents() {
  const ExampleContent1 = [
    {
      id: '1',
      title: 'Artdefinance laps gallery curation',
    },
    {
      id: '2',
      title: 'Art de finance gallery',
    },
    {
      id: '3',
      title: 'Art de finance gallery',
    },
    {
      id: '4',
      title: 'Art de finance gallery',
    },
  ];
  const ExampleContent2 = [
    {
      id: '1',
      title: 'Sort by ending soon',
    },
    {
      id: '2',
      title: 'Sort by recently active',
    },
    {
      id: '3',
      title: 'Sort by newest',
    },
    {
      id: '4',
      title: 'Sort by oldest',
    },
  ];
  const ExampleContent3 = [
    {
      id: '1',
      title: '14 : 00',
    },
    {
      id: '2',
      title: '14 : 30',
    },
    {
      id: '3',
      title: '15 : 00',
    },
    {
      id: '4',
      title: '15 : 30',
    },
    {
      id: '5',
      title: '16 : 00',
    },
    {
      id: '6',
      title: '16 : 30',
    },
    {
      id: '7',
      title: '17 : 00',
    },
    {
      id: '8',
      title: '17 : 30',
    },
    {
      id: '9',
      title: '18 : 00',
    },
  ];
  const ExampleContent4 = [
    {
      id: '1',
      title: 'South Korea',
      country: 'korea_',
    },
    {
      id: '2',
      title: 'South Korea',
      country: 'korea_',
    },
    {
      id: '3',
      title: 'South Korea',
      country: 'korea_',
    },
    {
      id: '4',
      title: 'South Korea',
      country: 'korea_',
    },
    {
      id: '5',
      title: 'South Korea',
      country: 'korea_',
    },
  ];
  const ExampleContent5 = [
    {
      id: '1',
      title: 'Default1',
      named: 'radioTab',
      value: '1',
    },
    {
      id: '2',
      title: 'Default2',
      named: 'radioTab',
      value: '2',
    },
    {
      id: '3',
      title: 'Default3',
      named: 'radioTab',
      value: '3',
    },
    {
      id: '4',
      title: 'Default4',
      named: 'radioTab',
      value: '4',
    },
    {
      id: '5',
      title: 'Default5',
      named: 'radioTab',
      value: '5',
    },
  ];
  function toastDefault() {
    toast(
      <div className="toastify__custom">
        <Icons shape="exclama_fill" color="#ffffff" />
        Toastify Default Bottom Center
      </div>,
      {
        position: 'bottom-center',
      },
    );
  }
  function toastError() {
    toast(
      <div className="toastify__custom">
        <Icons shape="warning_fill" color="#ffffff" />
        Toastify Error Bottom Center
      </div>,
      {
        position: 'bottom-center',
        className: 'toast__custom-error',
      },
    );
  }
  function toastWarning() {
    toast(
      <div className="toastify__custom">
        <Icons shape="exclama_fill" color="#ffffff" />
        Toastify Warning Bottom Center
      </div>,
      {
        position: 'bottom-center',
        className: 'toast__custom-warn',
      },
    );
  }
  function toastSuccess() {
    toast(
      <div className="toastify__custom">
        <Icons shape="checkbox" color="#ffffff" />
        Toastify Info Bottom Center
      </div>,
      {
        position: 'bottom-center',
        className: 'toast__custom-success',
      },
    );
  }
  function toastInfo() {
    toast(
      <div className="toastify__custom">
      <Icons shape="exclama_fill" color="#366DFC" />
        Toastify Info Bottom Center
      </div>,
      {
        position: 'bottom-center',
        className: 'toast__custom-info',
      },
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const soratableData = [
    { id: 1, year: '2021', Location: 'Artdefinance GalleryArtdefinance GalleryArtdefinance GalleryArtdefinance GalleryArtdefinance Gallery', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
    { id: 2, year: '2020', Location: 'Artdefinance Gallery ', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
    { id: 3, year: '2017', Location: 'Artdefinance Gallery ', Country: 'South KoreaSouth KoreaSouth KoreaSouth KoreaSouth Korea.' },
  ];

  const [value, setValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="artecomponents">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <div>
        <h2>tab</h2>
        <div>
          {/*
            탭 컴포넌트 상위 클래스를 지정하여 커스텀 한다.
            - Tab Components 최상위 클래스 : .MuiTabs-root
            - 언더라인 클래스 : .MuiTabs-root .MuiTabs-indicator
            - 탭 클래스 : .MuiTabs-root .MuiButtonBase-root
          */}
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          {value === 0 && (
            <div className="tab_panel" style={{ display: 'block' }}>Item One</div>
          )}
          {value === 1 && (
            <div className="tab_panel">Item Two</div>
          )}
          {value === 2 && (
            <div className="tab_panel">Item Three</div>
          )}
        </div>
      </div>
      <div>
        <h2>carousel</h2>
        <div>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
      {/* carousel */}

      <div className="buttons">
        <h2>button</h2>
        <div className="button-position">
          <Button className="button button--black button--default" content="type1" type="type1" disabled="true" />
          <Button className="button button--black button--mid" content="type1" type="type1" />
          <Button className="button button--black button--big" content="type2" type="type2" />
        </div>
        <div className="button-position">
          <ButtonGray className="button button--gray-line button--default" content="Button" />
          <ButtonGray className="button button--gray-line button--mid" content="Button" />
          <ButtonGray className="button button--gray-line button--big" content="Button" />
        </div>
        <div className="button-position">
          <ButtonBlack className="button button--black-line button--default" content="Button" />
          <ButtonBlack className="button button--black-line button--mid" content="Button" />
          <ButtonBlack className="button button--black-line button--big" content="Button" />
        </div>
        <div className="button-position">
          <ButtonFill className="button button--fill button--default" content="Button" />
          <ButtonFill className="button button--fill button--mid" content="Button" />
          <ButtonFill className="button button--fill button--big" content="Button" />
        </div>
        <div className="button-position">
          <RadioButton content="Default" value="option1" name="option1" widthStyle="368px" />
          <RadioButton content="Default" value="option2" name="option2" widthStyle="368px" />
        </div>
        <div className="button-position">
          <RadioTabButton data={ExampleContent5} widthStyle="646px" heightStyle="80px" />
        </div>
        <div className="button-position">
          <CheckButton content="Approve" widthStyle="847px" heightStyle="80px" />
        </div>
      </div>
      {/* Button */}

      <div className="dropdown-position">
        <h2>Dropbox Menu</h2>
        <div>
          <Dropdown dropWidth="210px" dropHeight="60px" dropTitle="드롭박스이름" content={ExampleContent1} dropFontSize="16px" dropFontColor="#000000" />
          <Dropdown dropWidth="263px" dropHeight="60px" dropTitle="드롭박스이름2" content={ExampleContent2} dropFontSize="16px" dropFontColor="#000000" />
        </div>
        <div>
          <DateDropdown dropWidth="415px" />
          <DateDropdown dropWidth="415px" disabled="true" />
        </div>
        <div>
          <TimeDropdown dropWidth="333px" content={ExampleContent3} />
          <TimeDropdown dropWidth="333px" disabled="true" />
        </div>
        <div>
          <CountryDropdown dropWidth="650px" dropHeight="60px" dropTitle="Please select a country" content={ExampleContent4} dropFontSize="16px" />
        </div>
      </div>
      {/* Dropdown box */}

      <div className="bubble-position">
        <h2>말풍선 위치</h2>
        <div className="item">
          <h3>bubble-bottom-center</h3>
          <p className="bubble bubble-bottom-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables. </p>
        </div>
        <div className="item">
          <h3>bubble-right-center</h3>
          <p className="bubble bubble-right-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-bottom-left</h3>
          <p className="bubble bubble-bottom-left">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-bottom-right</h3>
          <p className="bubble bubble-bottom-right">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-center</h3>
          <p className="bubble bubble-top-center">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-left-center</h3>
          <p className="bubble bubble-left-center">his is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-left</h3>
          <p className="bubble bubble-top-left">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
        <div className="item">
          <h3>bubble-top-right</h3>
          <p className="bubble bubble-top-right">This is tooltip content. Seamlessly formulate magnetic methodologies with go forward deliverables.</p>
        </div>
      </div>
      {/* 말풍선 */}

      <div>
        <h2>Icons</h2>
        <div>
          <p>SIZE 42</p>
          <div>
          <Icons shape="home" width="42px" height="42px" viewBox="0 0 42 42" />
          </div>
          <br />
        </div>
        <div>
          <p>SIZE 38</p>
          <div>
          <Icons shape="camera" width="38px" height="38px" viewBox="0 0 38 38" />
          <Icons shape="pencil" width="38px" height="38px" viewBox="0 0 38 38" />
          </div>
          <br />
        </div>
        <div>
          <p>SIZE 34</p>
          <div>
          <Icons shape="carousel_prev" width="34px" height="34px" viewBox="0 0 34 34" />
          <Icons shape="carousel_next" width="34px" height="34px" viewBox="0 0 34 34" />
          </div>
          <br />
        </div>
        <div>
          <p>SIZE 24</p>
          <Icons shape="close" width="24px" height="24px" />
          <Icons shape="search" width="24px" height="24px" />
          <Icons shape="check" width="24px" height="24px" />
          <Icons shape="check" width="24px" height="24px" color="#ffffff" />
          <Icons shape="refresh" width="24px" height="24px" />
          <Icons shape="plus" width="24px" height="24px" />
          <Icons shape="flag" width="24px" height="24px" />
          <Icons shape="flag_fill" width="24px" height="24px" />
          <Icons shape="global" width="24px" height="24px" />
          <Icons shape="notice" width="24px" height="24px" />
          <Icons shape="share" />
          <Icons shape="trash" />
          <Icons shape="close-circle" />
          <Icons shape="close-circle-bk" />
        </div>
        <div>
          <Icons shape="exclama" color="#000000" />
          <Icons shape="exclama_fill" color="#000000" />
          <Icons shape="exclama_fill" color="#366DFC" />
          <Icons shape="exclama" color="#366DFC" />
          <Icons shape="checkbox_fill" color="#15A46E" />
          <Icons shape="checkbox" color="#15A46E" />
          <Icons shape="warning_fill" color="#FF3B30" />
          <Icons shape="warning" color="#FF3B30" />
          <Icons shape="alram" color="#555555" />
          <Icons shape="calendar" />
          <Icons shape="addcircle" />
          <Icons shape="download" />
          <Icons shape="exclama24" color="#366DFC" />
        </div>
        <div>
          <Icons shape="close_small" />
          <Icons shape="search_small" />
          <Icons shape="expand" />
          <Icons shape="hambuger" />
          <Icons shape="setting" />
        </div>
        <br />
      </div>
      <div>
        <p>SIZE 20</p>
        <div>
          <Icons shape="exclama20" width="20px" height="20px" color="#366DFC" />
          <Icons shape="question" width="21px" height="20px" color="#366DFC" />
        </div>
        <div>
          <Icons shape="acution" width="20px" height="20px" />
          <Icons shape="data" width="20px" height="20px" />
          <Icons shape="dashboard" width="20px" height="20px" color="#BBBBBB" />
          <Icons shape="heart" width="20px" height="20px" color="#BBBBBB" />
          <Icons shape="hand" width="20px" height="20px" color="#BBBBBB" />
          <Icons shape="panorama" width="20px" height="20px" color="#BBBBBB" />
          <Icons shape="account" width="20px" height="20px" color="#BBBBBB" />
          <Icons shape="clock" width="20px" height="20px" />
        </div>
        <div>
          <Icons shape="adf" width="20px" height="20px" />
          <Icons shape="bnb" width="20px" height="20px" />
          <Icons shape="busd20" width="20px" height="20px" />
          <Icons shape="data-small--gray" />
        </div>
      </div>
      <div>
        <p>Arrow</p>
          <Icons shape="pagenation-left" width="24px" height="24px" />
          <Icons shape="pagenation-left--black" width="24px" height="24px" />
          <Icons shape="pagenation-right--gray" width="24px" height="24px" />
          <Icons shape="pagenation-right" width="24px" height="24px" />
          <Icons shape="arrow-left" width="24px" height="24px" />
          <Icons shape="arrow-right" width="24px" height="24px" />
          <Icons shape="arrow-up" width="24px" height="24px" />
          <Icons shape="arrow-down" width="24px" height="24px" />
          <Icons shape="arrow-link" width="20px" height="20px" />
      </div>
      <div>
        <p>SIZE 18</p>
        <Icons shape="data-small" />
      </div>
      <div>
        <p>SIZE 16</p>
        <Icons shape="busd" />
      </div>
      <div>
        <p>SIZE 14</p>
        <Icons shape="binance" />
      </div>
      {/* Icons */}

      <div>
        <h2>Input</h2>
        <Input name="artist" disabled="true" placeholder="Content" />
        <Input name="ID" placeholder="Content" />
        <br />

        <h2>Textarea</h2>
        <div>
          <div className="form__title">
          form default
          </div>
          <div className="textarea_box">
            <textarea
              placeholder="Type your contents here."
              maxLength={2000}
            />
            <div className="byte__check">
              <p>0</p>
              <p>/2000 byte</p>
            </div>
          </div>
        </div>
        <div className="form__error">
          <div className="form__title">
          form error case
          </div>
          <div className="textarea_box">
            <textarea
              placeholder="Type your contents here."
              maxLength={2000}
            />
            <div className="byte__check">
              <p>0</p>
              <p>/2000 byte</p>
            </div>
          </div>
        </div>
      </div>
      {/* Input */}

      <div>
        <h2>Checkbox</h2>
        <Checkbox
          chkId="test"
          content="test"
        />
      </div>
      {/* Checkbox */}

      <div>
        <h2>Radiobox</h2>
        <div className="radio_inputs">
          <label htmlFor="default-radio1">
            <input type="radio" id="default-radio1" name="default-radio" />
            <span />
            default-radio1
          </label>
          <label htmlFor="default-radio2">
            <input type="radio" id="default-radio2" name="default-radio" />
            <span />
            default-radio2
          </label>
        </div>
      </div>
      {/* Radiobox */}

      <div>
        <h2>Toast</h2>
        <ToastContainer
          autoClose={false}
          closeOnClick
          rtl={false}
        />
        <div className="toast">
          <p>
          <button type="button" onClick={() => toastDefault()} className="button button--black button--mid">Toast Default Bottom Center</button>
          </p>
          <p>
          <button type="button" onClick={() => toastError()} className="button button--black button--mid">Toast Error Bottom Center</button>
          </p>
          <p>
          <button type="button" onClick={() => toastWarning()} className="button button--black button--mid">Toast Warning Bottom Center</button>
          </p>
          <p>
          <button type="button" onClick={() => toastSuccess()} className="button button--black button--mid">Toast Success Bottom Center</button>
          </p>
          <p>
          <button type="button" onClick={() => toastInfo()} className="button button--black button--mid">Toast Info Bottom Center</button>
          </p>
        </div>
      </div>
      {/* Toast */}

      <div>
        <h2>Accordion</h2>
        <Accordion>
          <AccordionSummary>
            <p>This is the summary</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
              sapien et ligula ullamcorper malesuada proin libero nunc consequat.
              Mauris sit amet massa vitae. Varius duis at consectetur lorem donec
              massa sapien faucibus. Commodo nulla facilisi nullam vehicula ipsum
              a arcu cursus. Libero volutpat sed cras ornare arcu dui vivamus
              arcu. Mi eget mauris pharetra et ultrices. Vel risus commodo viverra
              maecenas accumsan lacus vel facilisis volutpat. Sodales neque
              sodales ut etiam. Phasellus vestibulum lorem sed risus ultricies
              tristique. Dui ut ornare lectus sit amet est. Risus sed vulputate
              odio ut enim blandit. Vel pretium lectus quam id.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <p>This is the summary</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
              sapien et ligula ullamcorper malesuada proin libero nunc consequat.
              Mauris sit amet massa vitae. Varius duis at consectetur lorem donec
              massa sapien faucibus. Commodo nulla facilisi nullam vehicula ipsum
              a arcu cursus. Libero volutpat sed cras ornare arcu dui vivamus
              arcu. Mi eget mauris pharetra et ultrices. Vel risus commodo viverra
              maecenas accumsan lacus vel facilisis volutpat. Sodales neque
              sodales ut etiam. Phasellus vestibulum lorem sed risus ultricies
              tristique. Dui ut ornare lectus sit amet est. Risus sed vulputate
              odio ut enim blandit. Vel pretium lectus quam id.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Accordion */}

      <div>
        <h2>Sortable List</h2>
        <div className="sortable_wrap">
          <Sortable
            data={soratableData.map((i) => (
              <div className="placeholder">
                <div>{i.year}</div>
                <div>{i.Location}</div>
                <div>{i.Country}</div>
                <div className="del">
                  <button type="button">delete</button>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
      {/* Sortable */}

    </div>
  );
}

export default ArteComponents;
