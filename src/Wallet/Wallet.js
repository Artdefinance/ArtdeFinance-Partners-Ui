import React, { useState } from 'react';
import './Wallet.scss';
import { motion } from 'framer-motion';

export default class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleOn2: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickClose = this.clickClose.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => ({
      [e.target.value]: !prevState[e.target.value],
    }));
  }

  clickClose(e) {
    console.log(e.target.className);
    this.setState(() => ({
      [e.target.value]: false,
    }));
  }

  render() {
    const { isToggleOn, isToggleOn2 } = this.state;
    const style = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    };
    return (
      <div>
        <div className="question-bubble">
          <button type="button" onClick={ this.handleClick } value="isToggleOn">
            클릭
          </button>
          <motion.div
            animate={isToggleOn === true ? style.open : style.closed}
            className="question-bubble__wrap"
          >
              Among the registered works,
              <br />
              sold in the market. Total quantity.
            <button type="button" onClick={this.clickClose} value="isToggleOn">
              <span>닫기</span>
            </button>
          </motion.div>
        </div>
        <div className="question-bubble">
          <button type="button" onClick={ this.handleClick } value="isToggleOn2">
            클릭2
          </button>
          <motion.div
            animate={isToggleOn2 === true ? style.open : style.closed}
            className="question-bubble__wrap"
          >
            <span>
              Among the registered works,
              <br />
              sold in the market. Total quantity.
            </span>
            <button type="button" onClick={this.clickClose} value="isToggleOn2">
              <span>닫기</span>
            </button>
          </motion.div>
        </div>
      </div>
    );
  }
}
