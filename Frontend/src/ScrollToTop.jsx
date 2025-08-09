import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'; // Create this CSS file
import { FaArrowUp } from 'react-icons/fa'; // Using react-icons for the arrow

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;