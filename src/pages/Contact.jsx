import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import AOS from 'aos';
import Button from '../components/Button';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const contactInfo = {
    phone: '+91 99999 88888',
    email: 'info@sangamkitchen.com',
    address: '123 Design Street, Interior City, Mumbai, Maharashtra 400001',
    hours: 'Mon-Sat: 10:00 AM – 7:00 PM',
    whatsapp: '+91 99999 88888'
  };

  const socialLinks = [
    { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/919999988888`, color: '#25D366' },
    { name: 'Facebook', icon: FaFacebookF, url: '#', color: '#1877F2' },
    { name: 'Instagram', icon: FaInstagram, url: '#', color: '#E4405F' },
  ];

  const services = [
    'Kitchen Setup',
    'Full Home Interior',
    'Modular Furniture',
    'Color Consultation',
    'Space Planning',
    'Lighting Design',
    'Other'
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__background">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920" 
            alt="Contact us for your interior design needs"
          />
          <div className="contact-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="contact-hero__content" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>
              Ready to transform your space? Get in touch with our expert team for a 
              free consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-main bg-white">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <div className="contact-form-header">
                <h2>Get a Free Quote</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {isSubmitted && (
                <div className="success-message" data-aos="zoom-in">
                  <FaCheckCircle className="success-icon" />
                  <h3>Thank you for your inquiry!</h3>
                  <p>We've received your message and will contact you within 24 hours.</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && (
                      <span className="error-message">{errors.firstName.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', { 
                        required: 'Last name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && (
                      <span className="error-message">{errors.lastName.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: 'Invalid phone number'
                        }
                      })}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className={errors.service ? 'error' : ''}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className="error-message">{errors.service.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    {...register('city')}
                    placeholder="e.g., Mumbai, Delhi, Bangalore"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget (Optional)</label>
                  <select
                    id="budget"
                    {...register('budget')}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1-lakh">Under ₹1 Lakh</option>
                    <option value="1-3-lakh">₹1 - 3 Lakh</option>
                    <option value="3-5-lakh">₹3 - 5 Lakh</option>
                    <option value="5-10-lakh">₹5 - 10 Lakh</option>
                    <option value="above-10-lakh">Above ₹10 Lakh</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { 
                      required: 'Please tell us about your project',
                      minLength: { value: 10, message: 'Please provide more details (at least 10 characters)' }
                    })}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your project requirements, timeline, specific needs, etc."
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  disabled={isLoading}
                  className="submit-btn"
                >
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section" data-aos="fade-left">
              <div className="contact-info-header">
                <h2>Get in Touch</h2>
                <p>We're here to help bring your vision to life</p>
              </div>

              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-info-content">
                    <h3>Call Us</h3>
                    <p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                        {contactInfo.phone}
                      </a>
                    </p>
                    <span>Free consultation available</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info-content">
                    <h3>Email Us</h3>
                    <p>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </p>
                    <span>We respond within 24 hours</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-info-content">
                    <h3>Visit Us</h3>
                    <p>{contactInfo.address}</p>
                    <span>Showroom & Design Center</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <FaClock />
                  </div>
                  <div className="contact-info-content">
                    <h3>Business Hours</h3>
                    <p>{contactInfo.hours}</p>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        aria-label={social.name}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Call Section */}
              <div className="quick-call">
                <h3>Need Immediate Assistance?</h3>
                <p>Call us directly or message us on WhatsApp for instant support</p>
                <div className="quick-call-buttons">
                  <Button 
                    variant="primary" 
                    size="medium" 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  >
                    <FaPhone />
                    Call Now
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="medium" 
                    href={`https://wa.me/919999988888`}
                    target="_blank"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section bg-light-gray">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Find Us</h2>
            <p>Visit our showroom to see our work up close and discuss your project</p>
          </div>
          
          <div className="map-container" data-aos="fade-up" data-aos-delay="200">
            {/* Placeholder for Google Maps */}
            <div className="map-placeholder">
              <div className="map-placeholder-content">
                <FaMapMarkerAlt className="map-icon" />
                <h3>Sangam Kitchen</h3>
                <p>{contactInfo.address}</p>
                <Button variant="outline" size="medium" href="https://maps.google.com" target="_blank">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;