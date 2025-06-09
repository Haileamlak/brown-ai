// TestimonialCard.tsx
import React from 'react';
import './TestimonialCard.css'; // Assuming you have a CSS file for styling

interface TestimonialCardProps {
    text: string;
    author: string;
    jobTitle: string; // title for the author
    imageUrl?: string; // Optional image URL for the author
}



const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, author, jobTitle, imageUrl }) => {
    // If no image URL is provided, use a default image or leave it empty
    if (!imageUrl) {
        imageUrl = "src/assets/default-avatar.png";
    }
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
                <img src={imageUrl} alt={author} />
            </div>
            <div className="testimonial-content">
                <p className="testimonial-text">"{text}"</p>
                <div className="testimonial-author">
                    <span className="author-name">{author},</span>
                    <span className="author-job-title">{jobTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
