/* eslint-disable react/prop-types */
import React from 'react';
import './Buttons.scss';

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange = () => {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked,
    }));
  };

  render() {
    const { value, name, content, widthStyle, pressFucn, isChecked } = this.props;
    const radioStyle = {
      width: widthStyle,
    };
    return (
      <div
        onClick={() => {
          if (pressFucn !== undefined) {
            pressFucn();
          }
        }}
        className="radio-button"
      >
        <label
          htmlFor={value}
          className="radio-button__label"
          style={radioStyle}
        >
          <input
            type="radio"
            className="radio-button__button"
            name={`radio-${name}`}
            id={value}
            value={value}
            defaultChecked={isChecked}
            style={radioStyle}
            onChange={this.handleChange}
          />
          <span>
            {content.split('<br/>').map((txt) => (
              <>
                {txt}
                <br />
              </>
            ))}
          </span>
        </label>
      </div>
    );
  }
}
