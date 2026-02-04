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
      ? "Sloupky pvc 60x40 zelené"
      : "Sloupky pvc 60x40 antracit";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/land/sloupkyland.webp`
      : `${basePath}/land/sloupkyantracit.webp`; // Uprav podle skutečného názvu souboru pro antracitovou variantu

  // Definuj ceny pro jednotlivé výšky (doplníš si sám zbylé ceny)
  const prices: { [key: string]: number } = {
    "2000": 255,
    "2300": 285,
    "2600": 335,
  };

  const currentPrice = prices[selectedHeight] || 255;

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
            <option value="2000">2.00m</option>
            <option value="2300">2.30m</option>
            <option value="2600">2.60m</option>
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
