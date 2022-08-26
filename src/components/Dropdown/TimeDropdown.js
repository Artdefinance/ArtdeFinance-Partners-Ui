/* eslint-disable react/prop-types */
import React from 'react';
import './DateDropdown.scss';

export default class DateDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 'Hours',
      isToggleOn: false,
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
      hour: e.target.innerText,
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { hour, isToggleOn } = this.state;
    const { dropWidth, disabled, content } = this.props;
    const iconStyle = {
      backgroundImage: 'url(/assets/images/component/alarm.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const arrowStyle = {
      backgroundImage: 'url(/assets/images/component/arrow_down.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div>
        {disabled ? (
          <div className="date-dropdown disabled" style={{ width: dropWidth }}>
            <button
              type="button"
              className="date-dropdown__button"
              style={{ width: dropWidth }}
              onClick={this.handleClick}
            >
              <div style={iconStyle} className="date-dropdown__icon">
                <span className="a11y">달력 아이콘</span>
              </div>
              <span className="date-dropdown__data">{hour}</span>
              <div style={arrowStyle} className="date-dropdown__arrow">
                <span className="a11y">아래 화살표 아이콘</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="date-dropdown" style={{ width: dropWidth }}>
            <button
              type="button"
              className={
                isToggleOn
                  ? 'date-dropdown__button active'
                  : 'date-dropdown__button'
              }
              style={{ width: dropWidth }}
              onClick={this.handleClick}
            >
              <div style={iconStyle} className="date-dropdown__icon">
                <span className="a11y">달력 아이콘</span>
              </div>
              <span className="date-dropdown__data">{hour}</span>
              <div style={arrowStyle} className="date-dropdown__arrow">
                <span className="a11y">아래 화살표 아이콘</span>
              </div>
            </button>
            <div className={isToggleOn ? 'dropdown__list active' : 'dropdown__list'} style={{ width: dropWidth }}>
              {isToggleOn ? (
                content && content.map((items) => (
                  <button type="button" className="dropdown__item" key={items.id} onClick={this.handleClick2}>
                    <span>{items.title}</span>
                  </button>
                ))
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}
