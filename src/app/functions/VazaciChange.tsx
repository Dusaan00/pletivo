"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface VazaciChangeProps {
  children: ReactNode;
}

const VazaciChange = ({ children }: VazaciChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.id);
  };

  const title =
    selectedColor === "zelená"
      ? "Vázací Drát Zelený (RAL 6005)"
      : selectedColor === "antracit"
        ? "Vázací Drát Antracitový (RAL 7016)"
        : "Vázací Drát Hnědý (RAL 8017)";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/sloupky/vazacidrat.jpeg`
      : selectedColor === "antracit"
        ? `${basePath}/sloupky/vazacidrat.jpeg`
        : `${basePath}/sloupky/vazacidrat.jpeg`;

  const isInStock = true;
  const currentPrice = 149;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- / ks</h2>

        {children}
        <div className="vazaci-selector">
          <div className="vazaci-grid">
            {/* Zelená */}
            <label
              className={`vazaci-tile ${selectedColor === "zelená" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="zelená"
                checked={selectedColor === "zelená"}
                onChange={handleColorChange}
              />
              <div className="vazaci-color-box is-green"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Zelená</span>
                <span className="vazaci-ral">RAL 6005</span>
              </div>
            </label>

            {/* Antracit */}
            <label
              className={`vazaci-tile ${selectedColor === "antracit" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="antracit"
                checked={selectedColor === "antracit"}
                onChange={handleColorChange}
              />
              <div className="vazaci-color-box is-antracit"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Antracit</span>
                <span className="vazaci-ral">RAL 7016</span>
              </div>
            </label>

            {/* Hnědá */}
            <label
              className={`vazaci-tile ${selectedColor === "hnědá" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="hnědá"
                checked={selectedColor === "hnědá"}
                onChange={handleColorChange}
              />
              <div className="vazaci-color-box is-brown"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Hnědá</span>
                <span className="vazaci-ral">RAL 8017</span>
              </div>
            </label>
          </div>
        </div>

        <form>
          <div className="quantity-select">
            <p>Množství (ks)</p>
            <input type="number" defaultValue={1} min="1" />
          </div>

          <Link href="/form" className="order-link">
            <button type="button" disabled={!isInStock}>
              Objednat <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default VazaciChange;
