import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const taglines = [
    'Web Developer',
    'Creative Coder',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Adarsh Jaiswal</span>
            </h1>
            <div className="hero-tagline">
              {taglines.map((tagline, index) => (
                <span
                  key={index}
                  className={`tagline-text ${index === currentTagline ? 'active' : ''}`}
                >
                  {tagline}
                </span>
              ))}
            </div>
            <p className="hero-description">
              Passionate about creating stunning web experiences and innovative digital solutions.
            </p>
            <div className="hero-buttons">
              <Link href="/projects" className="btn btn-primary">
                <span>View Projects</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img 
                src="/assets/profile.png" 
                alt="Adarsh Jaiswal" 
                className="profile-img"
              />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
