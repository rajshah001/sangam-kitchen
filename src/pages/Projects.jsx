import React, { useEffect, useState } from 'react';
import { FaFilter, FaGrid3X3, FaTh, FaSearch, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import 'aos/dist/aos.css';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const categories = ['All', 'Kitchen', 'Living Room', 'Bedroom', 'Dining Room', 'Bathroom', 'Study Room'];

  const projects = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      title: 'Modern Modular Kitchen',
      category: 'Kitchen',
      description: 'Contemporary kitchen design with smart storage solutions and premium appliances.',
      location: 'Mumbai',
      year: '2023'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      title: 'Luxury Living Room',
      category: 'Living Room',
      description: 'Elegant living space with custom furniture and sophisticated lighting.',
      location: 'Delhi',
      year: '2023'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      title: 'Contemporary Bedroom',
      category: 'Bedroom',
      description: 'Serene bedroom design with built-in wardrobes and ambient lighting.',
      location: 'Bangalore',
      year: '2023'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      title: 'Elegant Dining Space',
      category: 'Dining Room',
      description: 'Sophisticated dining room with custom table and designer lighting.',
      location: 'Chennai',
      year: '2022'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
      title: 'Traditional Kitchen',
      category: 'Kitchen',
      description: 'Classic kitchen design blending traditional aesthetics with modern functionality.',
      location: 'Pune',
      year: '2022'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800',
      title: 'Minimalist Bedroom',
      category: 'Bedroom',
      description: 'Clean, minimalist bedroom design with focus on simplicity and comfort.',
      location: 'Hyderabad',
      year: '2022'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      title: 'Cozy Living Room',
      category: 'Living Room',
      description: 'Warm and inviting living space perfect for family gatherings.',
      location: 'Kolkata',
      year: '2023'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1631889993959-41b4c6ee4b4b?w=800',
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      description: 'Spa-like bathroom with premium fixtures and marble finishes.',
      location: 'Mumbai',
      year: '2023'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      title: 'Modern Study Room',
      category: 'Study Room',
      description: 'Productive workspace with custom built-in storage and ergonomic design.',
      location: 'Delhi',
      year: '2022'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      title: 'Guest Bedroom',
      category: 'Bedroom',
      description: 'Comfortable guest bedroom with space-saving furniture solutions.',
      location: 'Jaipur',
      year: '2023'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProjectClick = (project) => {
    setCurrentImage(project);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleNextImage = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === currentImage.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setCurrentImage(filteredProjects[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === currentImage.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentImage(filteredProjects[prevIndex]);
  };

  const handleKeyPress = (e) => {
    if (lightboxOpen) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentImage]);

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero__background">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920" 
            alt="Beautiful interior projects"
          />
          <div className="projects-hero__overlay"></div>
        </div>
        <div className="container">
          <div className="projects-hero__content" data-aos="fade-up">
            <h1>Our Projects</h1>
            <p>
              Explore our portfolio of stunning interior design and kitchen setup projects 
              that showcase our expertise and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-gallery bg-white">
        <div className="container">
          {/* Filters and Controls */}
          <div className="projects-controls" data-aos="fade-up">
            <div className="projects-controls__left">
              <h2>Our Work</h2>
              <p>Showing {filteredProjects.length} projects</p>
            </div>
            
            <div className="projects-controls__right">
              {/* Search */}
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              {/* View Mode Toggle */}
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <FaGrid3X3 />
                </button>
                <button
                  className={`view-btn ${viewMode === 'masonry' ? 'active' : ''}`}
                  onClick={() => setViewMode('masonry')}
                  aria-label="Masonry view"
                >
                  <FaTh />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters" data-aos="fade-up" data-aos-delay="100">
            <div className="filter-label">
              <FaFilter />
              <span>Filter by category:</span>
            </div>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div 
            className={`projects-grid ${viewMode === 'masonry' ? 'projects-grid--masonry' : ''}`}
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-item"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <ProjectCard
                  {...project}
                  onClick={handleProjectClick}
                  size={viewMode === 'masonry' ? 'medium' : 'medium'}
                  className={viewMode === 'masonry' ? 'project-card--masonry' : ''}
                />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="no-results" data-aos="fade-up">
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setActiveFilter('All');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section projects-stats bg-cream">
        <div className="container">
          <div className="stats-grid" data-aos="fade-up">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h2>Inspired by Our Work?</h2>
            <p>Let's create something beautiful for your home too</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" href="/contact">
                Start Your Project
              </Button>
              <Button variant="secondary" size="large" href="/services">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <div className="lightbox__image-container">
              <img src={currentImage.image} alt={currentImage.title} />
              
              <button className="lightbox__nav lightbox__nav--prev" onClick={handlePrevImage}>
                ‹
              </button>
              <button className="lightbox__nav lightbox__nav--next" onClick={handleNextImage}>
                ›
              </button>
            </div>
            
            <div className="lightbox__info">
              <h3>{currentImage.title}</h3>
              <p className="lightbox__category">{currentImage.category}</p>
              <p className="lightbox__description">{currentImage.description}</p>
              <div className="lightbox__meta">
                <span>📍 {currentImage.location}</span>
                <span>📅 {currentImage.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;