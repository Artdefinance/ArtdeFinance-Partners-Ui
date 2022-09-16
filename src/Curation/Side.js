/* eslint-disable react/prop-types */
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
      owner: 'Art de finance gallery labs',
    },
  ];
  const backgroundStyle = [
    '/assets/images/page/activity/img_square_dummy.png',
  ];
  return (
    <div className="curation-side">
      <span style={{ backgroundImage: `url(${backgroundStyle})` }} className="curation-side__img" />
      <button type="button" className="curation-side__more">
        <Icons shape="expand" />
        <p>View Image</p>
      </button>
      <div>
        {
          artDatas.map((items) => (
          <div className="curation-side__list" key={items.id}>
            <div className="curation-side__item">
              <p className="curation-side__title">Artist</p>
              <p className="curation-side__text">{items.artist}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Title</p>
              <p className="curation-side__text">{items.title}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Creation Year</p>
              <p className="curation-side__text">{items.year}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Edition</p>
              <p className="curation-side__text">{items.edition}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Medium</p>
              <p className="curation-side__text">{items.medium}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Artist Sign</p>
              <p className="curation-side__text">{items.sign}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Artist Sign</p>
              <p className="curation-side__text">{items.sign}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Dimensions</p>
              <p className="curation-side__text">{items.dimensions}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Condition</p>
              <p className="curation-side__text">{items.condition}</p>
            </div>
            <div className="curation-side__item">
              <p className="curation-side__title">Owner</p>
              <p className="curation-side__text">{items.owner}</p>
            </div>
            <div className="curation-side__result">
              <p className="curation-side__result-title">Suggested Price</p>
              <div className="curation-side__box">
                <p>1,500,000.00</p>
                <span>USD</span>
              </div>
              <div className="curation-side__box">
                <p>1,500,000.00</p>
                <span>BUSD</span>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Side;
