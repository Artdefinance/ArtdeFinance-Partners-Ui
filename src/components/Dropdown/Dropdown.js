/* eslint-disable react/prop-types */
import React from 'react';
import './Dropdown.scss';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      getDropTitle: '',
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
    const { content } = this.props;
    const selected = content.find(({ title }) => title === e.target.innerText);

    if (!selected) return;

    this.setState((prevState) => ({
      getDropTitle: selected.title,
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn, getDropTitle } = this.state;
    const {
      dropWidth,
      dropHeight,
      dropFontSize,
      dropFontColor,
      dropTitle,
      dropClass,
      content,
      titleIcon,
    } = this.props;
    const dropdownStyle = {
      width: dropWidth,
      height: dropHeight,
      fontSize: dropFontSize,
      color: dropFontColor,
    };
    return (
      <div className={`dropdown ${dropClass}`} style={dropdownStyle}>
        <button
          type="button"
          className={isToggleOn ? 'dropdown__title active' : 'dropdown__title'}
          onClick={this.handleClick}
          style={dropdownStyle}
        >
          <div className="dropdown__title-box">
            {
              titleIcon === undefined ? null : <div className="dropdown__title-icon">{titleIcon}</div>
            }
            <span>{getDropTitle === '' ? dropTitle : getDropTitle}</span>
          </div>
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
              <span className="dropdown__inner-text">{items.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
}
