"use client";

import { useEffect, useState } from "react";

interface NavbarScrollProps {
  children: React.ReactNode;
}

const NavbarScroll: React.FC<NavbarScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide header when scrolling down (but not if at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`navbar-scroll-wrapper ${
        isVisible ? "navbar-visible" : "navbar-hidden"
      }`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 6666,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};

export default NavbarScroll;
