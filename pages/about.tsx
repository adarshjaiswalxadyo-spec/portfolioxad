import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';

const AboutPage: React.FC = () => {
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

    // Add custom styles for about page
    const customStyles = document.createElement('style');
    customStyles.textContent = `
        /* Timeline Styles */
        .timeline-section {
            padding: var(--spacing-3xl) 0;
            background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
        }
        
        .timeline {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
            padding: var(--spacing-xl) 0;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
            transform: translateX(-50%);
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: var(--spacing-2xl);
            display: flex;
            align-items: center;
        }
        
        .timeline-item:nth-child(odd) {
            flex-direction: row-reverse;
        }
        
        .timeline-dot {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
            transition: all var(--transition-fast);
        }
        
        .timeline-item:hover .timeline-dot {
            transform: translateX(-50%) scale(1.1);
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);
        }
        
        .timeline-icon {
            color: white;
            font-size: 1.5rem;
        }
        
        .timeline-content {
            width: 45%;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: var(--spacing-xl);
            position: relative;
            transition: all var(--transition-fast);
        }
        
        .timeline-item:hover .timeline-content {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(99, 102, 241, 0.2);
            border-color: var(--primary-color);
        }
        
        .timeline-date {
            font-size: 1.2rem;
            font-weight: var(--font-weight-bold);
            color: var(--primary-color);
            margin-bottom: var(--spacing-sm);
        }
        
        .timeline-title {
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
            color: var(--text-primary);
            margin-bottom: var(--spacing-md);
        }
        
        .timeline-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: var(--spacing-lg);
        }
        
        .timeline-photo {
            width: 100%;
            height: 200px;
            border-radius: var(--radius-lg);
            overflow: hidden;
            margin-top: var(--spacing-md);
        }
        
        .timeline-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform var(--transition-fast);
        }
        
        .timeline-item:hover .timeline-photo img {
            transform: scale(1.05);
        }
        
        /* Personal Gallery Styles */
        .personal-gallery {
            padding: var(--spacing-3xl) 0;
        }
        
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing-xl);
            margin-top: var(--spacing-2xl);
        }
        
        .gallery-item {
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
            height: 250px;
            cursor: pointer;
            transition: all var(--transition-fast);
        }
        
        .gallery-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform var(--transition-fast);
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
            padding: var(--spacing-xl);
            transform: translateY(100%);
            transition: transform var(--transition-fast);
        }
        
        .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
        }
        
        .gallery-info h3 {
            color: white;
            font-weight: var(--font-weight-bold);
            margin-bottom: var(--spacing-xs);
        }
        
        .gallery-info p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
        }
        
        /* Animated About Hero Styles */
        .about-hero {
            padding: var(--spacing-3xl) 0;
            position: relative;
            overflow: hidden;
            background: var(--bg-secondary);
        }
        
        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-2xl);
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .about-hero-title {
            font-size: 3.5rem;
            font-weight: var(--font-weight-bold);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: var(--spacing-lg);
        }
        
        .animated-text {
            font-size: 1.3rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin: var(--spacing-xl) 0;
        }
        
        .word {
            display: inline-block;
            opacity: 0;
            transform: translateY(20px);
            animation: wordAppear 0.5s forwards;
        }
        
        @keyframes wordAppear {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hero-stats {
            display: flex;
            gap: var(--spacing-xl);
            margin-top: var(--spacing-2xl);
        }
        
        .animated-stat {
            text-align: center;
            padding: var(--spacing-lg);
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            transition: all var(--transition-fast);
        }
        
        .animated-stat:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(99, 102, 241, 0.2);
            border-color: var(--primary-color);
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: var(--font-weight-bold);
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .stat-label {
            color: var(--text-secondary);
            font-weight: var(--font-weight-medium);
            margin-top: var(--spacing-sm);
        }
        
        .profile-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .profile-wrapper {
            position: relative;
            width: 300px;
            height: 300px;
        }
        
        .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid var(--primary-color);
            animation: profileFloat 3s ease-in-out infinite;
        }
        
        @keyframes profileFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(2deg); }
            75% { transform: translateY(5px) rotate(-2deg); }
        }
        
        .profile-glow {
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent);
            border-radius: 50%;
            animation: glowPulse 2s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
        }
        
        .profile-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.6;
        }
        
        .particle:nth-child(1) { top: 20%; left: 10%; animation: floatParticle1 3s infinite; }
        .particle:nth-child(2) { top: 30%; right: 15%; animation: floatParticle2 4s infinite; }
        .particle:nth-child(3) { bottom: 25%; left: 20%; animation: floatParticle3 3.5s infinite; }
        .particle:nth-child(4) { bottom: 30%; right: 10%; animation: floatParticle4 4.5s infinite; }
        .particle:nth-child(5) { top: 50%; left: 5%; animation: floatParticle5 3.2s infinite; }
        .particle:nth-child(6) { top: 60%; right: 5%; animation: floatParticle6 3.8s infinite; }
        
        @keyframes floatParticle1 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(10px, -15px); }
        }
        
        @keyframes floatParticle2 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-12px, -18px); }
        }
        
        @keyframes floatParticle3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(15px, -12px); }
        }
        
        @keyframes floatParticle4 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-18px, 10px); }
        }
        
        @keyframes floatParticle5 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(8px, 12px); }
        }
        
        @keyframes floatParticle6 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-10px, -8px); }
        }
        
        /* Story Section Styles */
        .story-section {
            padding: var(--spacing-3xl) 0;
            background: var(--bg-primary);
        }
        
        .story-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-2xl);
            align-items: center;
            margin-top: var(--spacing-2xl);
        }
        
        .story-paragraph {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: var(--spacing-lg);
        }
        
        .highlight {
            color: var(--primary-color);
            font-weight: var(--font-weight-bold);
        }
        
        .anime-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .anime-character {
            width: 250px;
            height: 250px;
            object-fit: contain;
            animation: bounce 3s ease-in-out infinite;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        
        .anime-effects {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        
        .sparkle {
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--accent-color), transparent);
            border-radius: 50%;
            animation: sparkle 2s ease-in-out infinite;
        }
        
        .sparkle:nth-child(1) {
            top: 10%;
            left: 20%;
            animation-delay: 0s;
        }
        
        .sparkle:nth-child(2) {
            top: 20%;
            right: 15%;
            animation-delay: 0.5s;
        }
        
        .sparkle:nth-child(3) {
            bottom: 15%;
            left: 10%;
            animation-delay: 1s;
        }
        
        .sparkle:nth-child(4) {
            bottom: 25%;
            right: 20%;
            animation-delay: 1.5s;
        }
        
        .sparkle:nth-child(5) {
            top: 50%;
            left: 50%;
            animation-delay: 0.3s;
        }
        
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
        }
        
        .anime-glow {
            position: absolute;
            top: -30px;
            left: -30px;
            right: -30px;
            bottom: -30px;
            background: radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent);
            border-radius: 50%;
            animation: animeGlow 4s ease-in-out infinite alternate;
        }
        
        @keyframes animeGlow {
            from { opacity: 0.3; }
            to { opacity: 0.7; }
        }
        
        /* Values Section Styles */
        .values-section {
            padding: var(--spacing-3xl) 0;
            background: var(--bg-secondary);
        }
        
        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-xl);
            margin-top: var(--spacing-2xl);
        }
        
        .value-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: var(--spacing-xl);
            text-align: center;
            transition: all var(--transition-fast);
        }
        
        .value-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
            border-color: var(--primary-color);
        }
        
        .value-icon {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: var(--spacing-lg);
        }
        
        .value-title {
            font-size: 1.5rem;
            font-weight: var(--font-weight-bold);
            color: var(--text-primary);
            margin-bottom: var(--spacing-md);
        }
        
        .value-description {
            color: var(--text-secondary);
            line-height: 1.6;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: var(--spacing-xl);
            }
            
            .about-hero-title {
                font-size: 2.5rem;
            }
            
            .hero-stats {
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .story-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .timeline::before {
                left: 20px;
            }
            
            .timeline-item {
                flex-direction: column !important;
                align-items: flex-start !important;
                padding-left: 60px;
            }
            
            .timeline-dot {
                position: absolute;
                left: 20px;
                transform: translateX(-50%);
            }
            
            .timeline-content {
                width: 100%;
            }
            
            .values-grid {
                grid-template-columns: 1fr;
            }
            
            .profile-img {
                width: 200px;
                height: 200px;
            }
        }
    `;
    document.head.appendChild(customStyles);

    // Animate words on page load
    setTimeout(() => {
      const words = document.querySelectorAll('.word');
      words.forEach((word, index) => {
        (word as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      });
      
      // Animate stat numbers
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt((stat as HTMLElement).getAttribute('data-target') || '0');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          (stat as HTMLElement).textContent = Math.floor(current).toString();
        }, 30);
      });
    }, 100);

    return () => {
      hamburger?.removeEventListener('click', mobileMenu);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About - Adarsh Jaiswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn more about Adarsh Jaiswal - passionate web developer" />
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
              <Link href="/about" className="nav-link active">About</Link>
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

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="about-hero-title">About Adarsh Jaiswal</h1>
              <div className="hero-description">
                <p className="animated-text">
                  <span className="word">Passionate</span>
                  <span className="word">web</span>
                  <span className="word">developer</span>
                  <span className="word">dedicated</span>
                  <span className="word">to</span>
                  <span className="word">creating</span>
                  <span className="word">innovative</span>
                  <span className="word">digital</span>
                  <span className="word">solutions</span>
                  <span className="word">and</span>
                  <span className="word">pushing</span>
                  <span className="word">the</span>
                  <span className="word">boundaries</span>
                  <span className="word">of</span>
                  <span className="word">modern</span>
                  <span className="word">web</span>
                  <span className="word">technology</span>
                </p>
              </div>
              <div className="hero-stats">
                <div className="stat-item animated-stat">
                  <div className="stat-number" data-target="24">0</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item animated-stat">
                  <div className="stat-number" data-target="12">0</div>
                  <div className="stat-label">Certificates</div>
                </div>
                <div className="stat-item animated-stat">
                  <div className="stat-number" data-target="5">0</div>
                  <div className="stat-label">Years</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-container">
                <div className="profile-wrapper">
                  <img src="/assets/profile-pro.png" alt="Adarsh Jaiswal" className="profile-img" />
                  <div className="profile-glow"></div>
                  <div className="profile-particles">
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animated-title">
              <span className="title-word">My</span>
              <span className="title-word">Journey</span>
            </h2>
            <div className="section-divider animated-divider"></div>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p className="story-paragraph animated-paragraph">
                <span className="highlight">My journey</span> in web development began with a simple curiosity about how websites work and evolved into a passion for creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies, I transform ideas into powerful digital solutions that make a difference.
              </p>
              <p className="story-paragraph animated-paragraph">
                I believe in <span className="highlight">continuous learning</span>, staying updated with the latest trends, and always pushing myself to create better, more innovative solutions. Every project is an opportunity to learn, grow, and make a positive impact.
              </p>
            </div>
            <div className="story-visual">
              <div className="anime-container">
                <img src="/assets/anime-character.png" alt="Anime Character" className="anime-character" />
                <div className="anime-effects">
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                  <div className="sparkle"></div>
                </div>
                <div className="anime-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">The path that shaped my career</p>
          </div>
          
          <div className="timeline">
            {/* Timeline Item 1 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2022</div>
                <h3 className="timeline-title">Started Web Development Journey</h3>
                <p className="timeline-description">
                  Began learning HTML, CSS, and JavaScript. Built first static websites 
                  and discovered passion for creating digital experiences.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2020.gif" alt="2020 Journey" />
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-code"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2023</div>
                <h3 className="timeline-title">Advanced JavaScript & React</h3>
                <p className="timeline-description">
                  Mastered modern JavaScript concepts and React framework. 
                  Built dynamic web applications and joined developer communities.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2021.gif" alt="2021 Journey" />
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-server"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2022</div>
                <h3 className="timeline-title">Full-Stack Development</h3>
                <p className="timeline-description">
                  Learned Node.js, Express, and MongoDB. Created complete web applications 
                  with frontend and backend integration.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2022.gif" alt="2022 Journey" />
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-trophy"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2023</div>
                <h3 className="timeline-title">Professional Projects & Certifications</h3>
                <p className="timeline-description">
                  Completed 10+ professional projects, earned multiple certifications, 
                  and started freelancing for international clients.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2023.gif" alt="2023 Journey" />
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2024</div>
                <h3 className="timeline-title">Portfolio Launch & Growth</h3>
                <p className="timeline-description">
                  Launched professional portfolio, expanded to 24+ projects, 
                  and established strong online presence as a developer.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2024.gif" alt="2024 Journey" />
                </div>
              </div>
            </div>

            {/* Timeline Item 6 */}
            <div className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-icon">
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2025</div>
                <h3 className="timeline-title">Anime Content Creation & AI Integration</h3>
                <p className="timeline-description">
                  Creating advanced anime-style content, AI-powered animations, 
                  and building innovative solutions with cutting-edge web technologies.
                </p>
                <div className="timeline-photo">
                  <img src="/assets/journey-2025.gif" alt="2025 Journey" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Gallery Section */}
      <section className="personal-gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Personal Moments</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Behind the code - my personal journey</p>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/assets/personal-1.gif" alt="Personal Moment 1" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Coding Sessions</h3>
                  <p>Late night coding marathons</p>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/assets/personal-2.gif" alt="Personal Moment 2" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Project Launch</h3>
                  <p>Celebrating successful deployments</p>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/assets/personal-3.gif" alt="Personal Moment 3" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Learning New Tech</h3>
                  <p>Exploring new frameworks</p>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/assets/personal-4.gif" alt="Personal Moment 4" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Team Collaboration</h3>
                  <p>Working with amazing people</p>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/assets/personal-5.gif" alt="Personal Moment 5" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Achievement Unlocked</h3>
                  <p>Certification milestones</p>
                </div>
              </div>
            </div>
            
            <div className="gallery-item">
              <img src="/assets/personal-6.gif" alt="Personal Moment 6" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>Creative Break</h3>
                  <p>Finding inspiration everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Principles that guide my work</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Always pushing boundaries and exploring new technologies 
                to create cutting-edge solutions.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="value-title">Passion</h3>
              <p className="value-description">
                Deep love for what we do drives us to create 
                exceptional digital experiences.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Working together as a team to achieve 
                extraordinary results.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                Committed to delivering the highest quality 
                in everything we create.
              </p>
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

export default AboutPage;