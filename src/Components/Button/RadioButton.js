/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
  };

  render() {
    const { selected } = this.state;
    const { value, content, widthStyle } = this.props;
    const radioStyle = {
      width: widthStyle,
    };
    return (
      <div className="radio-button">
        <label htmlFor={value} className="radio-button__label" style={radioStyle}>
          <input
            type="radio"
            className="radio-button__button"
            name="radio"
            value={value}
            style={radioStyle}
            checked={selected === value}
            onChange={this.handleChange}
          />
          <span>{content}</span>
        </label>
      </div>
    );
  }
}
