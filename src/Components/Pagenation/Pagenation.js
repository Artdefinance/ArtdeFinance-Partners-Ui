/* eslint-disable react/prop-types */
import './Pagenation.scss';
import Icons from '../Icons/Icons';

function Pagenation() {
  return (
    <div className="pagenation">
      <button type="button" className="pagenation__arrow arrow-left">
        <Icons shape="pagenation-left" width="24px" height="24px" />
        {/* <Icons shape="pagenation-left--black" width="24px" height="24px" /> */}
        <span className="a11y">왼쪽 페이지로 이동 화살표</span>
      </button>
      <div className="pagenation__list">
        <button type="button" className="pagenation__button active">1</button>
        <button type="button" className="pagenation__button">2</button>
        <button type="button" className="pagenation__button">3</button>
        <button type="button" className="pagenation__button">4</button>
        <button type="button" className="pagenation__button">5</button>
        <button type="button" className="pagenation__button pagenation__more">...</button>
        <button type="button" className="pagenation__button">744</button>
      </div>
      <button type="button" className="pagenation__arrow arrow-right">
        <Icons shape="pagenation-right" width="24px" height="24px" />
        {/* <Icons shape="pagenation-right--gray" width="24px" height="24px" /> */}
        <span className="a11y">오른쪽 페이지로 이동 화살표</span>
      </button>
      <div className="go-page">
        <p>Go to page</p>
        <div className="go-page__wrap">
          <input type="text" maxLength="5" />
          <button type="button">
            <Icons shape="pagenation-right" width="24px" height="24px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagenation;
