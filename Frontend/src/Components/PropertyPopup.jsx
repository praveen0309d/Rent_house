import React, { useState, useRef,useEffect } from 'react';
import './PropertyPopup.css';
import defaultImg from '../assets/default.png'; // adjust path as needed

const PropertyPopup = ({ property, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailsRef = useRef(null);

  const images = property.images || [];

  useEffect(() => {
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    scrollThumbnailTo(currentImageIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    scrollThumbnailTo(currentImageIndex - 1);
  };

  const scrollThumbnailTo = (index) => {
    if (thumbnailsRef.current) {
      const thumbnails = thumbnailsRef.current.children;
      if (thumbnails[index]) {
        thumbnails[index].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  };

  const onThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    scrollThumbnailTo(index);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="property-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close popup">
          &times;
        </button>

        <div className="popup-content">
          <div className="image-section">
<div className="main-image-container">
  <img
    src={images[currentImageIndex] || defaultImg}
    alt={`${property.title} image ${currentImageIndex + 1}`}
    className="main-image"
    loading="lazy"
  />
  {images.length > 1 && (
    <>
      <button
        className="nav-btn prev-btn"
        onClick={prevImage}
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <button
        className="nav-btn next-btn"
        onClick={nextImage}
        aria-label="Next image"
      >
        &#10095;
      </button>
    </>
  )}
</div>


            {images.length > 1 && (
              <div className="thumbnail-wrapper">
                <button
                  className="thumb-scroll-btn left"
                  onClick={() =>
                    thumbnailsRef.current.scrollBy({ left: -120, behavior: 'smooth' })
                  }
                  aria-label="Scroll thumbnails left"
                >
                  &#10094;
                </button>

                <div className="thumbnail-container" ref={thumbnailsRef}>
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => onThumbnailClick(index)}
                      loading="lazy"
                    />
                  ))}
                </div>

                <button
                  className="thumb-scroll-btn right"
                  onClick={() =>
                    thumbnailsRef.current.scrollBy({ left: 120, behavior: 'smooth' })
                  }
                  aria-label="Scroll thumbnails right"
                >
                  &#10095;
                </button>
              </div>
            )}
          </div>

          <div className="details-section">
            <h2 className="property-title">{property.title}</h2>
            <p className="address">{property.address || '8 Howden Close, Houlton, Rugby'}</p>

            <div className="property-meta">
              <span className="price">{property.price?.toLocaleString() || 'N/A'}</span>
              <span className="rating">{property.rating} ★</span>
              <span className="beds">{property.beds || 4} bedrooms</span>
            </div>

            <div className="description">
              <h3>Description</h3>
              <p>{property.description || 'No description provided.'}</p>
            </div>

            <button className="reserve-btn">{property.phone}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPopup;
