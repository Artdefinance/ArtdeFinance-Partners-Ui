/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class RadioTabButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { data, widthStyle, heightStyle } = this.props;
    const NumberWidth = Number(widthStyle.replace('px', ''));
    const radioStyle = {
      width: widthStyle,
    };
    const radioChildStyle = {
      width: NumberWidth / data.length,
      height: heightStyle,
    };
    return (
      <div className="radio-tab" style={radioStyle}>
        {data.map((items) => (
          <label
            htmlFor={data.value}
            className="radio-tab__label"
            style={radioChildStyle}
            key={items.id}
          >
            <input
              type="checkbox"
              className="radio-tab__button"
              id={items.title}
              name={items.title}
              value={items.value}
              onChange={this.handleChange}
            />
            <span style={radioChildStyle}>{items.title}</span>
          </label>
        ))}
      </div>
    );
  }
}
