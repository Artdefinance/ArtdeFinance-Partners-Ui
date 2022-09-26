/* eslint-disable react/prop-types */
/* eslint lines-between-class-members: ["error", "never"] */
import React from 'react';
import './ProcessStatus.scss';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.inputRef3 = React.createRef();
    this.inputRef4 = React.createRef();
    this.inputRef5 = React.createRef();
  }
  render() {
      const { step } = this.props;
      setTimeout(() => {
        if (step === '1') {
          this.inputRef1.current.style.width = '100px';
        }
        if (step === '2') {
          this.inputRef2.current.style.width = '320px';
        }
        if (step === '3') {
          this.inputRef3.current.style.width = '520px';
        }
        if (step === '4') {
          this.inputRef4.current.style.width = '750px';
        }
        if (step === '5') {
          this.inputRef5.current.style.width = '840px';
        }
      }, 1000);

      return (
        <div className="status">
          <ol
            className={
              (step === '1' ? 'step1' : null) || (step === '2' ? 'step2' : null) || (step === '3' ? 'step3' : null) || (step === '4' ? 'step4' : null) || (step === '5' ? 'step5' : null)
            }
          >
            <li>
              <span ref={this.inputRef1} />
            </li>
            <li>
              <span ref={this.inputRef2} />
            </li>
            <li>
              <span ref={this.inputRef3} />
            </li>
            <li>
              <span ref={this.inputRef4} />
            </li>
            <li>
              <span ref={this.inputRef5} />
            </li>
          </ol>
        </div>
      );
  }
}
