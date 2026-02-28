// components/WhyChooseUs.jsx
import React from 'react';

const WhyChooseUs = ({ theme, t }) => {
  const features = [
    {
      icon: '✨',
      title: t.original,
      description: t.originalDesc
    },
    {
      icon: '👗',
      title: t.designers,
      description: t.designersDesc
    },
    {
      icon: '🚚',
      title: t.delivery,
      description: t.deliveryDesc
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: t.family,
      description: t.familyDesc
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>{t.whyChooseUs}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;