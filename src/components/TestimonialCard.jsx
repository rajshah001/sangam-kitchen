import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ 
  name, 
  quote, 
  avatar, 
  role = '', 
  location = '',
  rating = 5,
  className = '',
  variant = 'default'
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`testimonial-card__star ${index < rating ? 'testimonial-card__star--filled' : ''}`}
      />
    ));
  };

  return (
    <div className={`testimonial-card testimonial-card--${variant} ${className}`}>
      {/* Quote Icon */}
      <div className="testimonial-card__quote-icon">
        <FaQuoteLeft />
      </div>

      {/* Rating */}
      <div className="testimonial-card__rating">
        {renderStars()}
      </div>

      {/* Quote Text */}
      <blockquote className="testimonial-card__quote">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="testimonial-card__author">
        {avatar && (
          <div className="testimonial-card__avatar">
            <img src={avatar} alt={name} />
          </div>
        )}
        <div className="testimonial-card__author-info">
          <h4 className="testimonial-card__name">{name}</h4>
          {(role || location) && (
            <p className="testimonial-card__details">
              {role}{role && location && ', '}{location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;