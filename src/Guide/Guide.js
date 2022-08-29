/* eslint-disable react/prop-types */
import './Guide.scss';
// Dropdown
import Dropdown from '../Components/Dropdown/Dropdown';
import DateDropdown from '../Components/Dropdown/DateDropdown';
import TimeDropdown from '../Components/Dropdown/TimeDropdown';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
// Button
import Buttons from '../Components/Button/Buttons';
import ButtonGray from '../Components/Button/ButtonGray';
import ButtonBlack from '../Components/Button/ButtonBlack';
import ButtonFill from '../Components/Button/ButtonFill';
import RadioButton from '../Components/Button/RadioButton';
import RadioTabButton from '../Components/Button/RadioTabButton';
import CheckButton from '../Components/Button/CheckButton';
// Icons
import Icons from '../Components/Icons/Icons';

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
      value: '1',
    },
    {
      id: '2',
      title: 'Default2',
      value: '2',
    },
    {
      id: '3',
      title: 'Default3',
      value: '3',
    },
    {
      id: '4',
      title: 'Default4',
      value: '4',
    },
    {
      id: '5',
      title: 'Default5',
      value: '5',
    },
  ];
  return (
    <div className="guide">
      <div className="button">
        <h2>buttons</h2>
        <div className="buttons-position">
          <Buttons className="buttons buttons--black buttons--default" content="type1" type="type1" disabled="true" />
          <Buttons className="buttons buttons--black buttons--mid" content="type1" type="type1" />
          <Buttons className="buttons buttons--black buttons--big" content="type2" type="type2" />
        </div>
        <div className="buttons-position">
          <ButtonGray className="buttons buttons--gray-line buttons--default" content="Button" />
          <ButtonGray className="buttons buttons--gray-line buttons--mid" content="Button" />
          <ButtonGray className="buttons buttons--gray-line buttons--big" content="Button" />
        </div>
        <div className="buttons-position">
          <ButtonBlack className="buttons buttons--black-line buttons--default" content="Button" />
          <ButtonBlack className="buttons buttons--black-line buttons--mid" content="Button" />
          <ButtonBlack className="buttons buttons--black-line buttons--big" content="Button" />
        </div>
        <div className="buttons-position">
          <ButtonFill className="buttons buttons--fill buttons--default" content="Button" />
          <ButtonFill className="buttons buttons--fill buttons--mid" content="Button" />
          <ButtonFill className="buttons buttons--fill buttons--big" content="Button" />
        </div>
        <div className="buttons-position">
          <RadioButton content="Default" value="option1" name="option1" widthStyle="368px" />
          <RadioButton content="Default" value="option2" name="option2" widthStyle="368px" />
        </div>
        <div className="buttons-position">
          <RadioTabButton data={ExampleContent5} widthStyle="646px" heightStyle="80px" />
        </div>
        <div className="buttons-position">
          <CheckButton content="Approve" widthStyle="847px" heightStyle="80px" />
        </div>
      </div>
      {/* Button */}

      <div className="dropdown-position">
        <h2>Dropbox Menu</h2>
        <div>
          <Dropdown dropWidth="210px" dropHeight="100%" dropTitle="드롭박스이름" content={ExampleContent1} />
          <Dropdown dropWidth="263px" dropHeight="100%" dropTitle="드롭박스이름2" content={ExampleContent2} />
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
          <CountryDropdown dropWidth="650px" dropTitle="Please select a country" content={ExampleContent4} />
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
          <Icons shape="close" width="24px" height="24px" color="#555555" />
          <Icons shape="search" width="24px" height="24px" />
          <Icons shape="check" width="24px" height="24px" />
          <Icons shape="refresh" width="24px" height="24px" />
          <Icons shape="plus" width="24px" height="24px" />
          <Icons shape="flag" width="24px" height="24px" />
          <Icons shape="flag-fill" width="24px" height="24px" />
          <Icons shape="global" width="24px" height="24px" />
          <Icons shape="notice" width="24px" height="24px" />
          <Icons shape="share" />
          <Icons shape="trash" />
        </div>
      </div>
    </div>
  );
}

export default Guide;
