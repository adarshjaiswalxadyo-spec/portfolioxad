import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', className: 'html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', className: 'css3' },
    { name: 'JavaScript', icon: 'fab fa-js', className: 'javascript' },
    { name: 'Node.js', icon: 'fab fa-node-js', className: 'nodejs' },
    { name: 'React', icon: 'fab fa-react', className: 'react' },
    { name: 'Databases', icon: 'fas fa-database', className: 'database' },
  ];

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I transform 
              ideas into powerful digital solutions.
            </p>
            <p>
              My journey in web development started with curiosity and has evolved into a 
              career dedicated to pushing the boundaries of what's possible on the web. 
              I specialize in building responsive, performant, and visually stunning applications 
              that leave lasting impressions.
            </p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className={`skill-item ${skill.className}`}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
