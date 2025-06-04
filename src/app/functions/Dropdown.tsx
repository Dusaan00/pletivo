"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "../Sass/_header.scss";

type DropdownProps = {
  triggerText: string;
  items: { href: string; label: string }[];
  defaultHref: string;
};

export default function Dropdown({
  triggerText,
  items,
  defaultHref,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [mouseIsInside, setMouseIsInside] = useState(false);

  // Toggle dropdown on click
  const handleTriggerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent navigation
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on mouse leave
  const handleMouseLeave = () => {
    setIsOpen(false);
    setMouseIsInside(false);
  };

  // Handle close button click - prevent event bubbling
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
    // Don't change mouseIsInside state - let it remain true since mouse is still inside
  };

  // Handle mouse enter - only open if mouse wasn't already inside
  const handleMouseEnter = () => {
    if (!mouseIsInside) {
      setIsOpen(true);
    }
    setMouseIsInside(true);
  };

  return (
    <li
      className="user-nav__box--item"
      ref={dropdownRef}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Link
        href={defaultHref}
        className="user-nav__box--link"
        scroll={false}
        onClick={handleTriggerClick}
        aria-expanded={isOpen}
        aria-controls="sortiment-dropdown"
      >
        {triggerText}
      </Link>
      <ul
        id="sortiment-dropdown"
        className={`dropdown ${isOpen ? "is-open" : ""}`}
      >
        {isOpen && (
          <li className="dropdown-close-row">
            <button
              className="dropdown-close-btn"
              aria-label="Zavřít nabídku"
              onClick={handleCloseClick}
              type="button"
            >
              ×
            </button>
          </li>
        )}
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="dropdown-item">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
