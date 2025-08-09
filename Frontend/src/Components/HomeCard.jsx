import React, { useState } from 'react';
import './HomeCard.css';
import PropertyPopup from './PropertyPopup';
import defaultImg from '../assets/default.png';

const HomeCard = ({
  id,
  category,
  images,
  title,
  description,
  rating,
  price,
  beds,
  stayType,
  phone,
  address // Added address prop since it's used in the component
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <>
      <div
        className="home-card"
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${title}`}
        onKeyDown={handleKeyDown}
      >
        <div className="image-container">
          <img
  src={images?.length > 0 ? images[0] : defaultImg}
  alt={title}
  className="home-img"
  loading="lazy"
/>

          <div className="rating-badge" aria-label={`Rating: ${rating} stars`}>
            {rating} ★
          </div>
        </div>

        <div className="card-content">
          <h3 className="card-title" title={title}>
            {title}
          </h3>
          <p className="card-description" title={description}>
            {description
              ? `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`
              : 'Beautiful property to stay.'}
          </p>
          <div className="property-info">
            <span>{beds || 4} Bed{beds !== 1 ? 's' : ''}</span>
            <span className="dot" aria-hidden="true">•</span>
            <span>{stayType || 'Entire Place'}</span>
          </div>
          <p className="address" title={address}>
            {address || '8 Howden Close, Houlton, Rugby'}
          </p>
          {/* <div className="price">
            {price.toLocaleString()}
            <span className="price-period"></span>
          </div> */}
        </div>
      </div>

      {showPopup && (
        <PropertyPopup
          property={{
            id,
            category,
            images,
            title,
            description,
            rating,
            price,
            beds,
            stayType,
            phone,
            address
          }}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default HomeCard;