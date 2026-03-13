import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://instagram.com/adar.xhevil',
      icon: 'fab fa-instagram',
      label: 'Instagram',
      target: '_blank'
    },
    {
      href: 'mailto:adarshjaiswalxadyo@gmail.com',
      icon: 'fas fa-envelope',
      label: 'Email',
      target: '_self'
    },
    {
      href: 'https://github.com/adarshjaiswalxadyo-spec',
      icon: 'fab fa-github',
      label: 'GitHub',
      target: '_blank'
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2026 Adarsh Jaiswal. All rights reserved.</p>
          </div>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="social-link"
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
