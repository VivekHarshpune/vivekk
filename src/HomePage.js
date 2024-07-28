// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import profileImage from './1652733850767 copy.jpg'; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="profile-container">
        <img src={profileImage} alt="Vivek" className="profile-image" />
      </div>
      <h1>Vivek's Portfolio</h1>
      <p>Welcome! I am Vivek, a BTech 4th-year student and passionate coder.</p>

      <section className="introduction">
        <h2>About Me</h2>
        <p>
          I am a 4th-year BTech student specializing in Computer Science. My expertise includes web development, machine learning, and a variety of other technologies.
          Explore my work to learn more about my projects, skills, and experiences.
        </p>
        <Link to="/about" className="about-link">Learn More About Me</Link>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>Here are some of the skills and technologies I specialize in:</p>
        <ul>
          <li>Programming Languages: Python, JavaScript</li>
          <li>Web Development: React.js, Node.js, Express.js</li>
          <li>Machine Learning: Scikit-Learn, TensorFlow</li>
          <li>Database Management: MongoDB, SQL</li>
          <li>Cloud Computing: AWS, Azure</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3><Link to="/projects">Explore My Projects</Link></h3>
            <p>Discover the various projects I've worked on, including web applications, machine learning models, and more.</p>
          </div>
          <div className="project-item">
            <h3><Link to="/communitybook">CommunityBook Project</Link></h3>
            <p>Learn about my CommunityBook project, a platform for booking sports facilities and more.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Interested in Collaborating?</h2>
        <p>If you're interested in working together or have any questions, feel free to reach out!</p>
        <Link to="/contact" className="cta-link">Contact Me</Link>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Vivek. All rights reserved.</p>
        <p><Link to="/contact">Contact</Link> | <Link to="/about">About</Link></p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/github-icon.png" alt="GitHub" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media links here */}
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
