import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { 
  FaHome, 
  FaUtensils, 
  FaAward, 
  FaUsers, 
  FaChevronRight,
  FaPalette,
  FaCube,
  FaHandshake
} from 'react-icons/fa';
import AOS from 'aos';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
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
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500',
      title: 'Elegant Dining Space',
      category: 'Dining Room'
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
    },
    {
      id: 3,
      name: 'Anjali Patel',
      role: 'Interior Enthusiast',
      location: 'Bangalore',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      quote: 'Amazing work! The team understood our vision perfectly and delivered beyond expectations.',
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
    { number: '10+', label: 'Years Experience', icon: <FaAward /> },
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
          <div className="hero__overlay"></div>
        </div>
        <div className="container">
          <div className="hero__content" data-aos="fade-up">
            <h1 className="hero__title">
              Transform Your Home <span>Today</span>
            </h1>
            <p className="hero__subtitle">
              Expert interior design and kitchen setup services that bring your vision to life. 
              Modern designs, quality craftsmanship, and exceptional service.
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
          <div className="projects-slider" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="projects-swiper"
            >
              {featuredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>
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
          <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Ready to Transform Your Home?</h2>
            <p>Get in touch with us today for a free consultation and quote</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" href="/contact">
                Get Free Quote
              </Button>
              <Button variant="secondary" size="large" href="tel:+919999988888">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;