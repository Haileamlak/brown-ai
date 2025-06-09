// footer
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-logo">
                        <button className="btn btn-orange">Contact Us</button>
                        <img src="src/assets/brownlogo2.png" alt="Brown AI Logo" className="footer-logo-img1" />

                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/projects">Projects</a>
                        <a href="/cookbooks">Cookbooks</a>
                        <a href='/internships'>Internships</a>
                        <a href="/about">About</a>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <p><span style={{ fontWeight: 'bold' }}>Email:</span> <a href="mailto:info@brown.ai">info@brown.ai</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Phone:</span> <a href="tel:+1234567890">+1 234 567 890</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Address:</span> Brown AI St, AI City, AI Country</p>
                    </div>
                    <img src="src/assets/brownlogo.png" alt="Brown AI Logo" className='footer-logo-img2' width={200} />

                </div>
                <div className="footer-bottom">
                    <p className='footer-copy'>&copy; {new Date().getFullYear()} Brown AI. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="https://www.twitter.com/BrownAI" target="_blank" rel="noopener noreferrer"><img src="/src/assets/twitter-icon.png" alt="Twitter" width={24} /></a>
                        <a href="https://www.linkedin.com/company/brown-ai" target="_blank" rel="noopener noreferrer"><img src="/src/assets/linkedin-icon.png" alt="LinkedIn" width={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
