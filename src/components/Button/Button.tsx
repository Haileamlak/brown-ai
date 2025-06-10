
import React from 'react';
import './Button.css'; // Assuming you have a CSS file for styling

interface ButtonProps {
    text: string;
    onClick?: () => void;
    imageSrc?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, imageSrc }) => {
    return (
        <button className="btn btn-brown" onClick={onClick}>
            {text}
            {imageSrc && <img src={imageSrc} alt="Arrow Icon" width={10} />}
        </button>
    );
};

export default Button;
