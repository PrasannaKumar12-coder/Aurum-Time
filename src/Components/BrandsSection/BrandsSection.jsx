import React, { useState } from 'react';
import './BrandsSection.css';

// the design is good but iam plannig to show each 
// brand only image but my some images are have transperent
//  it not showing wel, beacause of bg color fix that

const BrandsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const brands = [
    {
      name: "Rolex",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Logo_da_Rolex.png"
    },
    {
      name: "Patek Philippe",
      logo: "https://1000logos.net/wp-content/uploads/2018/11/Patek-Philippe-Logo-1920s.png"
    },
    {
      name: "Titan",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Logo_of_Titan_Company%2C_May_2018.svg/1200px-Logo_of_Titan_Company%2C_May_2018.svg.png"
    },
    {
      name: "Fastrack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Fastrack_logo.png"
    },
    {
      name: "Fossil",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Fossil_Group.png"
    },
    {
      name: "helios",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Helios_logo.svg/2560px-Helios_logo.svg.png"
    },
    {
      name: "boss",
      logo: "https://toppng.com/uploads/preview/boss-logo-png-transparent-boss-hugo-boss-logo-11563314818ksb7zhsk60.png"
    },
    {
      name: "Timex",
      logo: "https://toppng.com/uploads/preview/timex-vector-logo-free-download-11574185816pmbhk7s5vh.png"
    },
    {
      name: "bulova",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/bulova-logo-svg-vector.svg"
    },
    {
      name: "Horizen",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/horizon-2-logo-png-transparent.png"
    },
    {
      name: "pTron",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2v0UJml0QtYtNwwtqEdeIpqb79YeKlPEyg&s"
    },
    {
      name: "Daniel_hechter",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Daniel_hechter-logo-1.jpg"
    },
    {
      name: "Richard Mille",
      logo: "https://luxwatch.ua/images/brands/new/richard-mille-logo.png"
    },
    {
      name: "Benyar",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9QeXVYo_QG-EVQ05L-fGnvTIHSpPPi0vVg&s"
    },
    {
      name: "Blancpain",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Blancpain-logo.png"
    },
    {
      name: "Zenith",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzR43tgzjKEaAzDyGvErqDDA5x6egC1i7Ow&s"
    },
    {
      name: "Girard-Perregaux",
      logo: "https://cdn.worldvectorlogo.com/logos/girard-perregaux.svg"
    },
    {
      name: "Chopard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Logo_Chopard.svg"
    },
    {
      name: "A. Lange & Söhne",
      logo: "https://images.seeklogo.com/logo-png/32/1/a-lange-sohne-logo-png_seeklogo-323629.png"
    },
    {
      name: "Glashütte Original",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Glash%C3%BCtter_Uhrenbetrieb_logo.svg"
    },
    {
      name: "Ulysse Nardin",
      logo: "https://1000logos.net/wp-content/uploads/2018/10/Ulysse-Nardin-Logo.png"
    },
    {
      name: "Piaget",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Piaget_logo.svg/1280px-Piaget_logo.svg.png"
    },
    {
      name: "Franck Muller",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9JI7slJXNMdxCYtl4EEgmKFBq_1aziuth5w&s"
    },
    {
      name: "Parmigiani Fleurier",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYm0JGvwO6Jc0ZyCme_lE4I4X9AuoeQHvXA&s"
    },
    {
      name: "Corum",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Corum_logo.svg/1280px-Corum_logo.svg.png"
    },
    {
      name: "Bell & Ross",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMf9z4kZpLWJzzXQSInlhc-xUsGWDOWmX7g&s"
    },
    {
      name: "Longines",
      logo: "https://w7.pngwing.com/pngs/96/943/png-transparent-longines-hd-logo.png"
    },
    {
      name: "Rado",
      logo: "https://toppng.com/uploads/preview/rado-logo-vector-free-download-115742341049rjqqxtbkv.png"
    },
    {
      name: "Grand Seiko",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7njLwT4e4n7zDUHocDCSnC-4dMGL-_urZA&s"
    },
    {
      name: "Montblanc",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9q7J0L-_Beauv7onx_0qvvWkExs4KmuNVQQ&s"
    }
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedBrands = showAll ? brands : brands.slice(0, 15);

  return (
    <section className="brands-section" id='Brands'>
      <div className="container">
        <h2 className="section-title">30+ World Renowned Brands</h2>
        <p className="section-subtitle">Discover the finest watchmakers from around the globe</p>
        
        <div className="brands-grid">
          {displayedBrands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <div className="brand-content">
                <div className="brand-logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
              </div>
              <div className="brand-hover-effect"></div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={toggleShowAll}>
              See All Brands <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        )}

        {showAll && (
          <div className="show-less-container">
            <button className="show-less-btn" onClick={toggleShowAll}>
              Show Less <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;