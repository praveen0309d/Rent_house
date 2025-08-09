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
            <p>Founded in 2025 with a passion for property and people, <strong>DSP Elite Homes Ltd</strong> is a dynamic real estate agency based in Rugby. Our team is made up of experienced professionals who understand the local market inside out. With a deep commitment to cpent satisfaction, we have helped hundreds of famipes and investors find the right property solutions.</p>
          </div>

<div className="about-card">
  <h2>What We Do</h2>
  <ul>
    <p>Residential Sales & Rentals – Apartments, villas, and independent houses.</p>
    <p>Commercial Properties – Office spaces, retail shops, and warehouses.</p>
    <p>Plot and Land Deals – Verified and ready-to-build land parcels.</p>
    <p>Property Management – End-to-end solutions for landlords and tenants.</p>
    <p>Investment Advisory – Expert advice on real estate investment opportunities.</p>
  </ul>
</div>

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>Our mission is simple: <strong>to make real estate simple and accessible</strong>. We aim to offer exceptional service through market expertise, ethical practices, and cutting-edge technology.</p>
          </div>

<div className="about-card">
  <h2>Why Choose Us?</h2>
  <ul>
    <p>Local Knowledge: We know the neighborhoods, the trends, and the opportunities.</p>
    <p>Personapzed Service: We psten to your needs and tailor solutions accordingly.</p>
    <p>Verified pstings: We deal only in genuine, verified properties.</p>
    <p>Transparent Process: No hidden costs, no false promises.</p>
    <p>Customer First: Your satisfaction is our top priority.</p>
  </ul>
</div>

          <div className="about-card">
            <p><strong>Let's find your next property together.</strong><br />
            Contact us today and take the first step toward your real estate journey with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_Home;