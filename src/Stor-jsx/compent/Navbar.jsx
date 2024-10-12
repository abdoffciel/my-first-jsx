import { Link } from 'react-router-dom';
import './Navbar.css';
import OIpo from './OIpo.png';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={OIpo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listProd">Products</Link>
        </li>
        <li>
          <Link to="/cartlist">Cart ({cartCount})</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
