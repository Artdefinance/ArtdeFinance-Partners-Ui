/* eslint-disable react/prop-types */
import React from 'react';
import StatusBar from '../Components/StatusBar/StatusBar';

export default class Evaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1); // 1초
    return (
      <div className="curation-evaluation__list">
        <div className="curation-evaluation__item">
          <div className="curation-evaluation__header">
            <div>
              <p className="curation-evaluation__title">
                Artwork Trend
              </p>
            </div>
            <p className="curation-evaluation__desc">
            Artwork’s position in current art scene based on artwork’s creteria.
            </p>
            <StatusBar step="6" disabled="true" />
          </div>
        </div>
        <div className="curation-evaluation__item">
          <div className="curation-evaluation__header">
            <div>
              <p className="curation-evaluation__title">
                Artist Status
              </p>
            </div>
            <p className="curation-evaluation__desc">
              Artwork’s position in current art scene based on artwork’s
              creteria.
            </p>
            <StatusBar step="3" disabled="true" />
          </div>
        </div>
        <div className="curation-evaluation__item">
          <div className="curation-evaluation__header">
            <div>
              <p className="curation-evaluation__title">
                Resell Prospects
              </p>
            </div>
            <p className="curation-evaluation__desc">
              Artwork’s position in current art scene based on artwork’s
              creteria.
            </p>
            <StatusBar step="4" disabled="true" />
          </div>
        </div>
        <div className="curation-evaluation__item">
          <div className="curation-evaluation__header">
            <div>
              <p className="curation-evaluation__title">Originality</p>
            </div>
            <p className="curation-evaluation__desc">
              Artwork’s position in current art scene based on artwork’s
              creteria.
            </p>
            <StatusBar step="5" disabled="true" />
          </div>
        </div>
      </div>
    );
  }
}
