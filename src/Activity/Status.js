/* eslint-disable react/prop-types */
/* eslint lines-between-class-members: ["error", "never"] */
import React, { useEffect } from 'react';
import './Status.scss';

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
    this.inputRef3 = React.createRef();
    this.inputRef4 = React.createRef();
  }
  render() {
      const { step } = this.props;
      setTimeout(() => {
        console.log(step);
        if (step === '1') {
          this.inputRef1.current.style.width = '0';
        }
        if (step === '2') {
          this.inputRef2.current.style.width = '150px';
        }
        if (step === '3') {
          this.inputRef3.current.style.width = '350px';
        }
        if (step === '4') {
          this.inputRef4.current.style.width = '510px';
        }
      }, 1000);

      return (
        <div className="status">
          <ol
            className={
              (step === '1' ? 'step1' : null) || (step === '2' ? 'step2' : null) || (step === '3' ? 'step3' : null) || (step === '4' ? 'step4' : null)
            }
          >
            <li>
              <p>Curating</p>
              <span ref={this.inputRef1} />
            </li>
            <li>
              <p>DAO Voted</p>
              <span ref={this.inputRef2} />
            </li>
            <li>
              <p>Market Sale</p>
              <span ref={this.inputRef3} />
            </li>
            <li>
              <p>Sold Out</p>
              <span ref={this.inputRef4} />
            </li>
          </ol>
        </div>
      );
  }
}
