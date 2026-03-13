import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';

const VideosPage: React.FC = () => {
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
        <title>Videos - Adarsh Jaiswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Showcasing projects, tutorials, and creative experiments" />
        <meta name="keywords" content="videos, tutorials, projects, creative experiments" />
        <meta name="author" content="Adarsh Jaiswal" />
      </Head>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particles"></div>
        <div className="gradient-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">AJ</span>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
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
              <Link href="/videos" className="nav-link active">Videos</Link>
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

      {/* Videos Section */}
      <section className="videos">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Video Gallery</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">Showcasing projects, tutorials, and creative experiments</p>
          </div>

          {/* Featured Video */}
          <div className="featured-video">
            <div className="featured-video-container">
              <video id="featuredVideoPlayer" className="video-player" style={{width: '100%', height: '500px', borderRadius: 'var(--radius-xl)', background: '#000'}} controls>
                <source src="/assets/featured-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Categories */}
          <div className="video-categories">
            <button className="category-btn active" data-category="all">All Videos</button>
            <button className="category-btn" data-category="tutorials">Tutorials</button>
            <button className="category-btn" data-category="projects">Project Demos</button>
            <button className="category-btn" data-category="creative">Creative</button>
            <button className="category-btn" data-category="coding">Coding</button>
            <button className="category-btn" data-category="design">Design</button>
          </div>

          {/* Search Bar */}
          <div className="video-search">
            <div className="search-container">
              <input type="text" id="videoSearch" placeholder="Search videos..." className="search-input" />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="videos-grid">
            {/* Video 1 */}
            <div className="video-card" data-category="tutorials">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">12:45</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">Anime Fighting Techniques</h3>
                <p className="video-description">Advanced anime-style fighting animations and combat mechanics</p>
                <div className="video-meta">
                  <span className="video-date">March 2024</span>
                  <span className="video-views">1.2K views</span>
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="video-card" data-category="projects">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">8:30</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">E-commerce Mini Demo</h3>
                <p className="video-description">Complete walkthrough of e-commerce mini project features</p>
                <div className="video-meta">
                  <span className="video-date">February 2024</span>
                  <span className="video-views">856 views</span>
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="video-card" data-category="creative">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">6:15</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">Anime Character Design</h3>
                <p className="video-description">Creating anime-style characters with modern animation techniques</p>
                <div className="video-meta">
                  <span className="video-date">January 2024</span>
                  <span className="video-views">2.1K views</span>
                </div>
              </div>
            </div>

            {/* Video 4 */}
            <div className="video-card" data-category="tutorials">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">15:20</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">JavaScript Fundamentals</h3>
                <p className="video-description">Core JavaScript concepts every developer should know</p>
                <div className="video-meta">
                  <span className="video-date">December 2023</span>
                  <span className="video-views">3.5K views</span>
                </div>
              </div>
            </div>

            {/* Video 5 */}
            <div className="video-card" data-category="projects">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">10:45</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">Anime Fight Scene</h3>
                <p className="video-description">Epic anime-style battle sequences and special effects</p>
                <div className="video-meta">
                  <span className="video-date">November 2023</span>
                  <span className="video-views">1.8K views</span>
                </div>
              </div>
            </div>

            {/* Video 6 */}
            <div className="video-card" data-category="creative">
              <div className="video-thumbnail">
                <video className="video-player" controls>
                  <source src="/assets/video6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-duration">7:30</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">Responsive Layouts Tutorial</h3>
                <p className="video-description">Learn how to create responsive web layouts using modern CSS techniques</p>
                <div className="video-meta">
                  <span className="video-date">October 2023</span>
                  <span className="video-views">945 views</span>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="load-more-container">
            <button className="btn btn-secondary" id="loadMoreVideos">
              <span>Load More Videos</span>
              <i className="fas fa-chevron-down"></i>
            </button>
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

export default VideosPage;
