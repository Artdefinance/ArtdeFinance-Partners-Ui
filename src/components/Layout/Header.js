import './Header.scss';
import Navbar from './Navbar';
import PrimaryButton from '../Button/PrimaryButton';

function Header() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="head_wrap">
      <h1 style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></h1>
      <div className="head_search">
        <input type="text" placeholder="Search by Artwork, Artist and Keywords..." className="search_input" />
      </div>
      <Navbar />
      <PrimaryButton content="Connet to Wallet" type="type1" disabled="false" />
    </div>
  );
}

export default Header;
