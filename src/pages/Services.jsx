import React, { useEffect } from 'react';
import { 
  FaUtensils, 
  FaHome, 
  FaCube, 
  FaPalette, 
  FaRuler, 
  FaCog,
  FaCheckCircle,
  FaPhone,
  FaCalendarAlt,
  FaLightbulb,
  FaAward
} from 'react-icons/fa';
import AOS from 'aos';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const mainServices = [
    {
      title: 'Kitchen Setup',
      description: 'Complete modular kitchen solutions designed for modern living. From contemporary designs to traditional styles, we create kitchens that are both beautiful and highly functional.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      features: [
        'Modular Kitchen Design',
        '3D Visualization',
        'Premium Appliances Integration',
        'Smart Storage Solutions',
        'Island & Breakfast Counter',
        'Lighting Design',
        'Plumbing & Electrical Work',
        '2-Year Warranty'
      ],
      ctaText: 'Request Kitchen Quote',
      ctaLink: '/contact',
      icon: <FaUtensils />,
      variant: 'featured'
    },
    {
      title: 'Full Home Interior',
      description: 'Transform your entire home with our comprehensive interior design services. We handle everything from space planning to final styling, creating cohesive and beautiful living spaces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      features: [
        'Complete Home Makeover',
        'Space Planning & Design',
        'Custom Furniture',
        'Color Consultation',
        'Lighting Solutions',
        'Flooring & Wall Treatments',
        'Window Treatments',
        'Project Management'
      ],
      ctaText: 'Schedule Consultation',
      ctaLink: '/contact',
      icon: <FaHome />
    }
  ];

  const additionalServices = [
    {
      icon: <FaCube />,
      title: 'Modular Furniture',
      description: 'Custom-designed modular furniture solutions for optimal space utilization.',
      features: ['Wardrobes', 'TV Units', 'Study Tables', 'Storage Solutions']
    },
    {
      icon: <FaPalette />,
      title: 'Color Consultation',
      description: 'Expert color advice to create the perfect ambiance for your space.',
      features: ['Color Psychology', 'Paint Selection', 'Accent Colors', 'Mood Boards']
    },
    {
      icon: <FaRuler />,
      title: 'Space Planning',
      description: 'Optimize your space with intelligent layout and design solutions.',
      features: ['Layout Design', 'Traffic Flow', 'Furniture Placement', 'Functional Zones']
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting Design',
      description: 'Create the perfect lighting scheme for every room and mood.',
      features: ['Ambient Lighting', 'Task Lighting', 'Accent Lighting', 'Smart Controls']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial meeting to understand your vision, requirements, and budget.',
      icon: <FaPhone />
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: '3D designs, material selection, and detailed project planning.',
      icon: <FaRuler />
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional execution with quality materials and skilled craftsmen.',
      icon: <FaCog />
    },
    {
      step: '04',
      title: 'Completion',
      description: 'Final inspection, handover, and warranty support.',
      icon: <FaCheckCircle />
    }
  ];

  const whyChooseUs = [
    'Expert Design Team',
    '10+ Years Experience',
    'Premium Quality Materials',
    'Timely Project Delivery',
    '2-Year Warranty',
    'Post-Installation Support',
    'Transparent Pricing',
    'Customer Satisfaction Guarantee'
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__background">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920" 
            alt="Beautiful interior design"
          />
          <div className="services-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="services-hero__content" data-aos="fade-up">
            <h1>Our Services</h1>
            <p>
              From dream kitchens to complete home makeovers, we bring your vision to life 
              with expert design and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section main-services bg-white">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Expertise</h2>
            <p>Comprehensive solutions for all your interior design needs</p>
          </div>
          <div className="main-services__grid">
            {mainServices.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section additional-services bg-light-gray">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Additional Services</h2>
            <p>Specialized services to complement your main project</p>
          </div>
          <div className="additional-services__grid">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="additional-service-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="additional-service-card__icon">
                  {service.icon}
                </div>
                <h3 className="additional-service-card__title">{service.title}</h3>
                <p className="additional-service-card__description">{service.description}</p>
                <ul className="additional-service-card__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <FaCheckCircle className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process bg-white">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Process</h2>
            <p>A systematic approach to ensure perfect results</p>
          </div>
          <div className="process__grid">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="process-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="process-card__step">{step.step}</div>
                <div className="process-card__icon">
                  {step.icon}
                </div>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose bg-cream">
        <div className="container">
          <div className="why-choose__content">
            <div className="why-choose__text" data-aos="fade-right">
              <h2>Why Choose Sangam Kitchen?</h2>
              <p>
                With over a decade of experience in interior design and kitchen setup, 
                we've built a reputation for excellence, reliability, and customer satisfaction. 
                Our team of expert designers and skilled craftsmen work together to bring 
                your vision to life.
              </p>
              <div className="why-choose__features">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FaCheckCircle className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="why-choose__cta">
                <Button variant="primary" size="large" href="/contact">
                  Start Your Project
                </Button>
              </div>
            </div>
            <div className="why-choose__image" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" 
                alt="Quality craftsmanship"
              />
              <div className="why-choose__badge">
                <FaAward className="badge-icon" />
                <div>
                  <div className="badge-title">Quality</div>
                  <div className="badge-subtitle">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us today for a free consultation and detailed quote</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" href="/contact">
                <FaCalendarAlt />
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="large" href="tel:+919999988888">
                <FaPhone />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;