import React, { useState } from "react";
import "./slider.css";
import slider1 from './img__slider/slider1.png'
import slider2 from './img__slider/slider3.png'
import slider3 from './img__slider/slider2.png'

const images = [
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
    slider1,
    slider2,
    slider3,
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const getSlideClass = (index) => {
        if (index === currentIndex) return "slide center";
        if (index === (currentIndex - 1 + images.length) % images.length) return "slide side left";
        if (index === (currentIndex + 1) % images.length) return "slide side right";
        return "hidden";
    };

    return (
        <div className="slider-container">
            <h2 className="slider-title">Фотогалерея</h2>
            <div className="slider">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={getSlideClass(index)}
                    />
                ))}
            </div>
            <div className="slider-controls">
                <button className="slider-btn" onClick={prevSlide}>←</button>
                <span className="slider-index">
          <span className="current">{currentIndex + 1}</span> / {images.length}
        </span>
                <button className="slider-btn" onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};

export default Slider;
