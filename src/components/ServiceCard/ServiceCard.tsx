import React from "react";

import "./ServiceCard.css"; // Assuming you have a CSS file for styling
import type { ServiceCardProps } from "./ServiceCard.types";


const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, text }) => {
    return (
        <span className="stat-card">
            <img src={imageUrl} alt="Logo" />
            <h3>{text}</h3>
        </span>
    );
};

export default ServiceCard;
