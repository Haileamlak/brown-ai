import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import Card from '../../components/ServiceCard/ServiceCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home: React.FC = () => {
    return (
        <>
            <div className="landing-container container">
                <div className='landing-left'>
                    <h1>Brown AI</h1>
                    <p>We craft softwares people need using <span style={{ fontWeight: 'bold', color: '#ac663e' }}>Artificial Intelligence</span> and other state-of-the-art technologies.</p>

                    <button className="btn btn-orange">Contact Us</button>
                </div>
                <div className='landing-right'>
                    <img src="src/assets/brownlogo.svg" alt="Logo" width={300} />
                </div>
            </div>
            <div className='services-container container'>
                <h2>We build</h2>
                

                <div className='services-cards'>

                    <ServiceCard imageUrl='src/assets/ai-agent.png' text='AI Agents' />
                    <ServiceCard imageUrl='src/assets/agentic-mobile-app.png' text='Agentic Mobile Apps' />
                    <ServiceCard imageUrl='src/assets/ai-model.png' text='AI Models' />
                    <ServiceCard imageUrl='src/assets/ai-chatbot.png' text='Chatbots' />
                    <ServiceCard imageUrl='src/assets/AI-Plugin.png' text='AI Plugins' />
                </div>
                <h2>in addition to the usual and typical</h2>

                <div className='services-cards'>

                    <ServiceCard imageUrl='src/assets/web-app.png' text='Web Apps' />
                    <ServiceCard imageUrl='src/assets/mobile-app.png' text='Mobile Apps' />
                    <ServiceCard imageUrl='src/assets/website.png' text='Websites' />
                    <ServiceCard imageUrl='src/assets/API.png' text='APIs' />
                    <ServiceCard imageUrl='src/assets/browser-extension.png' text='Browser Extensions' />
                    <ServiceCard imageUrl='src/assets/desktop-app.png' text='Desktop Apps' />
                </div>
            </div>
        </>
    );
};

export default Home;
