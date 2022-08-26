/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class CheckButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      isToggleOn: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      selected: e.target.value,
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    const { selected, isToggleOn } = this.state;
    const { value, content, widthStyle, heightStyle } = this.props;
    const radioStyle = {
      width: widthStyle,
      height: heightStyle,
    };
    const checkStyle = {
      backgroundImage: 'url(/assets/images/component/check_false.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const checkActiveStyle = {
      backgroundImage: 'url(/assets/images/component/check_true.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div className="radio-button check-button">
        <label
          htmlFor={value}
          className="radio-button__label"
          style={radioStyle}
        >
          <input
            type="radio"
            className={
              isToggleOn === false
                ? 'radio-button__button'
                : 'radio-button__button active'
            }
            name="radio"
            value={value}
            style={radioStyle}
            checked={selected === value}
            onChange={this.handleChange}
          />
          <span>
            <i
              className="radio-button__icon"
              style={isToggleOn === false ? checkStyle : checkActiveStyle}
            />
            {content}
          </span>
        </label>
      </div>
    );
  }
}
