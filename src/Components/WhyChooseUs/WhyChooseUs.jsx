import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "fas fa-certificate",
      title: "Authenticity Guaranteed",
      description: "Every timepiece comes with verified certification."
    },
    {
      icon: "fas fa-industry",
      title: "Direct From Manufacturers",
      description: "Premium watches at the best value, no middlemen."
    },
    {
      icon: "fas fa-crown",
      title: "Exclusive Collections",
      description: "Limited editions and rare designs only available here."
    },
    {
      icon: "fas fa-gem",
      title: "Luxury Experience",
      description: "From browsing to delivery, we ensure a premium journey."
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">Discover what makes Aurum Time the preferred choice for watch connoisseurs</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;