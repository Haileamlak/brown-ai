// text card
import React from "react";
import "./TextCard.css"; // Assuming you have a CSS file for styling
import type { TextCardProps } from "./TextCard.types";

const TextCard: React.FC<TextCardProps> = ({ title, text }) => {
    return (
        <div className="text-card">
            <h2 className="text-card-title">{title}</h2>
            <p className="text-card-content">{text}</p>
        </div>
    );
};

export default TextCard;
