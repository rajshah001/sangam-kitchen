import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = '919423487849'; // Your WhatsApp number
  const defaultMessage = `Hi Sangam Kitchen! 👋

I'm interested in your services and would like to know more about:
- Modular Kitchen Solutions
- Home Interior Design
- Kitchen Appliances & Setup

Please share more details about your services, pricing, and availability.

Thank you!`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-float">
      <div 
        className={`whatsapp-button ${isHovered ? 'hovered' : ''}`}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
        
        {/* Tooltip */}
        <div className="whatsapp-tooltip">
          <span>Need help? Chat with us!</span>
        </div>
      </div>
      
      {/* Pulse animation ring */}
      <div className="whatsapp-pulse"></div>
    </div>
  );
};

export default WhatsAppButton;