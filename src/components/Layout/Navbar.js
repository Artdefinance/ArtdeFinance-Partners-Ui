import React from 'react';
import './Navbar.scss';
import Dropdown from '../Dropdown/Dropdown';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const menuItems = [
      {
        id: '1',
        title: 'MP-sub01',
      },
      {
        id: '2',
        title: 'MP-sub02',
      },
      {
        id: '3',
        title: 'MP-sub03',
      },
    ];
    return (
      <nav className="navigation">
        <ul className="nav_menu">
          <li className="nav_item">
            <a>Art Dao</a>
          </li>
          <li className="nav_item" onMouseLeave={this.handleLeave}>
            <Dropdown dropWidth="" dropHeight="100%" dropTitle="Market Place" dropClass="menu_dropdown" content={menuItems} />
          </li>
          <li className="nav_item">
            <a>Art Loan</a>
          </li>
          <li className="nav_item">
            <a>Community</a>
          </li>
          <li className="nav_item">
            <a>Partners</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
