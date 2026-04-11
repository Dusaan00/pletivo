"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface DeskyChangeProps {
  children: ReactNode;
}

const DeskyChange = ({ children }: DeskyChangeProps) => {
  const [selectedSize, setSelectedSize] = useState("2.50");

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const title = "Podhrabová betonová deska";

  const imgSrc = `${basePath}/deskyy/deskybeton.webp`;

  const prices: { [size: string]: number } = {
    "2.50": 670,
    "2.90": 710,
  };

  const currentPrice = prices[selectedSize];

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},-</h2>

        {children}

        <form>
          <div className="height-select">
            <label htmlFor="size">Vyberte rozměr:</label>

            <select
              id="size"
              name="size"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="2.50">2.50 m</option>
              <option value="2.90">2.90 m</option>
            </select>
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

export default DeskyChange;
