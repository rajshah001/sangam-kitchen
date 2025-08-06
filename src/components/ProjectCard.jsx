import React, { useState } from 'react';
import { HiEye, HiHeart } from 'react-icons/hi';
import './ProjectCard.css';

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description,
  onClick,
  className = '',
  showOverlay = true,
  size = 'medium'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick({ image, title, category, description });
    }
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={`project-card project-card--${size} ${className} ${isLoaded ? 'project-card--loaded' : ''}`}
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="project-card__image-container">
        <img 
          src={image} 
          alt={title}
          className="project-card__image"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="project-card__loading">
            <div className="project-card__loading-spinner"></div>
          </div>
        )}

        {/* Overlay */}
        {showOverlay && (
          <div className="project-card__overlay">
            <div className="project-card__actions">
              <button 
                className="project-card__action project-card__action--view"
                onClick={handleClick}
                aria-label="View project"
              >
                <HiEye />
              </button>
              <button 
                className={`project-card__action project-card__action--like ${isLiked ? 'project-card__action--liked' : ''}`}
                onClick={handleLike}
                aria-label={isLiked ? 'Unlike project' : 'Like project'}
              >
                <HiHeart />
              </button>
            </div>
            
            <div className="project-card__overlay-content">
              <h3 className="project-card__overlay-title">{title}</h3>
              {category && (
                <span className="project-card__overlay-category">{category}</span>
              )}
            </div>
          </div>
        )}

        {/* Category Badge */}
        {category && !showOverlay && (
          <div className="project-card__badge">
            {category}
          </div>
        )}
      </div>

      {/* Content (for cards without overlay) */}
      {!showOverlay && (
        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          {description && (
            <p className="project-card__description">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;