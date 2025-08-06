import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  icon,
  href,
  ...props 
}) => {
  const baseClasses = `btn btn--${variant} btn--${size} ${className}`;

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...props}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;