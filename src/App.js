import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

import ProjectsPage from './ProjectsPage';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
