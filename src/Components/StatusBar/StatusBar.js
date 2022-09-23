/* eslint-disable react/prop-types */
import React from 'react';
import Slider from '@material-ui/core/Slider';
import './StatusBar.scss';

export default class StatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { step, disabled } = this.props;
    return (
      <div>
        {step ? (
          <Slider
            defaultValue={step}
            step={1}
            marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
              label: i,
              value: i,
            }))}
            min={1}
            max={10}
            disabled={disabled}
          />
        ) : (
          <Slider
            defaultValue={1}
            step={1}
            marks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
              label: i,
              value: i,
            }))}
            min={1}
            max={10}
            disabled={disabled}
          />
        )}
      </div>
    );
  }
}
