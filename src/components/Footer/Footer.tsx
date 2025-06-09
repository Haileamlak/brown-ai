// footer
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="src/assets/brownlogo.svg" alt="Brown AI Logo" width={100} />
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p><span style={{ fontWeight: 'bold' }}>Email:</span> <a href="mailto:info@brown.ai">info@brown.ai</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Phone:</span> <a href="tel:+1234567890">+1 234 567 890</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Address:</span> Brown AI St, AI City, AI Country</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className='footer-copy'>&copy; {new Date().getFullYear()} Brown AI. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="https://www.twitter.com/BrownAI" target="_blank" rel="noopener noreferrer"><img src="https://" alt="Twitter" width={24} /></a>
                        <a href="https://www.linkedin.com/company/brown-ai" target="_blank" rel="noopener noreferrer"><img src="src/assets/linkedin-icon.svg" alt="LinkedIn" width={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
