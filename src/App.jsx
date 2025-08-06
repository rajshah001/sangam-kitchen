import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

// Import the simplified Home page
import Home from './pages/HomeSimple';

function About() {
  const timeline = [
    { year: '2002', title: 'Company Founded', description: 'Established by Mr. Mangesh Gujrathi, leveraging 20+ years of manufacturing experience to create quality kitchen solutions.', icon: '🏢' },
    { year: '2005', title: 'Product Diversification', description: 'Expanded into kitchen trolleys & railings, establishing the Sangam Kitchen brand.', icon: '🏗️' },
    { year: '2010', title: 'Modular Kitchen Focus', description: 'Specialized in modular and semi-modular kitchen systems with advanced drawer technologies.', icon: '👥' },
    { year: '2015', title: 'Service Expansion', description: 'Added appliances, gas pipeline, and comprehensive furniture solutions.', icon: '💻' },
    { year: '2023', title: 'Industry Leader', description: 'Recognized as top player in home appliances and modular kitchen manufacturing in Jalgaon.', icon: '🏆' }
  ];

  const values = [
    { icon: '❤️', title: 'Passion', description: 'We pour our heart into every project, treating each home as if it were our own.' },
    { icon: '⚙️', title: 'Quality', description: 'Premium materials and expert craftsmanship ensure lasting beauty and durability.' },
    { icon: '💡', title: 'Innovation', description: 'We stay ahead of design trends and embrace new technologies for better solutions.' },
    { icon: '🤝', title: 'Trust', description: 'Building long-lasting relationships with our clients through transparency and reliability.' }
  ];

  const team = [
    { name: 'Mr. Mangesh Gujrathi', role: 'Owner', experience: '20+ years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300' }
  ];

  return (
    <div style={{ background: '#fefaf6' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, rgba(128, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920")', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>About Sangam Kitchen</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#fdfcf0' }}>Transforming homes with exceptional interior design and kitchen solutions for over a decade.</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container" style={{ padding: '5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#800000', marginBottom: '2rem', marginTop: '1rem' }}>Our Story</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666', marginBottom: '1.5rem' }}>
              Established in 2002 by Mr. Mangesh Gujrathi, Sangam Kitchen was born from a vision of excellence in product design and manufacturing. As a tech-savvy engineer with 20+ years of hands-on manufacturing experience, Mr. Gujrathi diversified into kitchen trolleys & railings, creating the Sangam Kitchen brand.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666', marginBottom: '1.5rem' }}>
              Located in Jalgaon, Maharashtra, we have established ourselves as a top player in home appliances and modular kitchen manufacturing. Our journey from kitchen trolleys to comprehensive modular kitchen solutions reflects our commitment to innovation and customer satisfaction.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666' }}>
              Today, we serve as a one-stop destination for customers across Jalgaon and beyond, offering everything from modular kitchens to appliances, railings, and furniture. Our dedicated team continues to grow our customer base through quality products and exceptional service.
            </p>
          </div>
      <div>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" alt="Our design process" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }} />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: '#f5f5f5', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#800000', marginBottom: '1rem' }}>Our Journey</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>Key milestones that shaped our company and defined our success</p>
          </div>
          <div className="timeline-container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Desktop Timeline */}
            <div className="timeline-desktop" style={{ display: 'block' }}>
              <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '2px', background: '#800000', transform: 'translateX(-50%)' }}></div>
              {timeline.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', position: 'relative' }}>
                  <div style={{ flex: '1', textAlign: index % 2 === 0 ? 'right' : 'left', paddingRight: index % 2 === 0 ? '2rem' : '0', paddingLeft: index % 2 === 1 ? '2rem' : '0' }}>
                    {index % 2 === 0 && (
                      <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: '#800000', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.year}</div>
                        <h3 style={{ marginBottom: '0.75rem', color: '#333' }}>{item.title}</h3>
                        <p style={{ color: '#666', margin: '0' }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div style={{ width: '60px', height: '60px', background: '#800000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', zIndex: '2', position: 'relative' }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: '1', textAlign: index % 2 === 1 ? 'left' : 'right', paddingLeft: index % 2 === 1 ? '2rem' : '0', paddingRight: index % 2 === 0 ? '2rem' : '0' }}>
                    {index % 2 === 1 && (
                      <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                        <div style={{ color: '#800000', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.year}</div>
                        <h3 style={{ marginBottom: '0.75rem', color: '#333' }}>{item.title}</h3>
                        <p style={{ color: '#666', margin: '0' }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="timeline-mobile" style={{ display: 'none' }}>
              <div style={{ position: 'absolute', left: '30px', top: '0', bottom: '0', width: '2px', background: '#800000' }}></div>
              {timeline.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '2.5rem', position: 'relative' }}>
                  <div style={{ width: '60px', height: '60px', background: '#800000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', zIndex: '2', position: 'relative', flexShrink: '0' }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: '1', paddingLeft: '1.5rem' }}>
                    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                      <div style={{ color: '#800000', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.year}</div>
                      <h3 style={{ marginBottom: '0.75rem', color: '#333', fontSize: '1.1rem' }}>{item.title}</h3>
                      <p style={{ color: '#666', margin: '0', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container" style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: '#800000', marginBottom: '1rem' }}>Our Values</h2>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>The principles that guide everything we do</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {values.map((value, index) => (
            <div key={index} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease', border: '2px solid transparent' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{value.icon}</div>
              <h3 style={{ color: '#333', marginBottom: '1rem' }}>{value.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: '0' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div style={{ background: '#f5f5f5', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#800000', marginBottom: '1rem' }}>Meet Our Owner</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>The visionary leader behind Sangam Kitchen's success</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {team.map((member, index) => (
              <div key={index} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', maxWidth: '350px', width: '100%' }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>{member.name}</h3>
                  <p style={{ color: '#800000', fontWeight: '500', marginBottom: '0.5rem' }}>{member.role}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0' }}>{member.experience} of experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div style={{ background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem' }}>
              "To provide top-quality modular kitchen solutions and home appliances that combine functionality with aesthetics. We are committed to delivering excellence in manufacturing and customer service, making modern living accessible to every home."
            </p>
            <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              - Mr. Mangesh Gujrathi, Founder & Managing Director
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const mainServices = [
    {
      title: 'Complete Kitchen Solutions',
      description: 'Transform your kitchen with our comprehensive modular solutions. We specialize in both Carcase system (individual boxes, sturdy & drawer friendly) and Pipe frame system (cost-effective SS pipe frame). Complete range includes appliances, accessories, and professional installation.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      features: ['Modular & Semi-Modular Kitchen', 'Carcase & Pipe Frame Systems', 'Tandom Box & Steel Basket Drawers', 'Chimney & Exhaust Systems', 'Hobs, Cooktops & Built-in Appliances', 'Copper Gas Pipeline', 'Various Shutter Materials', 'Professional Installation'],
      popular: true
    },
    {
      title: 'Full Home Interior',
      description: 'Create cohesive and beautiful living spaces throughout your home. Our comprehensive interior design services cover every room with custom furniture, modular solutions, space optimization, and complete makeover packages tailored to your lifestyle.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      features: ['Complete Home Makeover', 'Living Room Design', 'Bedroom Interiors', 'Modular Furniture Solutions', 'Custom Wardrobes & Storage', 'TV Units & Entertainment Centers', 'Study Room Setup', 'Space Planning & Optimization']
    }
  ];

  const additionalServices = [
    { 
      icon: '🪑', 
      title: 'Modular Furniture & Sofa Sets', 
      description: 'We design and manufacture premium modular furniture solutions that maximize space utilization while maintaining aesthetic appeal. Our furniture range includes everything from entertainment centers to comfortable seating arrangements.', 
      features: ['TV Units & Entertainment Centers', 'Custom Wardrobes & Storage', 'Study Tables & Work Stations', 'Premium Sofa Sets'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400'
    },
    { 
      icon: '🚪', 
      title: 'Premium Shutter Options', 
      description: 'Choose from our extensive range of high-quality shutter materials, each offering unique benefits in terms of durability, aesthetics, and maintenance. From budget-friendly laminates to premium ceramic options.', 
      features: ['Laminate Shutters (Cost-effective)', 'Acrylic Shutters (High Gloss)', 'Glass Shutters (Modern Look)', 'Ceramic & PU Coating Options'],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'
    },
    { 
      icon: '📏', 
      title: 'Precision Measurements', 
      description: 'Our expert team ensures perfect measurements tailored to your space and ergonomic needs. We follow industry standards while customizing dimensions to fit your specific requirements and working comfort.', 
      features: ['Main Counter (27-29 inch depth)', 'Side Counter (20-24 inch depth)', 'Working Height (30-32 inch)', 'Ergonomic Customization'],
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400'
    },
    { 
      icon: '🔧', 
      title: 'Complete Technical Support', 
      description: 'From initial installation to ongoing maintenance, our skilled technicians provide comprehensive support services. We ensure your kitchen systems operate smoothly for years with professional care and expertise.', 
      features: ['Professional Installation', 'Repair & Maintenance Services', 'Technical Consultation', '24/7 Customer Support'],
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400'
    }
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision, requirements, and budget.', icon: '📞' },
    { step: '02', title: 'Design & Planning', description: '3D designs, material selection, and detailed project planning.', icon: '📐' },
    { step: '03', title: 'Execution', description: 'Professional execution with quality materials and skilled craftsmen.', icon: '⚙️' },
    { step: '04', title: 'Completion', description: 'Final inspection, handover, and warranty support.', icon: '✅' }
  ];

  const whyChooseUs = ['Expert Design Team', '20+ Years Experience', 'Premium Quality Materials', 'Timely Project Delivery', '2-Year Warranty', 'Post-Installation Support', 'Transparent Pricing', 'Customer Satisfaction Guarantee'];

  return (
    <div style={{ background: '#fefaf6' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, rgba(128, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920")', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Our Services</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#fdfcf0' }}>From dream kitchens to complete home makeovers, we bring your vision to life with expert design and quality craftsmanship.</p>
        </div>
      </div>

      {/* Main Services */}
      <div className="container" style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: '#800000', marginBottom: '1rem', marginTop: '1rem' }}>Our Expertise</h2>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>Comprehensive solutions for all your interior design needs</p>
        </div>
        <div className="services-main-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {mainServices.map((service, index) => (
            <div key={index} className="service-card" style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', position: 'relative', border: service.popular ? '3px solid #800000' : 'none' }}>
              {service.popular && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#800000', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 2 }}>
                  Most Popular
                </div>
              )}
              <img src={service.image} alt={service.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ color: '#800000', marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>{service.description}</p>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '1rem', color: '#333' }}>What's Included:</h4>
                  <div className="services-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                        <span style={{ color: '#800000', fontWeight: 'bold' }}>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  style={{ width: '100%', padding: '1rem 2rem', background: '#800000', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', transition: 'background 0.3s ease' }}
                >
                  Request Quote
        </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div style={{ background: '#f5f5f5', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#800000', marginBottom: '1rem' }}>Additional Services</h2>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>Specialized services to complement your main project</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {additionalServices.map((service, index) => (
              <div key={index} style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2.5rem' }}>{service.icon}</div>
                    <h3 style={{ color: '#800000', margin: '0' }}>{service.title}</h3>
                  </div>
                  <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{service.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#800000', fontWeight: 'bold' }}>✓</span>
                        <span style={{ color: '#555' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="container" style={{ padding: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ color: '#800000', marginBottom: '1rem' }}>Our Process</h2>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>A systematic approach to ensure perfect results</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {process.map((step, index) => (
            <div key={index} style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', position: 'relative', transition: 'transform 0.3s ease' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '50px', background: '#800000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                {step.step}
              </div>
              <div style={{ fontSize: '2.5rem', margin: '2rem 0 1.5rem', color: '#800000' }}>{step.icon}</div>
              <h3 style={{ color: '#333', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', margin: '0' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ background: '#f5f5f5', padding: '5rem 0' }}>
        <div className="container">
          <div className="why-choose-us-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ color: '#800000', marginBottom: '1.5rem' }}>Why Choose Sangam Kitchen?</h2>
              <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1.1rem' }}>
                With over a decade of experience in interior design and kitchen setup, we've built a reputation for excellence, reliability, and customer satisfaction. Our team of expert designers and skilled craftsmen work together to bring your vision to life.
              </p>
              <div className="why-choose-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
                {whyChooseUs.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#666', fontWeight: '500' }}>
                    <span style={{ color: '#800000', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => window.location.href = '/contact'}
                style={{ padding: '1rem 2rem', background: '#800000', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '500', cursor: 'pointer' }}
              >
                Start Your Project
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" alt="Quality craftsmanship" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }} />
              <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '2rem', color: '#800000' }}>🏆</div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333', lineHeight: '1' }}>Quality</div>
                  <div style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1' }}>Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to Transform Your Space?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Contact us today for a free consultation and detailed quote</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={{ padding: '1rem 2rem', background: '#fff', color: '#800000', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              📅 Schedule Consultation
            </button>
            <button 
              onClick={() => window.open('tel:+919423487849')}
              style={{ padding: '1rem 2rem', background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              📞 Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentSearch, setCurrentSearch] = useState(window.location.search);

  const categories = ['All', 'Kitchen', 'Living Room', 'Bedroom', 'Dining Room', 'Bathroom', 'Study Room'];
  
  // Handle URL parameters for category filtering
  React.useEffect(() => {
    const checkURLParams = () => {
      const newSearch = window.location.search;
      if (newSearch !== currentSearch) {
        setCurrentSearch(newSearch);
        const urlParams = new URLSearchParams(newSearch);
        const categoryParam = urlParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
          setActiveFilter(categoryParam);
        } else if (!categoryParam) {
          setActiveFilter('All');
        }
      }
    };

    // Check on initial load
    checkURLParams();
    
    // Set up an interval to check for URL changes
    const interval = setInterval(checkURLParams, 100);
    
    return () => clearInterval(interval);
  }, [currentSearch]);

  const projects = [
    { id: 1, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800', title: 'Modern Modular Kitchen', category: 'Kitchen', description: 'Contemporary kitchen design with smart storage solutions and premium appliances.', location: 'Mumbai', year: '2023', area: '250 sq ft' },
    { id: 2, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800', title: 'Luxury Living Room', category: 'Living Room', description: 'Elegant living space with custom furniture and sophisticated lighting.', location: 'Delhi', year: '2023', area: '400 sq ft' },
    { id: 3, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', title: 'Contemporary Bedroom', category: 'Bedroom', description: 'Serene bedroom design with built-in wardrobes and ambient lighting.', location: 'Bangalore', year: '2023', area: '200 sq ft' },
    { id: 4, image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800', title: 'Elegant Dining Space', category: 'Dining Room', description: 'Sophisticated dining room with custom table and designer lighting.', location: 'Chennai', year: '2022', area: '180 sq ft' },
    { id: 5, image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800', title: 'Traditional Kitchen', category: 'Kitchen', description: 'Classic kitchen design blending traditional aesthetics with modern functionality.', location: 'Pune', year: '2022', area: '220 sq ft' },
    { id: 6, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', title: 'Minimalist Bedroom', category: 'Bedroom', description: 'Clean, minimalist bedroom design with focus on simplicity and comfort.', location: 'Hyderabad', year: '2022', area: '180 sq ft' },
    { id: 7, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800', title: 'Cozy Living Room', category: 'Living Room', description: 'Warm and inviting living space perfect for family gatherings.', location: 'Kolkata', year: '2023', area: '350 sq ft' },
    { id: 8, image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800', title: 'Luxury Bathroom', category: 'Bathroom', description: 'Spa-like bathroom with premium fixtures and marble finishes.', location: 'Jalgaon', year: '2023', area: '120 sq ft' },
    { id: 9, image: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=800', title: 'Modern Study Room', category: 'Study Room', description: 'Productive workspace with custom built-in storage and ergonomic design.', location: 'Delhi', year: '2022', area: '150 sq ft' },
    { id: 10, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', title: 'Guest Bedroom', category: 'Bedroom', description: 'Comfortable guest bedroom with space-saving furniture solutions.', location: 'Jaipur', year: '2023', area: '160 sq ft' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🏠' },
    { number: '50+', label: 'Cities Covered', icon: '🌍' },
    { number: '20+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '😊' }
  ];

  return (
    <div style={{ background: '#fefaf6' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, rgba(128, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920")', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh', display: 'flex', alignItems: 'center', color: '#fff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Our Projects</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#fdfcf0' }}>Explore our portfolio of stunning interior design and kitchen setup projects that showcase our expertise and attention to detail.</p>
        </div>
      </div>

      {/* Projects Gallery */}
      <div className="container" style={{ padding: '5rem 0' }}>
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ color: '#800000', marginBottom: '0.5rem', marginTop: '1rem' }}>Our Work</h2>
            <p style={{ color: '#666', margin: '0' }}>Showing {filteredProjects.length} projects</p>
          </div>
          
          {/* Search */}
          <div style={{ position: 'relative', width: '250px' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: '0.9rem' }}>🔍</span>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', border: '2px solid #e5e5e5', borderRadius: '8px', fontSize: '0.95rem' }}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontWeight: '500', whiteSpace: 'nowrap' }}>
            <span>🏷️</span>
            <span>Filter by category:</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '0.5rem 1rem',
                  border: `2px solid ${activeFilter === category ? '#800000' : '#e5e5e5'}`,
                  background: activeFilter === category ? '#800000' : '#fff',
                  color: activeFilter === category ? '#fff' : '#666',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#800000', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500' }}>
                  {project.category}
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500', color: '#333' }}>
                  📍 {project.location}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#333', fontSize: '1.25rem' }}>{project.title}</h3>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.5', fontSize: '0.95rem' }}>{project.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666', fontSize: '0.85rem' }}>
                  <span>📅 {project.year}</span>
                  <span>📏 {project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>No projects found</h3>
            <p style={{ marginBottom: '2rem' }}>Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => { setActiveFilter('All'); setSearchTerm(''); }}
              style={{ padding: '0.75rem 1.5rem', background: 'transparent', color: '#800000', border: '2px solid #800000', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div style={{ background: '#f5f5f5', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#800000', marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ color: '#666', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div style={{ background: 'linear-gradient(135deg, #800000 0%, #a00000 100%)', color: '#fff', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Inspired by Our Work?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Let's create something beautiful for your home too</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={{ padding: '1rem 2rem', background: '#fff', color: '#800000', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer' }}
            >
              Start Your Project
            </button>
            <button 
              onClick={() => window.location.href = '/services'}
              style={{ padding: '1rem 2rem', background: 'transparent', color: '#fff', border: '2px solid #fff', borderRadius: '8px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer' }}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container" style={{ padding: '5rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#800000', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Ready to transform your space? Get in touch with us today</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '600px', width: '100%' }}>
          <h3 style={{ marginBottom: '3rem', color: '#800000', textAlign: 'center', fontSize: '2rem' }}>Get in Touch</h3>
          
          <div style={{ display: 'grid', gap: '2.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#fefaf6', borderRadius: '12px' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#800000', fontSize: '1.2rem' }}>📞 Call Us</h4>
              <p style={{ color: '#666', margin: '0', fontSize: '1.1rem' }}>
                <a href="tel:+919423487849" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>+91 94234 87849</a>
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#fefaf6', borderRadius: '12px' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#800000', fontSize: '1.2rem' }}>✉️ Email Us</h4>
              <p style={{ color: '#666', margin: '0', fontSize: '1.1rem' }}>
                <a href="mailto:sangamkitchen@gmail.com" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>sangamkitchen@gmail.com</a>
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#fefaf6', borderRadius: '12px' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#800000', fontSize: '1.2rem' }}>📍 Visit Us</h4>
              <p style={{ color: '#666', margin: '0', fontSize: '1.1rem', lineHeight: '1.6' }}>
                10, Nutan Maratha Complex,<br />
                Pratap Colony Road, Jilha Peth,<br />
                Near Sangitam Travels, Stadium Complex,<br />
                Jalgaon, Maharashtra 425001
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem', background: '#fefaf6', borderRadius: '12px' }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#800000', fontSize: '1.2rem' }}>🕒 Business Hours</h4>
              <p style={{ color: '#666', margin: '0', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Monday—Friday: 9:00AM–8:00PM<br />
                Saturday & Sunday: 11:00AM–3:00PM
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => window.open('tel:+919423487849')}
              style={{ 
                padding: '1rem 3rem', 
                background: '#800000', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1.1rem', 
                fontWeight: '500', 
                cursor: 'pointer',
                minWidth: '140px'
              }}
            >
              Call Now
            </button>
            <button 
              onClick={() => window.open(`https://wa.me/919423487849`)}
              style={{ 
                padding: '1rem 3rem', 
                background: '#25D366', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1.1rem', 
                fontWeight: '500', 
                cursor: 'pointer',
                minWidth: '140px'
              }}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;