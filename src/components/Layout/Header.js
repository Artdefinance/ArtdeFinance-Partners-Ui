import './Header.scss';
import Navbar from './Navbar';
import PrimaryButton from '../Button/PrimaryButton';
import Icons from '../Icons/Icons';

function Header() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="head_wrap">
      <h1 style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></h1>
      <Navbar />
      <Icons shape="close" width="24px" height="24px" color="#555555" />
      <PrimaryButton content="Connet to Wallet" type="type1" disabled="false" />
    </div>
  );
}

export default Header;
