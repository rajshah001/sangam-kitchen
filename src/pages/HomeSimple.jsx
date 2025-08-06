import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaUtensils, 
  FaAward, 
  FaUsers, 
  FaChevronRight,
  FaPalette,
  FaCube,
  FaHandshake,
  FaStar
} from 'react-icons/fa';
import AOS from 'aos';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

// Import AOS styles
import 'aos/dist/aos.css';
import './Home.css';

const HomeSimple = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Sample data - replace with actual images
  const featuredProjects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      title: 'Modern Kitchen Design',
      category: 'Kitchen'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      title: 'Luxury Living Room',
      category: 'Living Room'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
      title: 'Contemporary Bedroom',
      category: 'Bedroom'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      location: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100',
      quote: 'Sangam Kitchen transformed our home completely. The attention to detail and quality of work exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Property Developer',
      location: 'Delhi',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      quote: 'Professional service and beautiful designs. Our kitchen is now the heart of our home.',
      rating: 5
    }
  ];

  const services = [
    {
      title: 'Kitchen Setup',
      description: 'Complete modular kitchen solutions with modern appliances and elegant designs.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      features: ['Modular Design', '3D Visualization', 'Premium Materials', 'Expert Installation'],
      ctaText: 'Explore Kitchens',
      ctaLink: '/services',
      icon: <FaUtensils />
    },
    {
      title: 'Full Home Interior',
      description: 'Comprehensive interior design services for every room in your home.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      features: ['Complete Makeover', 'Custom Furniture', 'Color Consultation', 'Space Planning'],
      ctaText: 'View Interiors',
      ctaLink: '/services',
      icon: <FaHome />
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '20+', label: 'Years Experience', icon: <FaAward /> },
    { number: '1000+', label: 'Projects Completed', icon: <FaCube /> },
    { number: '100%', label: 'Satisfaction Rate', icon: <FaHandshake /> }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920" 
            alt="Beautiful kitchen interior"
          />
          <div className="hero__overlay" style={{ background: 'linear-gradient(135deg, rgba(128, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)' }}></div>
        </div>
        <div className="container">
          <div className="hero__content" data-aos="fade-up">
            <h1 className="hero__title" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Transform Your Kitchen <span style={{ color: '#ffcccc' }}>Today</span>
            </h1>
            <p className="hero__subtitle" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Expert modular kitchen solutions and home appliances from Jalgaon's trusted manufacturer. 
              Quality products, professional installation, and exceptional service since 2002.
            </p>
            <div className="hero__cta">
              <Button variant="primary" size="large" href="/contact">
                Get Free Consultation
              </Button>
              <Button variant="secondary" size="large" href="/projects">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview bg-white">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>We specialize in creating beautiful, functional spaces that reflect your style</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us bg-light-gray">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Sangam Kitchen?</h2>
            <p>We deliver exceptional quality and service in every project</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="stat-card__icon">
                  {stat.icon}
                </div>
                <div className="stat-card__number">{stat.number}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="features-list" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-item">
              <FaPalette className="feature-icon" />
              <div>
                <h4>Custom Design</h4>
                <p>Tailored solutions that match your unique style and needs</p>
              </div>
            </div>
            <div className="feature-item">
              <FaCube className="feature-icon" />
              <div>
                <h4>Quality Materials</h4>
                <p>Premium materials and finishes for lasting beauty and durability</p>
              </div>
            </div>
            <div className="feature-item">
              <FaHandshake className="feature-icon" />
              <div>
                <h4>Professional Service</h4>
                <p>Expert craftsmanship and dedicated customer support throughout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects bg-white">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Featured Projects</h2>
            <p>Discover our latest interior design and kitchen setup projects</p>
          </div>
          <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-item">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <Button variant="outline" size="large" href="/projects">
              View All Projects
              <FaChevronRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials bg-cream">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>What Our Clients Say</h2>
            <p>Read testimonials from our satisfied customers</p>
          </div>
          <div className="testimonials-grid" data-aos="fade-up" data-aos-delay="200">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2 style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Ready to Transform Your Kitchen?</h2>
            <p style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Get in touch with us today for a free consultation and quote</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" href="/contact">
                Get Free Quote
              </Button>
              <button 
                style={{ 
                  padding: '1rem 2rem', 
                  background: '#fff', 
                  color: '#800000', 
                  border: '3px solid #fff', 
                  borderRadius: '8px', 
                  fontSize: '1.1rem', 
                  fontWeight: '500', 
                  cursor: 'pointer',
                  textShadow: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}
                onClick={() => window.open('tel:+919423487849')}
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSimple;