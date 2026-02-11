"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface ZincSloupkyChangeProps {
  children: ReactNode;
}

type PriceMap = Record<string, number>;

const prices: PriceMap = {
  "2000": 355,
  "2400": 390,
  "2600": 490,
};

const ZincSloupkyChange = ({ children }: ZincSloupkyChangeProps) => {
  const [selectedHeight, setSelectedHeight] =
    useState<keyof typeof prices>("2000");

  const handleHeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHeight(e.target.value as keyof typeof prices);
  };

  const title = `Sloupek Zn 60x40 / ${selectedHeight}`;
  const imgSrc = `${basePath}/sloupky/jeklzinc.webp`;
  const currentPrice = prices[selectedHeight];

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- Kč</h2>
        <h3 className="stock-status in-stock">Skladem, ihned k odběru</h3>
        {children}

        <div className="height-select">
          <label htmlFor="height">Vyberte výšku:</label>
          <select
            id="height"
            name="height"
            value={selectedHeight}
            onChange={handleHeightChange}
          >
            <option value="2000">2.00 m</option>
            <option value="2400">2.40 m</option>
            <option value="2600">2.60 m</option>
          </select>
        </div>

        <form>
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

export default ZincSloupkyChange;
