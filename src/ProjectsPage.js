import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li><strong>CommunityBook:</strong> A platform for booking sports facilities.</li>
        <li><strong>Smart Home Automation:</strong> An IoT-based home automation system.</li>
        <li><strong>Cloud-Based Video Surveillance:</strong> A project involving real-time video analytics.</li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  );
}

export default ProjectsPage;
