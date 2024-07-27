import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
   
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>
            Hi, I'm Vivek, a 4th-year BTech Computer Science student. I specialize in web development, machine learning, and various other technologies. 
            I am passionate about coding and continuously learning new skills to improve my craft.
          </p>
        </section>
        <section className="section">
          <h2>Personal Information</h2>
          <p>Name: <strong>Vivek H A R S H</strong></p>
          <p>Place of Birth: <strong>Ranchi</strong></p>
          <p>Father's Name: <strong>Prabhash Kumar Singh</strong></p>
          <p>Date of Birth: <strong>12/07/2002</strong></p>
          <p>Nationality: <strong>Indian</strong></p>
        </section>
        <section className="section">
          <h2>Education and Training</h2>
          <p>Expected in August 2025, BTech in Computer Science</p>
          <p><strong>MIT World Peace University (MIT-WPU), Pune</strong></p>
          <ul>
            <li>First Year: CGPA 9.24/10</li>
            <li>Second Year: CGPA 7.33/10</li>
            <li>Third Year: CGPA 7.93/10</li>
            <li>Fourth Year: CGPA 6.73/10</li>
            <li>Fifth Year: CGPA 7.60/10</li>
          </ul>
          <p><strong>DAV Kapildev Public School, Ranchi, Jharkhand</strong></p>
          <ul>
            <li>12th Higher Secondary: First class with 73%</li>
            <li>10th: First class with 85.17%</li>
          </ul>
        </section>
        <section className="section">
          <h2>Online Learning and MOOCs</h2>
          <ul>
            <li>30 Days Coding Bootcamp (Ongoing)</li>
            <li>Data Structures and Algorithms (DSA)</li>
            <li>MERN Stack Development</li>
            <li>Artificial Intelligence (AI)</li>
            <li>Chat GPT</li>
            <li>Python, SAP S/HANA (Udemy, November 2023)</li>
          </ul>
        </section>
        <section className="section">
          <h2>Projects and Research</h2>
          <h3>CommunityBook Project</h3>
          <p>Duration: January 2024 - April 2024</p>
          <p>
            Description: CommunityBook is a dynamic social networking platform developed to foster community engagement and interaction.
          </p>
          <ul>
            <li>Security: Implemented JWT for user authentication.</li>
            <li>Real-Time Chat: Integrated WebSocket for instant communication.</li>
            <li>Event Organization: Enabled users to create and manage community events.</li>
            <li>Discussion Forums: Developed forums for user discussions.</li>
            <li>Resource Sharing: Implemented features for easy sharing of documents and links.</li>
          </ul>
          <p>Tech Used: React.js, Node.js, Express.js, MongoDB, WebSocket</p>
          <p>Roles: Full Stack Development, UI/UX Design, Performance Optimization, User Testing, Documentation</p>
          <p>Achievements: Successfully deployed platform, published paper in International Journal of Computer Applications.</p>
        </section>
        <section className="section">
          <h2>Certifications</h2>
          <ul>
            <li>Certificate of Participation in IoT Workshop, MIT-WPU, Pune (September 24, 2022)</li>
            <li>National Academic Immersion Program, NITTTR-Siemens CoE (February 26 - March 9, 2024)</li>
            <li>Webinar on CND First Look (September 22, 2023)</li>
            <li>Certificate of Energy Literacy, Energy Swaraj Foundation (April 19, 2024)</li>
          </ul>
        </section>
        <section className="section">
          <h2>Accomplishments</h2>
          <p>Winner - NAIP'2024 Inter-Panel Multi-Event Competition, Hosted by MIT-WPU and NITTTR BHOPAL</p>
        </section>
        <section className="section">
          <h2>Publications</h2>
          <p>Title: CommunityBook: A Platform for Enhanced Community Engagement</p>
          <p>Journal: International Journal of Computer Applications</p>
          <p>Date: April 2024</p>
          <p>Link: <a href="https://icbds.ieeepunesection.org/call-for-papers" target="_blank" rel="noopener noreferrer">IEEE ICBDS 2024</a></p>
        </section>
        <section className="section">
          <h2>Seminar Project</h2>
          <p>Cloud-Based Intelligent Video Surveillance System</p>
          <p>
            Developed a sophisticated security solution merging cloud computing with advanced video analytics. Key features include live video streaming to cloud servers (e.g., AWS, Azure), real-time video interpretation using YOLO and SSD algorithms, and anomaly detection for threat identification.
          </p>
        </section>
        <section className="section">
          <h2>Hobbies</h2>
          <ul>
            <li>Playing sports like cricket, badminton, esports gaming, traveling, singing</li>
          </ul>
        </section>
        <section className="section">
          <h2>Languages</h2>
          <ul>
            <li>Hindi: First Language</li>
            <li>English: Upper Intermediate (B2)</li>
            <li>Marathi: Elementary (A2)</li>
          </ul>
        </section>
        <section className="section">
          <h2>Summary</h2>
          <p>
            Proactive and enthusiastic Computer Science student with a strong foundation in software development and problem-solving. Seeking an internship opportunity to leverage skills in Python, Machine Learning, SAP, and full-stack web development. Committed to continuous learning and adept at working under pressure to deliver high-quality results.
          </p>
        </section>
        <section className="section">
          <h2>Skills</h2>
          <p><strong>Technical Skills:</strong></p>
          <ul>
            <li>Programming: Python, JavaScript (React.js, Node.js, Express.js)</li>
            <li>Machine Learning: Supervised Learning, Neural Networks, Computer Vision</li>
            <li>Web Development: HTML, CSS, JavaScript, REST APIs, Full-Stack Development</li>
            <li>Database Management: MongoDB, SQL</li>
            <li>Cloud Computing: AWS, Azure</li>
          </ul>
          <p><strong>Soft Skills:</strong></p>
          <ul>
            <li>Communication: Effective written and verbal communication skills</li>
            <li>Teamwork: Experience working in collaborative team environments</li>
            <li>Problem-Solving: Strong analytical and troubleshooting abilities</li>
            <li>Time Management: Ability to manage multiple projects and deadlines</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
