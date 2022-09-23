/* eslint-disable react/prop-types */
import React from 'react';
import './BreadCrumbs.scss';
import Icons from '../Icons/Icons';

export default class BreadCrumbs extends React.Component {
  render() {
    const { content1, content2, content3 } = this.props;
    return (
      <div className="breadcrumbs">
        <div className="breadcrumbs__list">
          <Icons shape="home" width="42px" height="42px" viewBox="0 0 42 42" />
          <Icons shape="arrow-right" width="24px" height="24px" />
          <p>{content1}</p>
          <Icons shape="arrow-right" width="24px" height="24px" />
          <p>{content2}</p>
          {content3 ? (
            <>
              <Icons shape="arrow-right" width="24px" height="24px" />
              <p>{content3}</p>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}
