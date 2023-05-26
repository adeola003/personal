import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="back-btn">
      <span className='back-btn'>&larr; Back</span>
    </Link>
    <div className="header-text">Discover the world!</div>
  </nav>
);

export default Header;
