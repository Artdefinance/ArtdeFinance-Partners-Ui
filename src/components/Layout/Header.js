import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';

function Header() {
  const location = useLocation();
  let headType = '';
  if (location.pathname === '/gallery/confirm') {
    headType = 'head_white';
  }
  return (
    <div className={`head_wrap ${headType}`}>
      <div className="inner">
        <h1 className="logo">
          <a href="/path">
            <img src={`${process.env.PUBLIC_URL}/assets/images/common/logo.png`} alt="ARTDE FINANCE" />
            <span className="a11y">ARTDE FINANCE</span>
          </a>
        </h1>
        <div className="head_util">
          <Navbar />
          <Link to="#" className="link_notice">
            <span className="cnt">32</span>
            <Icons shape="notice" />
          </Link>
          <Button className="button button--black button--default" content="Connet to Wallet" type="type1" />
        </div>
      </div>
    </div>
  );
}

export default Header;
