import React, { useState } from 'react';
import './SupportPage.css';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('warranty');

  const warrantyDetails = [
    {
      title: "International Warranty",
      duration: "5 Years",
      icon: "fas fa-globe",
      description: "Our timepieces come with a comprehensive 5-year international warranty that covers manufacturing defects across the globe.",
      coverage: ["Manufacturing defects", "Material imperfections", "Movement malfunctions"],
      exclusions: ["Physical damage", "Water damage", "Unauthorized repairs"]
    },
    {
      title: "Movement Guarantee",
      duration: "Lifetime Service",
      icon: "fas fa-cogs",
      description: "We guarantee the precision and performance of our movements with lifetime service support and regular maintenance recommendations.",
      coverage: ["Movement calibration", "Routine servicing", "Performance optimization"],
      exclusions: ["Damage from accidents", "Improper handling", "Non-genuine parts"]
    },
    {
      title: "Water Resistance",
      duration: "Annual Testing",
      icon: "fas fa-tint",
      description: "Maintain your watch's water resistance with our annual testing service to ensure continued protection against moisture.",
      coverage: ["Pressure testing", "Seal replacement", "Gasket inspection"],
      exclusions: ["Damage from extreme depth", "Chemical exposure", "Missing seals"]
    }
  ];

  const serviceDetails = [
    {
      title: "Personalized Consultation",
      icon: "fas fa-headset",
      description: "24/7 access to our watch experts for personalized advice and support regarding your timepiece.",
      features: ["Direct specialist access", "Video consultations", "Maintenance guidance"]
    },
    {
      title: "Express Service",
      icon: "fas fa-shipping-fast",
      description: "Priority servicing with expedited turnaround times for our valued customers.",
      features: ["Priority scheduling", "60-day service guarantee", "Complimentary shipping"]
    },
    {
      title: "Spare Parts Availability",
      icon: "fas fa-cube",
      description: "Genuine parts guaranteed to be available for your timepiece for decades to come.",
      features: ["Lifetime parts guarantee", "Authentic components", "Global inventory access"]
    }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="hero-content">
          <h1>Exceptional Customer Support</h1>
          <p>Dedicated to preserving the legacy of your timepiece with unparalleled service and care</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="support-tabs">
        <button 
          className={`tab-button ${activeTab === 'warranty' ? 'active' : ''}`}
          onClick={() => setActiveTab('warranty')}
        >
          <i className="fas fa-certificate"></i>
          Warranty & Guarantee
        </button>
        <button 
          className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <i className="fas fa-concierge-bell"></i>
          Premium Services
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <i className="fas fa-envelope"></i>
          Contact Support
        </button>
      </div>

      {/* Content Area */}
      <div className="support-content">
        {activeTab === 'warranty' && (
          <div className="tab-content">
            <h2>Warranty & Guarantee Programs</h2>
            <p className="content-intro">Our commitment to excellence extends beyond the point of purchase with comprehensive protection for your investment.</p>
            
            <div className="features-grid">
              {warrantyDetails.map((item, index) => (
                <div className="feature-cards" key={index}>
                  <div className="feature-icon">
                    <i className={item.icon}></i>
                    <span className="duration-badge">{item.duration}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  
                  <div className="coverage-details">
                    <h4>Coverage Includes:</h4>
                    <ul>
                      {item.coverage.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    
                    <h4>Exclusions:</h4>
                    <ul className="exclusions">
                      {item.exclusions.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="learn-more-btn">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="tab-content">
            <h2>Premium Services</h2>
            <p className="content-intro">Experience unparalleled service tailored to preserve the excellence of your timepiece.</p>
            
            <div className="services-grids">
              {serviceDetails.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, i) => (
                      <span key={i} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  
                  <button className="service-btn">Request Service</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="tab-content">
            <h2>Contact Our Support Team</h2>
            <p className="content-intro">Our dedicated specialists are available to assist you with any inquiries or service needs.</p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone Support</h3>
                <p>24/7 dedicated support line</p>
                <span className="contact-detail">+1 (888) 123-123</span>
                <button className="contact-btn">Call Now</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Support</h3>
                <p>Response within 2 hours</p>
                <span className="contact-detail">support@aurumtime.com</span>
                <button className="contact-btn">Send Email</button>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Schedule Appointment</h3>
                <p>Visit our boutique</p>
                <span className="contact-detail">By appointment only</span>
                <button className="contact-btn">Book Now</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How do I register my warranty?</h4>
            <p>Your warranty is automatically registered at the time of purchase. You will receive confirmation via email within 24 hours.</p>
          </div>
          <div className="faq-item">
            <h4>What is the process for warranty claims?</h4>
            <p>Contact our support team who will guide you through the assessment and repair process with one of our authorized service centers.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer international servicing?</h4>
            <p>Yes, we have authorized service centers in over 30 countries to serve our global clientele.</p>
          </div>
          <div className="faq-item">
            <h4>How often should I service my timepiece?</h4>
            <p>We recommend servicing every 3-5 years to maintain optimal performance and preserve your investment.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;