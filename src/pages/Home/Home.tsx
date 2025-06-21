import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
// import { Link } from 'react-router-dom';
// import Card from '../../components/ServiceCard/ServiceCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
// import TextCard from '../../components/TextCard/TextCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import BulletCard from '../../components/BulletCard/BulletCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ContactModal from '../../components/ContactModal/ContactModal';

const Home: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    return (
        <>
            <div className="landing-container container">
                {/* <div className='overlay'>
                    
                </div> */}
                <video className='landing-video'
                    src="./assets/modern-app.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline

                    style={{ display: 'block', pointerEvents: 'none' }}
                />
                <div className='landing-left'>
                    <h1>Brown AI</h1>
                    <p>We craft softwares people need using <span style={{ fontWeight: 'bold', color: '#c07a35' }}>Artificial Intelligence</span> and other state-of-the-art technologies.</p>


                    <Button text="Contact Us" onClick={() => setModalOpen(true)} imageSrc='./assets/brown-button-icon.png' />
                    <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

                </div>
                {/* <div className='landing-right'>
                    <video
                        src="./assets/modern-app.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        // width={300}
                        style={{ display: 'block', pointerEvents: 'none' }}
                    />
                </div> */}
                {/* <div className='landing-action'>
                    <Button text="Contact Us" onClick={() => setModalOpen(true)} imageSrc='./assets/brown-button-icon.png' />
                    <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                </div> */}
            </div>
            <div className='services-container container'>
                <h2>We develop</h2>


                <div className='services-cards'>

                    <ServiceCard imageUrl='./assets/agentic-mobile-app.png' text='Agentic Apps' />
                    {/* <ServiceCard imageUrl='./assets/ai-model.png' text='AI Models' /> */}
                    <ServiceCard imageUrl='./assets/ai-chatbot.png' text='Bots' />
                    <ServiceCard imageUrl='./assets/ai-plugin.png' text='AI Plugins' />
                    <ServiceCard imageUrl='./assets/ai-agent.png' text='AI Agents' />
                </div>
                <h2 style={{ fontWeight: 400 }}><img src="./assets/turn-right.png" alt="Arrow" width={24} /> in addition to the usual and typical</h2>

                <div className='services-cards'>

                    <ServiceCard imageUrl='./assets/web-app.png' text='Web Apps' />
                    <ServiceCard imageUrl='./assets/mobile-app.png' text='Mobile Apps' />
                    <ServiceCard imageUrl='./assets/website.png' text='Websites' />
                    {/* <ServiceCard imageUrl='./assets/api.png' text='APIs' /> */}
                    {/* <ServiceCard imageUrl='./assets/browser-extension.png' text='Browser Extensions' />
                    <ServiceCard imageUrl='./assets/desktop-app.png' text='Desktop Apps' /> */}
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
                    <ProjectCard title="ChatGPT" description="A conversational AI model that understands and generates human-like text." imageUrl="./assets/project-image-4.png" link="https://www.chatgpt.com/" />
                    <ProjectCard title="Youtube" description="A video sharing platform that allows users to upload, view, and share videos." imageUrl="./assets/project-image-2.png" link="https://www.youtube.com/" />
                    <ProjectCard title="Claude" description="A next-generation AI model for advanced natural language understanding." imageUrl="./assets/project-image-5.png" link="https://www.claude.ai/" />
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
                        imageUrl="./assets/sundar-pichai.png"
                    />
                    <TestimonialCard
                        text="The team at Brown AI is incredibly talented and dedicated."
                        author="Satya Nadella"
                        jobTitle="CEO, Microsoft"
                        imageUrl="./assets/satya-nadella.png"
                    />
                    <TestimonialCard
                        text="We saw immediate results after implementing their AI strategies."
                        author="Elon Musk"
                        jobTitle="CEO, SpaceX"
                        imageUrl="./assets/elon-musk.png"
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
