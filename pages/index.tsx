import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Add Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Add Google Fonts
    const googleFonts = document.createElement('link');
    googleFonts.rel = 'preconnect';
    googleFonts.href = 'https://fonts.googleapis.com';
    document.head.appendChild(googleFonts);

    const googleFonts2 = document.createElement('link');
    googleFonts2.rel = 'preconnect';
    googleFonts2.href = 'https://fonts.gstatic.com';
    googleFonts2.crossOrigin = 'anonymous';
    document.head.appendChild(googleFonts2);

    const googleFonts3 = document.createElement('link');
    googleFonts3.rel = 'stylesheet';
    googleFonts3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(googleFonts3);

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    const mobileMenu = () => {
      hamburger?.classList.toggle('active');
      navMenu?.classList.toggle('active');
    };
    
    hamburger?.addEventListener('click', mobileMenu);

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      });
    });

    return () => {
      hamburger?.removeEventListener('click', mobileMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Adarsh Jaiswal - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Passionate web developer creating stunning digital experiences" />
        <meta name="keywords" content="web developer, portfolio, react, next.js, typescript" />
        <meta name="author" content="Adarsh Jaiswal" />
      </Head>

      {/* Enhanced Background Effects */}
      <div className="animated-bg">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AJ</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/certificates" className="nav-link">Certificates</Link>
            </li>
            <li className="nav-item">
              <Link href="/videos" className="nav-link">Videos</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="theme-toggle" id="themeToggle">
                <i className="fas fa-moon"></i>
              </button>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="greeting">Hello, I'm</span>
                <span className="name">Adarsh Jaiswal</span>
              </h1>
              <div className="hero-tagline">
                <span className="tagline-text">Web Developer</span>
                <span className="tagline-text">Creative Coder</span>
                <span className="tagline-text">Tech Enthusiast</span>
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
                <img src="/assets/profile.png" alt="Adarsh Jaiswal" className="profile-img" />
                <div className="profile-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <p>&copy; 2026 Adarsh Jaiswal. All rights reserved.</p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/adar.xhevil" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:adarshjaiswalxadyo@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://github.com/adarshjaiswalxadyo-spec" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Music Player */}
      <MusicPlayer />
    </>
  );
};

export default HomePage;
