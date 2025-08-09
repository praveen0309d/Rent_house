import React, { useState, useEffect } from 'react';
import './ConstructionPage.css';
import constructionGif from './assets/construction.gif';
 // Add your own GIF
import { FaHardHat, FaTools, FaEnvelope } from 'react-icons/fa';

const ConstructionPage  = ({ pageName = "Page" }) => {
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulate progress loading
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev < 65 ? prev + 1 : prev));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send to your backend
    console.log('Email submitted:', email);
  };

  return (
    <div className="construction-container">
      {/* Animated Header */}
      <header className="construction-header">
        <FaHardHat className="construction-icon" />
        <h1>{pageName} Under Construction</h1>
        <p>We're building something amazing for you!</p>
      </header>

      {/* Construction Animation */}
      <div className="animation-section">
        <img 
          src={constructionGif} 
          alt="Construction in progress" 
          className="construction-gif"
        />
        <div className="construction-workers">
          <div className="worker">
            <FaTools />
            <span>Designing</span>
          </div>
          <div className="worker">
            <FaTools />
            <span>Coding</span>
          </div>
          <div className="worker">
            <FaTools />
            <span>Testing</span>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="progress-section">
        <h3>Construction Progress</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          >
            <span>{progress}%</span>
          </div>
        </div>
        <div className="progress-details">
          <span>Foundation: Completed</span>
          <span>Framework: In Progress</span>
          <span>Finishing: Pending</span>
        </div>
      </div>

  

      {/* Safety Notice */}
      <div className="safety-notice">
        <div className="safety-barrier"></div>
        <p>🚧 Please excuse our digital dust! 🚧</p>
        <div className="safety-barrier"></div>
      </div>
    </div>
  );
};

export default ConstructionPage ;