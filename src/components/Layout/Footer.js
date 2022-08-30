import './Footer.scss';

function Footer() {
  const logoStyle = {
    backgroundImage: 'url(/assets/images/common/foo_logo.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="foo_wrap">
      <div className="inner inner-top">
        <div>
          <p className="title">Stay in the loop</p>
          <span>
          Get the latest updates of Art de Finance from the team and trends that
          <br />
          shape the global art market with our newsletter.
          </span>
        </div>
        <div>
          <p className="title">Join the community</p>
        </div>
      </div>
      <div className="inner inner-btm">
        <div style={logoStyle} className="logo"><a href="/"><span className="a11y">ARTDE FINANCE</span></a></div>
      </div>
    </div>
  );
}

export default Footer;
