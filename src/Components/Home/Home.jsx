
import React, { useState, useEffect } from 'react';

import './Home.css';



const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        // 1
        {
            image: "https://woodenwaze.com/cdn/shop/files/slider2.jpg?v=1613540046",
            title: "Elegant Timepieces",
            subtitle: "Discover our collection of sophisticated watches",
            buttonText: "Explore Collection",
            textPosition: "left", // Options: "left", "center", "right"
            showText: false // Set to false to hide text container
        },
        // 2
        {
            image: "https://t4.ftcdn.net/jpg/08/11/15/37/360_F_811153701_7gPmVssUpwljTVrE7vlMDzfINZqQuJY6.jpg",
            title: "Men's Luxury Watches",
            subtitle: "Crafted for precision and style",
            buttonText: "Shop Men's",
            textPosition: "left",
            showText: true
        },
        // 3
        {
            image: "https://images.unsplash.com/photo-1653651461471-d4dffd0e5ab0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Women's Elegance",
            subtitle: "Timeless beauty for every occasion",
            buttonText: "Shop Women's",
            textPosition: "left",
            showText: true
        },
        // 4
        {
            image: "https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-european-and-american-simple-wind-watch-poster-banner-image_191558.jpg",
            title: "See All Beautiful Luxury Watches",
            subtitle: "Discover timeless elegance and craftsmanship",
            buttonText: "Explore Collection",
            textPosition: "center",
            showText: true // This slide will not show text container
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
            <div className="banner-carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {slide.showText && (
                            <div className={`slide-content ${slide.textPosition}-text`}>
                                <div className="text-container">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                    <button className="explore-btn">{slide.buttonText}</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <button className="carousel-control prev" onClick={goToPrevSlide}>
                    &#10094;
                </button>
                <button className="carousel-control next" onClick={goToNextSlide}>
                    &#10095;
                </button>

                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
    );
};

export default Home;
