"use client";
import "../Sass/_intro.scss";
import { useState } from "react";

export default function Slider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="slider">
      <img src={activeItem.src} alt={activeItem.label} />
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
