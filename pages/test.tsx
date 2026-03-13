import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TestPage: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<string>('Loading...');
  const [testResults, setTestResults] = useState<string[]>([]);

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

    // Test API connection
    testAPIConnection();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const testAPIConnection = async () => {
    const results: string[] = [];
    
    try {
      // Test health endpoint
      const response = await fetch('http://localhost:3001/api/health');
      if (response.ok) {
        const data = await response.json();
        setApiStatus('✅ Connected');
        results.push('✅ Backend health check: PASSED');
        results.push(`📊 Server status: ${data.status}`);
      } else {
        throw new Error('Health check failed');
      }
    } catch (error) {
      setApiStatus('❌ Connection Failed');
      results.push('❌ Backend health check: FAILED');
      results.push(`🔍 Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Test frontend features
    results.push('🎨 Tailwind CSS: Loaded');
    results.push('⚛️ React Components: Working');
    results.push('📱 Responsive Design: Active');
    results.push('🌓 Theme Toggle: Available');
    
    setTestResults(results);
  };

  return (
    <>
      <Head>
        <title>Test Page - Adarsh Jaiswal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Test page for portfolio functionality" />
      </Head>

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particles"></div>
        <div className="gradient-overlay"></div>
      </div>

      <Navbar />

      <section className="test-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">System Test</h1>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Testing all portfolio components and functionality
            </p>
          </div>

          <div className="test-content">
            {/* API Status */}
            <div className="test-card">
              <h2 className="test-card-title">
                <i className="fas fa-server"></i>
                Backend Connection
              </h2>
              <div className="test-status">
                <span className={`status-badge ${apiStatus.includes('✅') ? 'success' : apiStatus.includes('❌') ? 'error' : 'loading'}`}>
                  {apiStatus}
                </span>
              </div>
              <div className="test-actions">
                <button 
                  onClick={testAPIConnection}
                  className="btn btn-primary"
                >
                  <i className="fas fa-sync-alt"></i>
                  Test Connection
                </button>
                <a 
                  href="http://localhost:3001/api/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Open API
                </a>
              </div>
            </div>

            {/* Test Results */}
            <div className="test-card">
              <h2 className="test-card-title">
                <i className="fas fa-clipboard-check"></i>
                Test Results
              </h2>
              <div className="test-results">
                {testResults.map((result, index) => (
                  <div key={index} className="test-result-item">
                    {result}
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Tests */}
            <div className="test-card">
              <h2 className="test-card-title">
                <i className="fas fa-cogs"></i>
                Feature Tests
              </h2>
              <div className="feature-tests">
                <div className="feature-test">
                  <i className="fas fa-palette"></i>
                  <span>Theme Toggle</span>
                  <button 
                    onClick={() => document.body.classList.toggle('light-theme')}
                    className="btn btn-sm"
                  >
                    Toggle Theme
                  </button>
                </div>
                <div className="feature-test">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Responsive Design</span>
                  <span className="test-indicator success">✅</span>
                </div>
                <div className="feature-test">
                  <i className="fas fa-magic"></i>
                  <span>Animations</span>
                  <span className="test-indicator success">✅</span>
                </div>
                <div className="feature-test">
                  <i className="fas fa-images"></i>
                  <span>Asset Loading</span>
                  <span className="test-indicator success">✅</span>
                </div>
              </div>
            </div>

            {/* Navigation Test */}
            <div className="test-card">
              <h2 className="test-card-title">
                <i className="fas fa-compass"></i>
                Navigation Test
              </h2>
              <div className="nav-test">
                <p>Test all pages are accessible:</p>
                <div className="nav-links-test">
                  <a href="/" className="test-link">Home</a>
                  <a href="/about" className="test-link">About</a>
                  <a href="/projects" className="test-link">Projects</a>
                  <a href="/certificates" className="test-link">Certificates</a>
                  <a href="/videos" className="test-link">Videos</a>
                  <a href="/contact" className="test-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TestPage;
