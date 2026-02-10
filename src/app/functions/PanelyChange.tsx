"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface PanelyChangeProps {
  children: ReactNode;
}

const PanelyChange = ({ children }: PanelyChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [selectedHeight, setSelectedHeight] = useState("1.00");

  const handlePanelyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.id);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHeight(e.target.value);
  };

  const title =
    selectedColor === "zelená"
      ? "Panel 3D Zelený, drát 4mm"
      : "Panel 3D Antracit, drát 4mm";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/panely/panelgreen.webp`
      : `${basePath}/panely/paneltracit.webp`;

  const isInStock = selectedColor === "zelená";
  // Definuj ceny pro jednotlivé výšky (doplníš si sám zbylé ceny)
  const prices: { [key: string]: number } = {
    "1030/2500": 490,
    "1230/2500": 530,
    "1530/2500": 580,
    "1730/2500": 620,
    "2030/2500": 690,
  };

  const currentPrice = prices[selectedHeight] || 490;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- Kč</h2>
        <h3 className={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}>
          {isInStock
            ? "Skladem, ihned k odběru"
            : "Panely antracit na skladě od 20.2. 2026."}
        </h3>
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
            <option value="1030/2500">1030/2500</option>
            <option value="1230/2500">1230/2500</option>
            <option value="1530/2500">1530/2500</option>
            <option value="1730/2500">1730/2500</option>
            <option value="2030/2500">2030/2500</option>
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
                onChange={handlePanelyChange}
              />
              <span className="color-1"></span>
            </label>
            <label htmlFor="antracit">
              <input
                type="radio"
                name="color"
                id="antracit"
                checked={selectedColor === "antracit"}
                onChange={handlePanelyChange}
              />
              <span className="color-2"></span>
            </label>
          </div>

          <div className="quantity-select">
            <p>Množství</p>
            <input type="number" defaultValue={1} min="1" />
          </div>
          <Link href="/form" className="order-link">
            <button disabled={!isInStock}>
              Objednat <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default PanelyChange;
