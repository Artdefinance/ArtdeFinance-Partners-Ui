/* eslint-disable react/prop-types */
import React from 'react';
import './Input.scss';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ischecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ischecked: e.target.checked,
    });
  };

  render() {
    const { ischecked } = this.state;
    const { chkId, chkName, content, chkType, disabled } = this.props;

    const chkboxChecked = {
      backgroundImage: 'url(/assets/images/component/default_checkbox_on.png)',
    };
    const chkboxUnChecked = {
      backgroundImage: 'url(/assets/images/component/default_checkbox.png)',
    };
    const disabledChecked = {
      backgroundImage: 'url(/assets/images/component/disabled_checkbox.png)',
    };
    return (
      <div className="checkbox_wrap">
        <label htmlFor={chkId}>
          {disabled === 'true' ? (
            <i className="ico_chkbox" style={disabledChecked} />
          ) : (
            <>
              <input
                type="checkbox"
                id={chkId}
                name={chkName}
                value=""
                checked={ischecked}
                onChange={this.handleChange}
                className={chkType}
              />
              <i
                className="ico_chkbox"
                style={ischecked ? chkboxChecked : chkboxUnChecked}
              />
            </>
          )}
          {content}
        </label>
      </div>
    );
  }
}
