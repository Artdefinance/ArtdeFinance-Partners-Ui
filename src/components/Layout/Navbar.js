import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav className="navigation">
        <ul className="nav_menu">
          <li className="nav_item">
            <a>Artist</a>
          </li>
          <li className="nav_item">
            <a>Art Works</a>
          </li>
          <li className="nav_item">
            <a>Curation</a>
          </li>
          <li className="nav_item">
            <a>Works Activity</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
