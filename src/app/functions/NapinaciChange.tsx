"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface NapinaciChangeProps {
  children: ReactNode;
}

type Color = "zelená" | "antracitová";
type Length = "26" | "52" | "78";

const productData: Record<Color, Partial<Record<Length, number>>> = {
  zelená: {
    "26": 140,
    "52": 250,
    "78": 340,
  },
  antracitová: {
    "52": 270,
    "78": 360,
  },
};

const NapinaciChange = ({ children }: NapinaciChangeProps) => {
  const [selectedColor, setSelectedColor] = useState<Color>("zelená");
  const [selectedLength, setSelectedLength] = useState<Length>("26");

  // při změně barvy automaticky nastav první dostupnou délku
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.id as Color;
    setSelectedColor(color);

    const availableLengths = Object.keys(productData[color]) as Length[];
    setSelectedLength(availableLengths[0]);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLength(e.target.value as Length);
  };

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/sloupky/dratgreen.webp`
      : `${basePath}/sloupky/dratantra.webp`;

  const currentPrice = productData[selectedColor][selectedLength] ?? 0;

  const title = `Napínací drát ${selectedColor}, ${selectedLength} m`;

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

        {/* VÝBĚR DÉLKY */}
        <div className="height-select">
          <label htmlFor="length">Vyberte délku:</label>
          <select
            id="length"
            value={selectedLength}
            onChange={handleLengthChange}
          >
            {(Object.keys(productData[selectedColor]) as Length[]).map(
              (length) => (
                <option key={length} value={length}>
                  {length} m
                </option>
              ),
            )}
          </select>
        </div>

        <form>
          {/* VÝBĚR BARVY */}
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

            <label htmlFor="antracitová">
              <input
                type="radio"
                name="color"
                id="antracitová"
                checked={selectedColor === "antracitová"}
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

export default NapinaciChange;
