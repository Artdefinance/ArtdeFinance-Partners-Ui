/* eslint-disable react/prop-types */
import React from 'react';
import './Input.scss';
import Icons from '../Icons/Icons';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value2: '',
      isClearButton: false,
      isClearButton2: true,
    };
    this.showCloseButton = this.showCloseButton.bind(this);
    this.clearText = this.clearText.bind(this);
    this.inputTarget = React.createRef();
  }

  componentDidMount() {
    const { getValue, isShowCloseButton } = this.props;

    this.setState(() => ({
      value2: getValue,
    }));

    if (isShowCloseButton) {
      this.setState(() => ({
        isClearButton2: true,
      }));
    } else {
      this.setState(() => ({
        isClearButton2: false,
      }));
    }
  }

  showCloseButton(e) {
    const { onChangeValue } = this.props;

    if (typeof onChangeValue === 'function') {
      onChangeValue(e.target.value);
    }

    if (e.target.value === '') {
      this.setState(() => ({
        [e.target.name]: false,
        isClearButton: false,
        value: '',
        value2: '',
      }));
    } else if (e.target.value !== '') {
      this.setState(() => ({
        value: e.target.value,
        value2: e.target.value,
        isClearButton: true,
      }));
    }
    if (e.target.value && [e.target.name]) {
      this.setState(() => ({
        [e.target.name]: true,
        isClearButton: true,
      }));
    }
  }

  clearText() {
    const { onChangeValue } = this.props;
    if (typeof onChangeValue === 'function') {
      onChangeValue('');
    }

    this.setState(() => ({
      isClearButton: false,
      value2: '',
      isClearButton2: false,
    }));
    this.inputTarget.current.value = '';
  }

  render() {
    const { value, isClearButton, value2, isClearButton2 } = this.state;
    const { name, disabled, placeholder, getValue } = this.props;
    return (
      <div className={disabled === 'true' ? 'input disabled' : 'input'}>
        <div className="input__input-box">
          {disabled === 'true' ? (
            <input
              type="text"
              className="input__input"
              placeholder={placeholder}
              name={name}
              onChange={this.showCloseButton}
              value={value}
              disabled
            />
          ) : (
            <div>
              {getValue === '' ? (
                <input
                  type="text"
                  className="input__input"
                  placeholder={placeholder}
                  name={name}
                  onChange={this.showCloseButton}
                  value={value}
                />
              ) : (
                <input
                  type="text"
                  className="input__input"
                  placeholder={placeholder}
                  name={name}
                  onChange={this.showCloseButton}
                  value={value2}
                  ref={this.inputTarget}
                />
              )}
            </div>
          )}
          {isClearButton || isClearButton2 ? (
            <button type="button" onClick={this.clearText} name={name}>
              <Icons shape="close-circle" />
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
