// a project card with image, title, and description

import React from 'react';
import { type ProjectCardProps } from './ProjectCard.types';
import './ProjectCard.css'; // Assuming you have a CSS file for styling

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
    return (
        <span className="project-card">
            <img src={imageUrl} alt={title} className="project-card-image" />
            <h3 className="project-card-title">
                {title}
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link"><img src="./assets/link.png" alt="Link" /></a>
            </h3>
            <p className="project-card-description">{description}</p>
        </span>
    );
}


export default ProjectCard;
