"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface BezinalChangeProps {
  children: ReactNode;
}

const BezinalChange = ({ children }: BezinalChangeProps) => {
  const [selectedHeight, setSelectedHeight] = useState("1.00");
  const [selectedDiameter, setSelectedDiameter] = useState("2.0");

  const handleHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHeight(e.target.value);
  };

  const handleDiameterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDiameter(e.target.value);
  };

  const title = "Pletivo Zinkové Bezinal 25m";

  const imgSrc = `${basePath}/pletivaa/bezinai.webp`; // Uprav podle skutečného názvu souboru pro Bezinal

  // Definuj ceny pro jednotlivé výšky a průměry drátu (doplníš si sám ceny)
  const prices: { [height: string]: { [diameter: string]: number } } = {
    "1.00": {
      "2.0": 1550, // Doplnit skutečnou cenu
      "2.2": 1999, // Doplnit skutečnou cenu
    },
    "1.25": {
      "2.0": 1950, // Doplnit
      "2.2": 2499, // Doplnit
    },
    "1.50": {
      "2.0": 2325, // Doplnit
      "2.2": 2999, // Doplnit
    },
    "1.60": {
      "2.0": 2475, // Doplnit
      "2.2": 3199, // Doplnit
    },
    "1.80": {
      "2.0": 2799, // Doplnit
      "2.2": 3599, // Doplnit
    },
    "2.00": {
      "2.0": 3099, // Doplnit
      "2.2": 3999, // Doplnit
    },
  };

  const currentPrice = prices[selectedHeight]?.[selectedDiameter] || 1000; // Default na nějakou cenu

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- Kč</h2>
        {children}
        <div className="height-select">
          <label htmlFor="height" className="height">
            Vyberte výšku:
          </label>
          <select
            id="height"
            name="height"
            value={selectedHeight}
            onChange={handleHeightChange}
          >
            <option value="1.00">1.00m</option>
            <option value="1.25">1.25m</option>
            <option value="1.50">1.50m</option>
            <option value="1.60">1.60m</option>
            <option value="1.80">1.80m</option>
            <option value="2.00">2.00m</option>
          </select>
        </div>
        <form>
          <div className="diameter-select">
            <p>Průměr drátu:</p>

            <div className="diameter-options">
              <label>
                <input
                  type="radio"
                  name="diameter"
                  value="2.0"
                  checked={selectedDiameter === "2.0"}
                  onChange={handleDiameterChange}
                />
                <span>2.0 mm</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="diameter"
                  value="2.2"
                  checked={selectedDiameter === "2.2"}
                  onChange={handleDiameterChange}
                />
                <span>2.2 mm</span>
              </label>
            </div>
          </div>

          <div className="quantity-select">
            <p>Množství</p>
            <input type="number" defaultValue={1} min="1" />
          </div>
          <Link href="/form" className="order-link">
            <button>
              Objednat <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default BezinalChange;
