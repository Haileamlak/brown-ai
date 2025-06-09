import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import Card from '../../components/ServiceCard/ServiceCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TextCard from '../../components/TextCard/TextCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BulletCard from '../../components/BulletCard/BulletCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
    return (
        <>
            <div className="landing-container container">
                <div className='landing-left'>
                    <h1>Brown AI</h1>
                    <p>We craft softwares people need using <span style={{ fontWeight: 'bold', color: '#c07a35' }}>Artificial Intelligence</span> and other state-of-the-art technologies.</p>

                    <button className="btn btn-orange">Contact Us</button>
                </div>
                <div className='landing-right'>
                    <img src="src/assets/brownlogo.png" alt="Logo" width={300} />
                    
                </div>
            </div>
            <div className='services-container container'>
                <h2>We develop</h2>


                <div className='services-cards'>

                    <ServiceCard imageUrl='src/assets/ai-agent.png' text='AI Agents' />
                    <ServiceCard imageUrl='src/assets/agentic-mobile-app.png' text='Agentic Apps' />
                    <ServiceCard imageUrl='src/assets/ai-model.png' text='AI Models' />
                    <ServiceCard imageUrl='src/assets/ai-chatbot.png' text='Chatbots' />
                    <ServiceCard imageUrl='src/assets/AI-Plugin.png' text='AI Plugins' />
                </div>
                <h2 style={{ fontWeight: 400 }}><img src="src/assets/turn-right.png" alt="Arrow" width={24} /> in addition to the usual and typical</h2>

                <div className='services-cards'>

                    <ServiceCard imageUrl='src/assets/web-app.png' text='Web Apps' />
                    <ServiceCard imageUrl='src/assets/mobile-app.png' text='Mobile Apps' />
                    <ServiceCard imageUrl='src/assets/website.png' text='Websites' />
                    <ServiceCard imageUrl='src/assets/API.png' text='APIs' />
                    <ServiceCard imageUrl='src/assets/browser-extension.png' text='Browser Extensions' />
                    <ServiceCard imageUrl='src/assets/desktop-app.png' text='Desktop Apps' />
                </div>
            </div>

            <div className='vision-container container'>
                <h2>Our Vision</h2>
                    <p>We aim to build a world where AI is accessible to everyone, enabling individuals and businesses to harness its power for innovation and growth.</p>
                <div className='vision-box'>
                    
                </div>
                {/* <div className='vision-card'> */}
                {/* </div> */}
            </div>

           
            <div className='projects-container container'>
                <h2>Latest Projects</h2>
                <div className='projects-cards'>
                    <ProjectCard title="Y Combinator Website" description="A platform for startup funding and resources that connects entrepreneurs with investors." imageUrl="src/assets/project-image-1.png" link="https://www.ycombinator.com/" />
                    <ProjectCard title="Youtube" description="A video sharing platform that allows users to upload, view, and share videos." imageUrl="src/assets/project-image-2.png" link="https://www.youtube.com/" />
                    <ProjectCard title="MK Tube" description="A live and on-demand video streaming platform for mahibere kidusan tv." imageUrl="src/assets/project-image-3.png" link="https://www.mktube.com/" />
                </div>
            </div>

            <div className='how-container container'>
                <h2>This is how we build.</h2>

                <div className='how-cards-container'>
                    <div className='how-cards'>
                        <BulletCard text="We prioritize real-world impact over buzzwords." />
                        <BulletCard text="We ship fast — no endless cycles or bloated specs." />
                        <BulletCard text="We partner with you — not just take orders." />
                        <BulletCard text="We build around your users — not just your idea." />
                    </div>
                    <div className='how-cards'>

                        <BulletCard text="We use AI where it matters — to create, not complicate." />
                        <BulletCard text="We stay lean, focused, and honest — always." />
                        <BulletCard text="We measure success by the problems we solve — not the hours we bill." />
                        <BulletCard text="We’re here to make software that matters." />
                    </div>
                </div>
            </div>

            {/* hear more from others */}
            <div className='testimonials-container container'>
                <h2>Hear more from our clients.</h2>
                <div className='testimonials-cards'>
                    <TestimonialCard
                        text="Brown AI transformed our business with their innovative solutions."
                        author="Sundar Pichai"
                        jobTitle="CEO, Google"
                        imageUrl="src/assets/sundar-pichai.png"
                    />
                    <TestimonialCard
                        text="The team at Brown AI is incredibly talented and dedicated."
                        author="Satya Nadella"
                        jobTitle="CEO, Microsoft"
                        imageUrl="src/assets/satya-nadella.png"
                    />
                    <TestimonialCard
                        text="We saw immediate results after implementing their AI strategies."
                        author="Elon Musk"
                        jobTitle="CEO, SpaceX"
                        imageUrl="src/assets/elon-musk.png" 
                    />
                </div>
            </div>

            <div className='footer-container container'>
                <Footer />
            </div>
        </>
    );
};

export default Home;
