// a card to conain a bullet point and a description
import React from 'react';  
import './BulletCard.css';
const BulletCard: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="bullet-card">
            <div className="bullet-card-icon" >
                <img src="./assets/bullet-icon.png" alt="Bullet Icon" width={24}  />
            </div>
            <p className="bullet-card-description">{text}</p>
        </div>
    );
};

export default BulletCard;
