import './Guide.scss';
import Dropdown from '../components/Dropdown/Dropdown';
import DateDropdown from '../components/Dropdown/DateDropdown';
import TimeDropdown from '../components/Dropdown/TimeDropdown';
import CountryDropdown from '../components/Dropdown/CountryDropdown';

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
  return (
    <div className="guide">
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
