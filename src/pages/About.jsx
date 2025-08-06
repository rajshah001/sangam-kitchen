import React, { useEffect } from 'react';
import { 
  FaAward, 
  FaUsers, 
  FaHeart, 
  FaCog, 
  FaLightbulb, 
  FaHandshake,
  FaCalendarAlt,
  FaStar
} from 'react-icons/fa';
import AOS from 'aos';
import Button from '../components/Button';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const timeline = [
    {
      year: '2013',
      title: 'Company Founded',
      description: 'Started with a vision to transform homes with quality interior design.',
      icon: <FaCalendarAlt />
    },
    {
      year: '2016',
      title: '100+ Projects',
      description: 'Completed our first 100 successful home transformation projects.',
      icon: <FaStar />
    },
    {
      year: '2019',
      title: 'Team Expansion',
      description: 'Expanded our team of expert designers and craftsmen.',
      icon: <FaUsers />
    },
    {
      year: '2023',
      title: '500+ Happy Homes',
      description: 'Achieved milestone of 500+ satisfied customers across multiple cities.',
      icon: <FaAward />
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'We pour our heart into every project, treating each home as if it were our own.'
    },
    {
      icon: <FaCog />,
      title: 'Quality',
      description: 'Premium materials and expert craftsmanship ensure lasting beauty and durability.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We stay ahead of design trends and embrace new technologies for better solutions.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust',
      description: 'Building long-lasting relationships with our clients through transparency and reliability.'
    }
  ];

  const teamMembers = [
    {
      name: 'Rajesh Sangam',
      role: 'Founder & Lead Designer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300',
      description: '15+ years of experience in interior design and project management.'
    },
    {
      name: 'Priya Sharma',
      role: 'Kitchen Design Specialist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
      description: 'Expert in modular kitchen design with focus on functionality and aesthetics.'
    },
    {
      name: 'Amit Kumar',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      description: 'Ensures smooth execution and timely delivery of all projects.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920" 
            alt="Beautiful home interior"
          />
          <div className="about-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="about-hero__content" data-aos="fade-up">
            <h1>About Sangam Kitchen</h1>
            <p>
              Transforming homes with exceptional interior design and kitchen solutions for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section our-story bg-white">
        <div className="container">
          <div className="our-story__content">
            <div className="our-story__text" data-aos="fade-right">
              <h2>Our Story</h2>
              <p>
                Founded in 2013, Sangam Kitchen began with a simple mission: to create beautiful, 
                functional spaces that enhance the way people live. What started as a small interior 
                design studio has grown into a trusted name in home transformation.
              </p>
              <p>
                Over the years, we've had the privilege of working with hundreds of families, 
                helping them turn their houses into dream homes. Our expertise spans from complete 
                home makeovers to specialized kitchen setups, always maintaining our commitment to 
                quality, innovation, and customer satisfaction.
              </p>
              <p>
                Today, we continue to push the boundaries of design while staying true to our core 
                values. Every project is an opportunity to create something special, and we approach 
                each one with the same passion and dedication that started our journey.
              </p>
              <div className="our-story__cta">
                <Button variant="primary" size="medium" href="/contact">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="our-story__image" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" 
                alt="Our design process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline bg-light-gray">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Journey</h2>
            <p>Key milestones that shaped our company and defined our success</p>
          </div>
          <div className="timeline__container">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="timeline__item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="timeline__icon">
                  {item.icon}
                </div>
                <div className="timeline__content">
                  <div className="timeline__year">{item.year}</div>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values bg-white">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values__grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="value-card__icon">
                  {value.icon}
                </div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team bg-cream">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Meet Our Team</h2>
            <p>The talented professionals behind every successful project</p>
          </div>
          <div className="team__grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="team-card__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section mission">
        <div className="container">
          <div className="mission__content" data-aos="zoom-in">
            <h2>Our Mission</h2>
            <p>
              "To create exceptional living spaces that inspire, comfort, and enhance the daily lives 
              of our clients. We believe that great design should be accessible, sustainable, and 
              deeply personal to each homeowner."
            </p>
            <div className="mission__signature">
              <span>- Rajesh Sangam, Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-white">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss your vision and create something beautiful together</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" href="/contact">
                Get Started
              </Button>
              <Button variant="secondary" size="large" href="/projects">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;