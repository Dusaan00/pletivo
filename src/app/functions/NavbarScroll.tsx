"use client";

import { useEffect, useRef, useState } from "react";

interface NavbarScrollProps {
  targetId?: string;
}

const NavbarScroll: React.FC<NavbarScrollProps> = ({ targetId = "hdr" }) => {
  const lastScrollYRef = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const header = document.getElementById(targetId);

    if (!header) {
      console.warn(`Header with ID "${targetId}" not found`);
      return;
    }

    // Ensure header has proper initial styles
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "6666";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(
        currentScrollY - lastScrollYRef.current
      );

      // Only act if there's a meaningful scroll difference (prevents jitter)
      if (scrollDifference < 5) return;

      const scrollingUp = currentScrollY < lastScrollYRef.current;
      const scrollingDown = currentScrollY > lastScrollYRef.current;
      const isAtTop = currentScrollY < 50;
      const hasScrolledEnough = currentScrollY > 100;

      if (scrollingUp || isAtTop) {
        // Show header
        if (isHidden) {
          header.style.transform = "translateY(0)";
          header.style.transition = "transform 0.3s ease-in-out";
          setIsHidden(false);
        }
      } else if (scrollingDown && hasScrolledEnough) {
        // Hide header
        if (!isHidden) {
          header.style.transform = "translateY(-100%)";
          header.style.transition = "transform 0.3s ease-in-out";
          setIsHidden(true);
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [targetId, isHidden]);

  return null;
};

export default NavbarScroll;
