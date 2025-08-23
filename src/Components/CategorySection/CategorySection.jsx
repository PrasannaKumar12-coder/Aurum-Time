import React from 'react';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <section className="category-section" id='models'>
      <div className="container">
        <h2 className="section-title">Our Collections</h2>
        <p className="section-subtitle">Discover our exquisite timepieces crafted for elegance and precision</p>
        
        <div className="categories-grid">
          {/* Men's Watch Category */}
          <div className="category-card men-category">
            <div className="category-image">
              <img 
                src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Men's Luxury Watches" 
              />
              <div className="category-overlay"></div>
            </div>
            <div className="category-content">
              <h3>Men's Collection</h3>
              <p>Sophisticated timepieces for the modern gentleman</p>
              <button className="explore-btn">Explore Men's</button>
            </div>
          </div>
          
          {/* Women's Watch Category */}
          <div className="category-card women-category">
            <div className="category-image">
              <img 
                src="https://plus.unsplash.com/premium_photo-1728759440467-d710b7073761?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Women's Luxury Watches" 
              />
              <div className="category-overlay"></div>
            </div>
            <div className="category-content">
              <h3>Women's Collection</h3>
              <p>Elegant designs for the contemporary woman</p>
              <button className="explore-btn">Explore Women's</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;