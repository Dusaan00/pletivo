"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface ColorChangeProps {
  children: ReactNode;
}

const ColorChange = ({ children }: ColorChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [selectedHeight, setSelectedHeight] = useState("1.00");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.id);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHeight(e.target.value);
  };

  const title =
    selectedColor === "zelená"
      ? "Pletivo Poplastované Zelené 25m"
      : "Pletivo Poplastované Antracit 25m";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/pletivaa/green.webp`
      : `${basePath}/pletivaa/antracit.webp`; // Uprav podle skutečného názvu souboru pro antracitovou variantu

  // Definuj ceny pro jednotlivé výšky (doplníš si sám zbylé ceny)
  const prices: { [key: string]: number } = {
    "1.00": 1325,
    "1.25": 1650,
    "1.50": 1975,
    "1.60": 2100,
    "1.80": 2350,
    "2.00": 2625,
  };

  const currentPrice = prices[selectedHeight] || 1325;

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
          <div className="color-select">
            <p>Barva:</p>
            <label htmlFor="zelená">
              <input
                type="radio"
                name="color"
                id="zelená"
                checked={selectedColor === "zelená"}
                onChange={handleColorChange}
              />
              <span className="color-1"></span>
            </label>
            <label htmlFor="antracit">
              <input
                type="radio"
                name="color"
                id="antracit"
                checked={selectedColor === "antracit"}
                onChange={handleColorChange}
              />
              <span className="color-2"></span>
            </label>
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

export default ColorChange;
