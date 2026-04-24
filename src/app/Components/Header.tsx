"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../Sass/_header.scss";
import Dropdown from "../functions/Dropdown";
import { basePath } from "../functions/Env";
import NavbarScroll from "../functions/NavbarScroll";
import CartHeaderLink from "./CartHeaderLink";

const sortimentItems = [
  { href: "/Prehled", label: "Přehled sortimentu" },
  { href: "/Cenik", label: "Ceník" },
  { href: "/Pletivo", label: "Pletiva" },
  { href: "/Panely3D2D", label: "Panely 3D/2D" },
  { href: "/Brany", label: "Brány & Branky" },
  { href: "/PodhraboveDesky", label: "Podhrabové desky" },
  {
    href: "/SloupkyPrislusenstvi",
    label: "Sloupky & příslušenství",
  },
  { href: "/MobilniOploceni", label: "Mobilní oplocení" },
];

const primaryLinks = [
  { href: "/About", label: "O firmě" },
  { href: "/form", label: "Kontakty" },
  { href: "/form", label: "Odeslat poptávku", bold: true },
];

function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerWidth, setHeaderWidth] = useState(1440);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSortimentOpen, setIsSortimentOpen] = useState(false);

  useEffect(() => {
    const node = headerRef.current;

    if (!node) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) {
        return;
      }

      setHeaderWidth(entry.contentRect.width);
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const useHamburgerMenu = headerWidth < 1040;
  const isTightHeader = headerWidth < 540;

  useEffect(() => {
    if (!useHamburgerMenu) {
      setIsMenuOpen(false);
      setIsSortimentOpen(false);
    }
  }, [useHamburgerMenu]);

  const headerClassName = [
    "header",
    useHamburgerMenu ? "header--compact-nav" : "",
    isTightHeader ? "header--tight" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsSortimentOpen(false);
  };

  return (
    <>
      <NavbarScroll />
      <header className={headerClassName} id="hdr" ref={headerRef}>
        <div className="header__inner">
          <div className="container-ploty">
            <Link href="/" className="header__brand-link">
              <Image
                src={`${basePath}/loga/plotlogo.webp`}
                alt="Pletivo Grygov Logo"
                className="logoo"
                width={325}
                height={100}
              />
            </Link>
            <p className="heeding">
              <Link href="/" className="heeding-link">
                <span className="plot-title">Pletivo</span>Grygov
              </Link>
            </p>
            <Link href="/form" className="heeder__link">
              <svg className="heeder__icon">
                <use href={`${basePath}/sprite.svg#icon-call`}></use>
              </svg>
              <p className="phone">+420 608 474 760</p>
            </Link>
            <Link href="/" className="homee">
              <svg className="home-icon">
                <use href={`${basePath}/sprite2.svg#icon-home`}></use>
              </svg>
              <p className="domuu">Domů</p>
            </Link>
            <CartHeaderLink />
          </div>

          <div className="header__nav-slot">
            {useHamburgerMenu ? (
              <button
                type="button"
                className={`hamburger-menu ${isMenuOpen ? "is-open" : ""}`}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-main-nav"
                aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            ) : (
              <nav className="user-nav" aria-label="Hlavní navigace">
                <ul className="user-nav__box">
                  <Dropdown
                    triggerText="Sortiment"
                    defaultHref="/Prehled"
                    items={sortimentItems}
                  />
                  {primaryLinks.map((link) => (
                    <li key={link.label} className="user-nav__box--item">
                      <Link href={link.href} className="user-nav__box--link">
                        {link.bold ? (
                          <span className="inquiry-bold">{link.label}</span>
                        ) : (
                          link.label
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        {useHamburgerMenu && isMenuOpen ? (
          <nav
            id="mobile-main-nav"
            className="mobile-nav"
            aria-label="Mobilní navigace"
          >
            <div className="mobile-nav__panel">
              <button
                type="button"
                className={`mobile-nav__toggle ${isSortimentOpen ? "is-open" : ""}`}
                aria-expanded={isSortimentOpen}
                aria-controls="mobile-sortiment-submenu"
                onClick={() => setIsSortimentOpen((current) => !current)}
              >
                <span>Sortiment</span>
                <svg className="mobile-nav__arrow">
                  <use href={`${basePath}/sprite2.svg#icon-arrow-right`}></use>
                </svg>
              </button>

              {isSortimentOpen ? (
                <div
                  id="mobile-sortiment-submenu"
                  className="mobile-nav__submenu"
                >
                  {sortimentItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mobile-nav__link mobile-nav__link--sub"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="mobile-nav__link"
                  onClick={closeMobileMenu}
                >
                  {link.bold ? (
                    <span className="inquiry-bold">{link.label}</span>
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}

export default Header;
