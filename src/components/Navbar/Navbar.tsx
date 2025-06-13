import React from 'react';
import Button from '../Button/Button';
import ContactModal from '../ContactModal/ContactModal';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    // const handleToggle = () => {
    //     setMenuOpen(prev => !prev);
    // };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar container">
            <div className="nav-left">
                <Link to="/" className="logo">
                    <img src="./assets/brownlogo.png" alt="Logo" />
                </Link>
                <nav className="nav-links">
                    {/* <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/cookbooks">Cookbooks</Link>
                  <Link to="/internships">Internships</Link>
                  <Link to="/about">About</Link> */}
                </nav>
            </div>
            <div className="nav-right">
                <Button text="Contact Us" onClick={() => setModalOpen(true)} imageSrc="./assets/brown-button-icon.png" />
                <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                <div className="nav-toggle">
                    <img className="menu-icon" src={`./assets/${menuOpen ? 'close' : 'menu'}-icon.png`} alt="Menu Icon" /*onClick={handleToggle}*/ style={{ width: menuOpen ? 30 : 50, marginRight: menuOpen ? 9 : 0 }} />
                </div>
            </div>
                        
            {menuOpen && (
                <div className="menu-popup-overlay">
                    <div className="menu-popup">
                        <button className="menu-close" onClick={closeMenu}><img src={`./assets/close-icon.png`} alt="Close Icon" style={{ width: 30, marginRight: 9 }} />
                        </button>
                        <ul className="popup-nav-links">
                            {/* <li><a href="#" onClick={closeMenu}>Home</a></li>
                            <li><a href="#" onClick={closeMenu}>Features</a></li>
                            <li><a href="#" onClick={closeMenu}>About</a></li>
                            <li><a href="#" onClick={closeMenu}>Contact</a></li> */}
                        </ul>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Navbar;
