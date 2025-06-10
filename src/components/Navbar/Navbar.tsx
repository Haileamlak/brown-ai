import Button from '../Button/Button';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="navbar container">
      <div className="nav-left">
              <Link to="/" className="logo">
              <img src="src/assets/brownlogo.png" alt="Logo" />
              </Link>
              <nav className="nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/cookbooks">Cookbooks</Link>
                  <Link to="/internships">Internships</Link>
                  <Link to="/about">About</Link>
              </nav>
      </div>
      <div className="nav-right">
              <Button text="Contact Us" onClick={() => window.location.href = '/contact'} imageSrc="src/assets/brown-button-icon.png" />
              
        <div className="nav-toggle">
          <img className="menu-icon" src="src/assets/menu-bar.png" alt="Menu Icon" />
        </div>
          </div>
          
    </header>
  );
};

export default Navbar;
