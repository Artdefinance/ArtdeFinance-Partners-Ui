/* eslint-disable react/prop-types */
import './Guide.scss';
import Dropdown from '../Components/Dropdown/Dropdown';
import DateDropdown from '../Components/Dropdown/DateDropdown';
import TimeDropdown from '../Components/Dropdown/TimeDropdown';
import CountryDropdown from '../Components/Dropdown/CountryDropdown';
import PrimaryButton from '../Components/Button/PrimaryButton';
import SecondaryButtonGray from '../Components/Button/SecondaryButtonGray';
import SecondaryButtonBlack from '../Components/Button/SecondaryButtonBlack';
import SecondaryButtonFill from '../Components/Button/SecondaryButtonFill';
import RadioButton from '../Components/Button/RadioButton';
import RadioTabButton from '../Components/Button/RadioTabButton';
import CheckButton from '../Components/Button/CheckButton';

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
      <div className="buttons">
        <h2>buttons</h2>
        <div className="buttons-position">
          <PrimaryButton content="Disabled type1" type="type1" contentPadding="17px 30px" disabled="true" />
          <PrimaryButton content="Disabled type1" type="type1" contentPadding="17px 30px" disabled="false" />
          <PrimaryButton content="Disabled type2" type="type2" contentPadding="21px 30px" disabled="false" />
          <PrimaryButton content="Disabled type2" type="type2" contentPadding="25px 40px" disabled="false" />
        </div>
        <div className="buttons-position">
          <SecondaryButtonGray content="Button" contentPadding="17px 30px" />
          <SecondaryButtonGray content="Button" contentPadding="21px 30px" />
          <SecondaryButtonGray content="Button" contentPadding="25px 40px" />
        </div>
        <div className="buttons-position">
          <SecondaryButtonBlack content="Button" contentPadding="17px 30px" />
          <SecondaryButtonBlack content="Button" contentPadding="21px 30px" />
          <SecondaryButtonBlack content="Button" contentPadding="25px 40px" />
        </div>
        <div className="buttons-position">
          <SecondaryButtonFill content="Button" contentPadding="17px 30px" />
          <SecondaryButtonFill content="Button" contentPadding="21px 30px" />
          <SecondaryButtonFill content="Button" contentPadding="25px 40px" />
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
    </div>
  );
}

export default Guide;
