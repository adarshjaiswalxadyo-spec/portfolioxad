import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MusicPlayer from '../components/MusicPlayer';

const ProjectsPage: React.FC = () => {
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
        <title>Projects - Adarsh Jaiswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Explore my latest projects and creative experiments" />
        <meta name="keywords" content="projects, portfolio, web development, coding" />
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
              <Link href="/projects" className="nav-link active">Projects</Link>
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

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">My Projects</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">Explore my latest work and creative experiments</p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Browser */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project1-browser.jpg" alt="Browser Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/trial/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/trial/blob/main/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Browser</h3>
                <p className="project-description">
                  A specialized browser for anime content discovery with integrated streaming
                  and anime-specific features.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Project 2: Emulator */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project2-emulator.jpg" alt="Emulator Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/adarshjaiswalxadyo-spec/emusmooth" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Emulator</h3>
                <p className="project-description">
                  Advanced emulator for classic anime games with enhanced graphics
                  and authentic gameplay experience.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Emulation</span>
                </div>
              </div>
            </div>

            {/* Project 3: Minibrow */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project3-minibrow.jpg" alt="Minibrow Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://github.com/adarshjaiswalxadyo-spec/bgd" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Minibrow</h3>
                <p className="project-description">
                  Compact browser optimized for anime streaming with fast loading
                  and anime-specific shortcuts.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Project 4: Games Mini */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project4-games.jpg" alt="Games Mini Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/GAME-X-adarsh/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/GAME-X-adarsh" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Games Mini</h3>
                <p className="project-description">
                  Collection of anime-inspired mini-games with character battles
                  and anime-style animations.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Canvas API</span>
                </div>
              </div>
            </div>

            {/* Project 5: Students Hub */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project5-students-hub.jpg" alt="Students Hub Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/students-hub/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/students-hub" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Students Hub</h3>
                <p className="project-description">
                  Community platform for anime students with learning resources,
                  tutorials, and anime study groups.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Responsive</span>
                </div>
              </div>
            </div>

            {/* Project 6: E-commerce Mini */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project6-ecommerce.jpg" alt="E-commerce Mini Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/ecomerce-mini/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/ecomerce-mini" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime E-commerce</h3>
                <p className="project-description">
                  Specialized e-commerce for anime merchandise with character collections
                  and anime-themed shopping experience.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">E-commerce</span>
                </div>
              </div>
            </div>

            {/* Project 7: AI Chat Assistant */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project7-ai-chat.jpg" alt="AI Chat Assistant Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/ai-chat-assistant/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/ai-chat-assistant" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime AI Assistant</h3>
                <p className="project-description">
                  AI-powered chatbot for anime recommendations, character info,
                  and anime database queries.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">NLP</span>
                </div>
              </div>
            </div>

            {/* Project 8: Weather Dashboard */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project8-weather.jpg" alt="Weather Dashboard Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/weather-dashboard" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Weather Dashboard</h3>
                <p className="project-description">
                  Weather app with anime-themed UI and seasonal anime
                  recommendations based on weather.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">API Integration</span>
                </div>
              </div>
            </div>

            {/* Project 9: Task Manager Pro */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project9-task-manager.jpg" alt="Task Manager Pro Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/task-manager-pro/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/task-manager-pro" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Task Manager</h3>
                <p className="project-description">
                  Task management with anime character mascots and anime-themed
                  productivity features and rewards.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                </div>
              </div>
            </div>

            {/* Project 10: Social Media Analytics */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project10-analytics.jpg" alt="Social Media Analytics Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/social-analytics/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/social-analytics" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Analytics</h3>
                <p className="project-description">
                  Analytics dashboard for anime streaming trends and anime
                  popularity metrics with visual charts.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">D3.js</span>
                  <span className="tech-tag">Charts.js</span>
                  <span className="tech-tag">REST API</span>
                </div>
              </div>
            </div>

            {/* Project 11: Portfolio Builder */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project11-portfolio-builder.jpg" alt="Portfolio Builder Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/portfolio-builder/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/portfolio-builder" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Portfolio Builder</h3>
                <p className="project-description">
                  Portfolio creation tool with anime-themed templates and character
                  avatars for anime artists.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Template Engine</span>
                </div>
              </div>
            </div>

            {/* Project 12: Fitness Tracker */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project12-fitness.jpg" alt="Fitness Tracker Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/fitness-tracker/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/fitness-tracker" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Anime Fitness Tracker</h3>
                <p className="project-description">
                  Fitness app with anime workout routines and anime character
                  training programs and challenges.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">PWA</span>
                </div>
              </div>
            </div>

            {/* Project 13: Blog Platform */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project13-blog.jpg" alt="Blog Platform Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/blog-platform/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/blog-platform" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Blog Platform</h3>
                <p className="project-description">
                  A full-featured blogging platform with rich text editor, categories, 
                  comments system, and SEO optimization.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Markdown</span>
                </div>
              </div>
            </div>

            {/* Project 14: Recipe App */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project14-recipe.jpg" alt="Recipe App Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/recipe-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/recipe-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Recipe App</h3>
                <p className="project-description">
                  A recipe discovery and management app with search functionality, 
                  meal planning, and nutritional information.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">Database</span>
                  <span className="tech-tag">API</span>
                </div>
              </div>
            </div>

            {/* Project 15: Music Player */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project15-music.jpg" alt="Music Player Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/music-player/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/music-player" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Music Player</h3>
                <p className="project-description">
                  A modern music streaming interface with playlist management, 
                  audio controls, and visual effects.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Web Audio</span>
                </div>
              </div>
            </div>

            {/* Project 16: Calculator Pro */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project16-calculator.jpg" alt="Calculator Pro Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/calculator-pro/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/calculator-pro" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Calculator Pro</h3>
                <p className="project-description">
                  Advanced calculator with scientific functions, history tracking, 
                  and expression evaluation.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Math.js</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">HTML5</span>
                </div>
              </div>
            </div>

            {/* Project 17: Quiz App */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project17-quiz.jpg" alt="Quiz App Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/quiz-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/quiz-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Quiz App</h3>
                <p className="project-description">
                  Interactive quiz application with multiple categories, scoring system, 
                  and progress tracking.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">State Management</span>
                  <span className="tech-tag">Animations</span>
                  <span className="tech-tag">Responsive</span>
                </div>
              </div>
            </div>

            {/* Project 18: Clock App */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project18-clock.jpg" alt="Clock App Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/clock-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/clock-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Clock App</h3>
                <p className="project-description">
                  World clock application with timezone support, alarms, 
                  and beautiful visual themes.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Date API</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Animations</span>
                </div>
              </div>
            </div>

            {/* Project 19: File Manager */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project19-file-manager.jpg" alt="File Manager Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/file-manager/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/file-manager" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">File Manager</h3>
                <p className="project-description">
                  File management system with drag-and-drop, folder operations, 
                  and file preview capabilities.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">File API</span>
                  <span className="tech-tag">Drag & Drop</span>
                  <span className="tech-tag">Storage</span>
                </div>
              </div>
            </div>

            {/* Project 20: Calendar App */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project20-calendar.jpg" alt="Calendar App Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/calendar-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/calendar-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Calendar App</h3>
                <p className="project-description">
                  Interactive calendar with event management, reminders, 
                  and multiple view options.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Date Picker</span>
                  <span className="tech-tag">Local Storage</span>
                  <span className="tech-tag">Events</span>
                </div>
              </div>
            </div>

            {/* Project 21: Notes App */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project21-notes.jpg" alt="Notes App Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/notes-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/notes-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Notes App</h3>
                <p className="project-description">
                  Note-taking application with rich text editing, categories, 
                  search, and synchronization features.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Rich Text</span>
                  <span className="tech-tag">IndexedDB</span>
                  <span className="tech-tag">Search</span>
                </div>
              </div>
            </div>

            {/* Project 22: Password Manager */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project22-password.jpg" alt="Password Manager Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/password-manager/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/password-manager" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Password Manager</h3>
                <p className="project-description">
                  Secure password manager with encryption, password generation, 
                  and secure storage features.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Encryption</span>
                  <span className="tech-tag">Security</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Crypto</span>
                </div>
              </div>
            </div>

            {/* Project 23: Image Editor */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project23-image-editor.jpg" alt="Image Editor Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/image-editor/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/image-editor" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Image Editor</h3>
                <p className="project-description">
                  Web-based image editor with filters, adjustments, cropping, 
                  and export functionality.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Canvas API</span>
                  <span className="tech-tag">Image Processing</span>
                  <span className="tech-tag">Filters</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Project 24: Chat Application */}
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/project24-chat.jpg" alt="Chat Application Project" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://adarshjaiswalxadyo-spec.github.io/chat-app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="https://github.com/adarshjaiswalxadyo-spec/chat-app" target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Chat Application</h3>
                <p className="project-description">
                  Real-time chat application with messaging, rooms, 
                  user authentication, and notifications.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Socket.io</span>
                  <span className="tech-tag">WebSocket</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Real-time</span>
                </div>
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

export default ProjectsPage;
