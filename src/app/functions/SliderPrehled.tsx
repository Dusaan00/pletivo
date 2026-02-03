"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface SliderPrehledProps {
  children: React.ReactNode;
}

const SliderPrehled: React.FC<SliderPrehledProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default for large screens
  const [slideWidth, setSlideWidth] = useState(400); // Default width in px
  const [arrowOffset, setArrowOffset] = useState(40); // Default offset for arrows
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = React.Children.count(children); // Number of cards
  const gap = 20; // Gap between cards in px (from your SCSS)

  // Calculate max index to prevent over-scrolling
  const maxIndex = Math.max(totalSlides - slidesToShow, 0);

  // Update slidesToShow, slideWidth, and arrowOffset based on window width
  const updateResponsive = () => {
    const width = window.innerWidth;
    if (width >= 1385) {
      setSlidesToShow(3);
      setSlideWidth(400);
      setArrowOffset(40);
    } else if (width >= 1001) {
      setSlidesToShow(2);
      setSlideWidth(440); // Slightly smaller for medium screens
      setArrowOffset(30);
    } else if (width >= 924) {
      setSlidesToShow(2);
      setSlideWidth(400); // Slightly smaller for medium screens
      setArrowOffset(30);
    } else if (width >= 800) {
      setSlidesToShow(2);
      setSlideWidth(350); // Slightly smaller for medium screens
      setArrowOffset(30);
    } else if (width >= 700) {
      setSlidesToShow(2);
      setSlideWidth(300); // Slightly smaller for medium screens
      setArrowOffset(30);
    } else if (width >= 500) {
      setSlidesToShow(1);
      setSlideWidth(350); // Slightly smaller for medium screens
      setArrowOffset(30);
    } else {
      setSlidesToShow(1);
      setSlideWidth(300); // Even smaller for mobile
      setArrowOffset(20);
    }
  };

  // Set up resize listener
  useEffect(() => {
    updateResponsive();
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  // Reset currentIndex if it exceeds maxIndex after resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesToShow, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Calculate visible container width
  const containerWidth = slidesToShow * slideWidth + (slidesToShow - 1) * gap;

  return (
    <div
      className="slider-prehled-wrapper"
      style={{
        width: `${containerWidth}px`,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div className="slider-prehled-viewport">
        <div
          className="slider-prehled-inner"
          ref={sliderRef}
          style={{
            display: "flex",
            transition: "transform 0.3s ease",
            transform: `translateX(-${currentIndex * (slideWidth + gap)}px)`,
            gap: `${gap}px`,
          }}
        >
          {React.Children.map(children, (child) => (
            // Wrap each child to apply dynamic width
            <div
              style={{
                flex: `0 0 ${slideWidth}px`,
                minWidth: `${slideWidth}px`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow */}
      <button
        className="slider-button prev"
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: `-${arrowOffset}px`,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <RiArrowLeftLine size={30} />
      </button>

      {/* Right arrow */}
      <button
        className="slider-button next"
        onClick={handleNext}
        style={{
          position: "absolute",
          right: `-${arrowOffset}px`,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <RiArrowRightLine size={30} />
      </button>
    </div>
  );
};

export default SliderPrehled;
