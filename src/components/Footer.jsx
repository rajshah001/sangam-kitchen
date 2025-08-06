import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp,
  FaClock
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Modular Kitchen', category: 'Kitchen' },
    { name: 'Living Room Design', category: 'Living Room' },
    { name: 'Bedroom Interiors', category: 'Bedroom' },
    { name: 'Dining Room Setup', category: 'Dining Room' },
    { name: 'Complete Home Interior', category: 'All' },
  ];

  const contactInfo = {
    phone: '+91 94234 87849',
    email: 'sangamkitchen@gmail.com',
    address: '10, Nutan Maratha Complex, Jalgaon, Maharashtra 425001',
    hours: 'Mon-Fri: 9 AM – 8 PM, Sat-Sun: 11 AM – 3 PM'
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: '#' },
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/919423487849` },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section">
            <div className="footer__logo">
              <h3 className="footer__logo-text">
                Sangam <span>Kitchen</span>
              </h3>
              <p className="footer__description">
                Transform your home with our expert interior design and kitchen setup services. 
                Quality craftsmanship, modern designs, and customer satisfaction guaranteed.
              </p>
              <div className="footer__social">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h4 className="footer__title">Our Services</h4>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={`/projects?category=${encodeURIComponent(service.category)}`} 
                    className="footer__link"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__title">Contact Info</h4>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="footer__contact-text">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <a href={`mailto:${contactInfo.email}`} className="footer__contact-text">
                  {contactInfo.email}
                </a>
              </div>
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span className="footer__contact-text">
                  {contactInfo.address}
                </span>
              </div>
              <div className="footer__contact-item">
                <FaClock className="footer__contact-icon" />
                <span className="footer__contact-text">
                  {contactInfo.hours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Sangam Kitchen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;