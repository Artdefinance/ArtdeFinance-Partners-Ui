/* eslint-disable react/prop-types */
import './Guide.scss';
// Toast
import { ToastContainer, toast } from 'react-toastify';
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

function Guide() {
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
  return (
    <div className="guide">
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
          <p>SIZE 24</p>
          <Icons shape="close" width="24px" height="24px" color="#555555" />
          <Icons shape="search" width="24px" height="24px" />
          <Icons shape="check" width="24px" height="24px" />
          <Icons shape="refresh" width="24px" height="24px" />
          <Icons shape="plus" width="24px" height="24px" />
          <Icons shape="flag" width="24px" height="24px" />
          <Icons shape="flag_fill" width="24px" height="24px" />
          <Icons shape="global" width="24px" height="24px" />
          <Icons shape="notice" width="24px" height="24px" />
          <Icons shape="share" />
          <Icons shape="trash" />
          <Icons shape="close-circle" />
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
        </div>
        <div>
          <Icons shape="close_small" />
          <Icons shape="search_small" />
          <Icons shape="expand" />
          <Icons shape="hambuger" />
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
      </div>
      <div>
        <p>Arrow</p>
          <Icons shape="pagenation-left" width="24px" height="24px" />
          <Icons shape="pagenation-right" width="24px" height="24px" />
          <Icons shape="arrow-left" width="24px" height="24px" />
          <Icons shape="arrow-right" width="24px" height="24px" />
          <Icons shape="arrow-up" width="24px" height="24px" />
          <Icons shape="arrow-down" width="24px" height="24px" />
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
        <h2>Input</h2>
        <Input name="artist" disabled="true" placeholder="Content" />
        <Input name="ID" placeholder="Content" />
      </div>

      <div>
        <h2>Checkbox</h2>
        <Checkbox
          chkId="test"
          content="test"
        />
      </div>

      <div>
        <h2>Toast</h2>
        <ToastContainer
          autoClose={false}
          closeOnClick
          rtl={false}
        />

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
  );
}

export default Guide;
