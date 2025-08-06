import React from 'react';
import Button from './Button';
import './ServiceCard.css';

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  features = [], 
  ctaText = 'Learn More',
  ctaLink = '#',
  icon,
  className = '',
  variant = 'default'
}) => {
  return (
    <div className={`service-card service-card--${variant} ${className}`}>
      {/* Image Section */}
      {image && (
        <div className="service-card__image">
          <img src={image} alt={title} />
          {icon && (
            <div className="service-card__icon">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="service-card__features">
            {features.map((feature, index) => (
              <li key={index} className="service-card__feature">
                <span className="service-card__feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <div className="service-card__cta">
          <Button 
            variant="primary" 
            size="medium" 
            href={ctaLink}
            className="service-card__button"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;