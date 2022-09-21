/* eslint-disable react/prop-types */
import React from 'react';
import './Dropdown.scss';

export default class CountryDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      getDropTitle: '',
      country: 'global',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleClick2(e) {
    this.setState((prevState) => ({
      getDropTitle: e.target.innerText,
      isToggleOn: !prevState.isToggleOn,
      country: e.target.innerText.toLowerCase().split(' ').pop(' ').concat('_'),
    }));
  }

  render() {
    const { isToggleOn, getDropTitle, country } = this.state;
    const { dropWidth, dropHeight, dropFontSize, dropTitle, content } = this.props;
    const dropdownStyle = {
      width: dropWidth,
      height: dropHeight,
      fontSize: dropFontSize,
    };
    return (
      <div className="dropdown country-dropdown" style={dropdownStyle}>
        <button
          type="button"
          className={isToggleOn ? 'dropdown__title active' : 'dropdown__title'}
          onClick={this.handleClick}
          style={dropdownStyle}
        >
          <i
            className="dropdown__title-icon"
            style={{
              backgroundImage: `url(/assets/images/component/icon_${country}.png)`,
            }}
          />
          <span>{getDropTitle === '' ? dropTitle : getDropTitle}</span>
        </button>
        <div
          className={isToggleOn ? 'dropdown__list active' : 'dropdown__list'}
          style={{ width: dropWidth }}
        >
          {content && content.map((items) => (
              <button
                type="button"
                className="dropdown__item"
                key={items.id}
                onClick={this.handleClick2}
              >
                <i
                  className="dropdown__country"
                  style={{
                    backgroundImage: `url(/assets/images/component/icon_${items.country}.png)`,
                  }}
                />
                <span>{items.title}</span>
              </button>
            ))}
        </div>
      </div>
    );
  }
}
