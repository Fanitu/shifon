// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import image1 from '../images/single.jpeg'
import image2 from '../images/single2.jpg'
import image3 from '../images/single3.jpg'
import image4 from '../images/single4.jpg'


const Hero = ({ theme }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: image1,
      title: 'Elegant Shifon Dresses',
      description: 'Discover our stunning collection'
    },
    {
      image: image2,
      title: 'Traditional Beauty',
      description: 'Perfect for any celebration'
    },
    {
      image: image3,
      title: 'Family Collection',
      description: 'Matching outfits for everyone'
    },
    {
      image: image4,
      title: 'Timeless Designs',
      description: 'Where tradition meets modern fashion'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;