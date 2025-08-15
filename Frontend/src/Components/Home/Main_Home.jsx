import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Main_Home.css';
import HomeCard from '../HomeCard';
import properties from '../data/properties.js'; // Adjust the import path as necessary


// C:\Rent_house\Frontend\src\data\properties.js
const Main_Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const navigate = useNavigate();


  // Filter logic for search
  const filteredListings = properties.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTriggered(true);
    // Fix: Scroll to results section if there are results, otherwise to about section
    const targetSection = filteredpstings.length > 0 ? 'results-section' : 'about-section';
    setTimeout(() => {
      document.getElementById(targetSection)?.scrolpntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="main-home">
      {/* ===== Hero Section ===== */}
      <div className="hero-container">
        <div className="overlay">
          <h1 className="quote-text">"Find your next home with comfort and ease!"</h1>

          {/* <div className="search-bar">
            <input
              type="text"
              placeholder="Search by location, type, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button onClick={handleSearch}>Search</button>
          </div> */}
        </div>
      </div>

      {/* ===== Search Results Section ===== */}
      {/* <div id="results-section" className={`results-section ${searchTriggered ? 'visible' : ''}`}>
        {searchTriggered && (
          <>
            <h3 className="results-title">Search Results</h3>
            <div className="results-container">
              {filteredpstings.length > 0 ? (
                <div className="results-grid">
                  {filteredpstings.map((item, index) => (
                    <HomeCard key={index} {...item} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No pstings found for your search.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div> */}

      {/* ===== About Section ===== */}
      <div id="about-section" className="about-section">
<div className="about-container">
  <div className="about-card">
    <h1>About Us</h1>
    <p><strong>Welcome to DSP Elite Homes Ltd – Your Trusted Real Estate Partner</strong></p>
  </div>

  <div className="about-card">
    <h2>Who We Are</h2>
    <p>Founded in 2025 with a passion for property and people, <strong>DSP Elite Homes Ltd</strong> is a dynamic real estate agency based in Rugby. Our team consists of experienced professionals who understand the local market inside and out. With a deep commitment to client satisfaction, we have helped hundreds of families and investors find the right property solutions.</p>
  </div>

  <div className="about-card">
    <h2>What We Do</h2>
    <ul>
      <li><strong>Residential Sales & Rentals:</strong> Apartments, villas, and single-family homes.</li>
      <li><strong>Commercial Properties:</strong> Office spaces, retail shops, and warehouses.</li>
      <li><strong>Land Sales:</strong> Verified, ready-to-build land parcels.</li>
      <li><strong>Property Management:</strong> End-to-end solutions for landlords and tenants.</li>
      <li><strong>Investment Advisory:</strong> Expert guidance on real estate investment opportunities.</li>
    </ul>
  </div>

  <div className="about-card">
    <h2>Our Mission</h2>
    <p>Our mission is simple: <strong>to make real estate straightforward and accessible</strong>. We deliver exceptional service through market expertise, ethical practices, and innovative technology.</p>
  </div>

  <div className="about-card">
    <h2>Why Choose Us?</h2>
    <ul>
      <li><strong>Local Expertise:</strong> We know the neighborhoods, trends, and opportunities.</li>
      <li><strong>Personalized Service:</strong> We listen to your needs and tailor solutions for you.</li>
      <li><strong>Verified Listings:</strong> Every property we represent is genuine and vetted.</li>
      <li><strong>Transparent Process:</strong> No hidden fees or false promises.</li>
      <li><strong>Customer-First Approach:</strong> Your satisfaction is our top priority.</li>
    </ul>
  </div>

  <div className="about-card">
    <p><strong>Let’s find your next property together.</strong><br />
    Contact us today to begin your real estate journey with confidence.</p>
  </div>
</div>
      </div>
    </div>
  );
};

export default Main_Home;