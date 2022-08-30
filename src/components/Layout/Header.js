import './Header.scss';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';

function Header() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="head_wrap">
      <div className="inner">
        <h1 style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></h1>
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
