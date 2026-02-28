// components/Gallery.jsx
import React from 'react';
import image1 from '../images/single.jpeg'
import image2 from '../images/single2.jpg'
import image3 from '../images/single3.jpg'
import image4 from '../images/single4.jpg'
import image5 from '../images/single5.jpg'
import image6 from '../images/single6.jpg'

import group1 from '../images/group.jpg'
import group2 from '../images/group4.webp'
import group3 from '../images/group2.jpg'
import group4 from '../images/group3.jpg'
import group5 from '../images/group5.jpg'
import group6 from '../images/group6.webp'

import family1 from '../images/family.webp'
import family2 from '../images/family2.webp'
import family3 from '../images/family3.jpg'
import family4 from '../images/family4.jpg'
import family5 from '../images/family5.webp'
import family6 from '../images/family6.webp'
import family7 from '../images/family7.webp'

const Gallery = ({ theme, t }) => {
  const singleDesigns = [
     image1,
     image2,
     image3,
     image4,
     image5,
     image6
  ];

  const familyDesigns = [
     family1,
     family2,
     family3,
     family4,
     family5,
     family7,
     family6
    ];

  const groupDesigns = [
     group1,
     group2,
     group3,
     group4,
     group5,
     group6
     ];

  return (
    <section className="gallery">
      <div className="container">
        <h2>{t.gallery}</h2>
        
        <div className="gallery-section">
          <h3>{t.single}</h3>
          <div className="image-slider">
            {singleDesigns.map((img, index) => (
              <img key={index} src={img} alt={`Single design ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>

        <div className="gallery-section">
          <h3>{t.family}</h3>
          <div className="image-slider">
            {familyDesigns.map((img, index) => (
              <img key={index} src={img} alt={`Family design ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>

        <div className="gallery-section">
          <h3>{t.group}</h3>
          <div className="image-slider">
            {groupDesigns.map((img, index) => (
              <img key={index} src={img} alt={`Group design ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;