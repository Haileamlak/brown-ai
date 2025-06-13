// footer
import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import Button from '../Button/Button';
import ContactModal from '../ContactModal/ContactModal';

const Footer: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-action">

                        <Button text="Contact Us" onClick={() => setModalOpen(true)} imageSrc='./assets/brown-button-icon.png' />
                        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

                        <img src="./assets/brownlogo4.png" alt="Brown AI Logo" className='footer-logo1' />
                    </div>
                    {/* <div className="footer-links">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/projects">Projects</a>
                        <a href="/cookbooks">Cookbooks</a>
                        <a href='/internships'>Internships</a>
                        <a href="/about">About</a>
                    </div> */}
                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <p><span style={{ fontWeight: 'bold' }}>Email:</span> <a href="mailto:info.brown.ai@gmail.com">info.brown.ai@gmail.com</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Phone:</span> <a href="tel:+251906397248">+251 906 397 248</a></p>
                        <p><span style={{ fontWeight: 'bold' }}>Address:</span> Brown AI St, AI City, AI Country</p>
                    </div>
                    <img src="./assets/brownlogo4.png" alt="Brown AI Logo" className='footer-logo2' width={200} />

                </div>
                <div className="footer-bottom">
                    <p className='footer-copy'>&copy; {new Date().getFullYear()} Brown AI. All rights reserved.</p>
                    <p className='footer-copy'>Design inspired by Y Combinator's <a target='_blank' href='https://ycombinator.com'>website</a>.</p>
                    <div className="footer-socials">
                        <a href="https://www.twitter.com/BrownAI" target="_blank" rel="noopener noreferrer"><img src="./assets/twitter-icon.png" alt="Twitter" width={24} /></a>
                        <a href="https://www.linkedin.com/company/brown-ai" target="_blank" rel="noopener noreferrer"><img src="./assets/linkedin-icon.png" alt="LinkedIn" width={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
