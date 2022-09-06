/* eslint-disable react/prop-types */
import './Activity.scss';
import Icons from '../Components/Icons/Icons';

function Side() {
  const artDatas = [
    {
      id: '1',
      artist: 'Vincent van Gogh Tauba Auerbach Ryan Trecartin',
      title: 'Two Paintings (from the Paintings series) Spring Flowers',
      year: '2001',
      edition: '#3547A',
      medium: 'Screenprint in colors on Saunders Waterford 425gsm pape',
      sign: 'Include Signed',
      dimensions: 'W 203.2 × D 203.2 cm x H 203.2 cm \n(80 × 80 × 80 in.)',
      condition: 'Excellent',
    },
  ];
  const backgroundStyle = [
    '/assets/images/page/activity/img_square_dummy.png',
  ];
  return (
    <div className="activity-side">
      <span style={{ backgroundImage: `url(${backgroundStyle})` }} className="activity-side__img" />
      <button type="button" className="activity-side__more">
        <Icons shape="expand" />
        <p>View Image</p>
      </button>
      <div>
        {
          artDatas.map((items) => (
          <div className="activity-side__list" key={items.id}>
            <div className="activity-side__item">
              <p className="activity-side__title">Artist</p>
              <p className="activity-side__text">{items.artist}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Title</p>
              <p className="activity-side__text">{items.title}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Creation Year</p>
              <p className="activity-side__text">{items.year}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Edition</p>
              <p className="activity-side__text">{items.edition}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Medium</p>
              <p className="activity-side__text">{items.medium}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Artist Sign</p>
              <p className="activity-side__text">{items.sign}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Artist Sign</p>
              <p className="activity-side__text">{items.sign}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Dimensions</p>
              <p className="activity-side__text">{items.dimensions}</p>
            </div>
            <div className="activity-side__item">
              <p className="activity-side__title">Condition</p>
              <p className="activity-side__text">{items.condition}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Side;
