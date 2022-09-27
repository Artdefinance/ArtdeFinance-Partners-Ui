/* eslint-disable react/prop-types */
import React from 'react';
import './ProcessAnimation.scss';

class ProcessAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valuesIndex: 0,
    };
  }

  render() {
    const { valuesIndex } = this.state;
    const { length, children, values } = this.props;
    setTimeout(() => {
      this.setState({
        valuesIndex: 1 % length,
      });
    }, 1000);
    return children(values[valuesIndex]);
  }
}

export default ProcessAnimation;
