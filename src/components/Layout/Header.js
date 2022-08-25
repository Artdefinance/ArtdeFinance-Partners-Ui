import './Header.scss';
import Navbar from './Navbar';
import Button from '../Button/Button';

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
      <Button>Connet to Wallet</Button>
    </div>
  );
}

export default Header;
