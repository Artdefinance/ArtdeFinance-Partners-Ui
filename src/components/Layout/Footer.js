import { useId } from 'react';
import { Link } from 'react-router-dom';
import CommuityLogoIcons from '../Icons/CommunityLogoIcons';
import './Footer.scss';

function Footer() {
  const emailId = useId();

  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/foo_logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="foo_wrap">
      <div className="inner inner-top">
        <div className="footer-subscribe">
          <strong className="footer-subtitle">Stay in the loop</strong>
          <p className="footer-message">
            Get the latest updates of Art de Finance from the team and trends that
            shape the global art market with our newsletter.
          </p>
          <form onSubmit={(event) => event.preventDefault()} className="footer-subscribe__form">
            <label htmlFor={emailId} className="footer-subscribe__label">
              <span className="a11y">email</span>
              <input type="email" className="footer-subscribe__input" id={emailId} placeholder="Your email address" required />
            </label>
            <button type="submit" className="footer-subscribe__submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-channel">
          <strong className="footer-subtitle">Join the community</strong>
          <Link to="/" className="footer-channel__link">
            <span className="a11y">instagram</span>
            <CommuityLogoIcons type="instagram" />
          </Link>
          <Link to="/" className="footer-channel__link">
            <span className="a11y">discord</span>
            <CommuityLogoIcons type="discord" />
          </Link>
          <Link to="/" className="footer-channel__link">
            <span className="a11y">twitter</span>
            <CommuityLogoIcons type="twitter" />
          </Link>
          <Link to="/" className="footer-channel__link">
            <span className="a11y">medium</span>
            <CommuityLogoIcons type="medium" />
          </Link>
          <Link to="/" className="footer-channel__link">
            <span className="a11y">reddit</span>
            <CommuityLogoIcons type="reddit" />
          </Link>
        </div>
      </div>
      <div className="inner inner-btm">
        <div>
          <div style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></div>
          <p className="footer-message">
            The world’s first and largest digital marketplace for
            crypto collectibles and non-fungible tokens(NFRs).
            Buy, sell, and discover exclusive digital items.
          </p>
        </div>
        <div className="footer-sitemap">
          <div className="footer-sitemap__group">
            <Link to="/" className="footer-sitemap__link-head">Marketplace</Link>
            <Link to="/" className="footer-sitemap__link">All NFTs</Link>
            <Link to="/" className="footer-sitemap__link">Solana NFTs</Link>
            <Link to="/" className="footer-sitemap__link">Art</Link>
            <Link to="/" className="footer-sitemap__link">collectibies</Link>
            <Link to="/" className="footer-sitemap__link">Domain Names</Link>
            <Link to="/" className="footer-sitemap__link">Music</Link>
            <Link to="/" className="footer-sitemap__link">Photography</Link>
            <Link to="/" className="footer-sitemap__link">Sports</Link>
            <Link to="/" className="footer-sitemap__link">Trading Cards</Link>
            <Link to="/" className="footer-sitemap__link">Utility</Link>
            <Link to="/" className="footer-sitemap__link">Virtual Worlds</Link>
          </div>
          <div className="footer-sitemap__group">
            <Link to="/" className="footer-sitemap__link-head">My Account</Link>
            <Link to="/" className="footer-sitemap__link">Profile</Link>
            <Link to="/" className="footer-sitemap__link">Favorites</Link>
            <Link to="/" className="footer-sitemap__link">Watchlist</Link>
            <Link to="/" className="footer-sitemap__link">My Collections</Link>
            <Link to="/" className="footer-sitemap__link">Settings</Link>
            <Link to="/" className="footer-sitemap__link-head">Stats</Link>
            <Link to="/" className="footer-sitemap__link">Rankings</Link>
            <Link to="/" className="footer-sitemap__link">Activity</Link>
          </div>
          <div className="footer-sitemap__group">
            <Link to="/" className="footer-sitemap__link-head">Resources</Link>
            <Link to="/" className="footer-sitemap__link">Help Center</Link>
            <Link to="/" className="footer-sitemap__link">Platform Status</Link>
            <Link to="/" className="footer-sitemap__link">Partners</Link>
            <Link to="/" className="footer-sitemap__link">Gas-Free Marketplace</Link>
            <Link to="/" className="footer-sitemap__link">Taxes</Link>
            <Link to="/" className="footer-sitemap__link">Blog</Link>
            <Link to="/" className="footer-sitemap__link">Docs</Link>
            <Link to="/" className="footer-sitemap__link">Newsletter</Link>
          </div>
          <div className="footer-sitemap__group">
            <Link to="/" className="footer-sitemap__link-head">Company</Link>
            <Link to="/" className="footer-sitemap__link">About</Link>
            <Link to="/" className="footer-sitemap__link">Careers</Link>
            <Link to="/" className="footer-sitemap__link">Ventures</Link>
            <Link to="/" className="footer-sitemap__link">Grants</Link>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="inner">
          <div className="footer-copy">2022 ArtdeFinance Labs, Inc</div>
          <div className="footer-policy">
            <Link to="/" className="footer-policy__link">Privacy Policy</Link>
            <Link to="/" className="footer-policy__link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
