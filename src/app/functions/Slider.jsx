"use client";

import { useState } from "react";

export default function Slider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const activeItem = items[activeIndex];

  return (
    <div className="slider">
      <div className="slider-inner">
        <button
          className="slider-arrow left"
          onClick={prevSlide}
          aria-label="Předchozí"
        >
          ‹
        </button>

        <img src={activeItem.src} alt={activeItem.label} />

        <button
          className="slider-arrow right"
          onClick={nextSlide}
          aria-label="Další"
        >
          ›
        </button>
      </div>

      <p className="slider-label">{activeItem.label}</p>

      <div className="slider-controls">
        {items.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => setActiveIndex(index)}
            aria-label={`Zobrazit ${items[index].label}`}
          />
        ))}
      </div>
    </div>
  );
}
