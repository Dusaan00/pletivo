"use client";

import { useState, ReactNode, useMemo } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface PanelyZincChangeProps {
  children: ReactNode;
}

type Variant = "3D" | "2D";

const PanelyZincChange = ({ children }: PanelyZincChangeProps) => {
  const [variant, setVariant] = useState<Variant>("3D");
  const [selectedHeight, setSelectedHeight] = useState("1030/2500");

  type HeightPriceMap = Record<string, number>;

  /* =========================
     DATA
  ========================= */

  const variants: Record<
    Variant,
    {
      title: string;
      img: string;
      heights: HeightPriceMap;
    }
  > = {
    "3D": {
      title: "Panel zinkový 3D, drát 4mm",
      img: `${basePath}/pletivaa/zinc.png`,
      heights: {
        "1030/2500": 520,
        "1230/2500": 585,
        "1530/2500": 677,
        "1730/2500": 710,
      },
    },
    "2D": {
      title: "Panel zinkový 2D, drát 5/6mm",
      img: `${basePath}/pletivaa/dvad.png`,
      heights: {
        "1030/2500": 925,
        "1230/2500": 965,
        "1430/2500": 1120,
        "1630/2500": 1240,
        "1830/2500": 1450,
        "2030/2500": 1520,
      },
    },
  };

  /* =========================
     DERIVED VALUES
  ========================= */

  const currentVariant = variants[variant];

  const heightOptions = useMemo(
    () => Object.keys(currentVariant.heights),
    [variant],
  );

  const currentPrice =
    currentVariant.heights[selectedHeight] ??
    Object.values(currentVariant.heights)[0];

  /* když přepnu variantu, resetnu výšku na první možnou */
  const handleVariantChange = (value: Variant) => {
    setVariant(value);
    const firstHeight = Object.keys(variants[value].heights)[0];
    setSelectedHeight(firstHeight);
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={currentVariant.img} alt={currentVariant.title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{currentVariant.title}</h1>
        <h2>{currentPrice},- Kč</h2>

        <h3 className="stock-status in-stock">Skladem, ihned k odběru</h3>

        {children}

        {/* =========================
            PROVEDENÍ 3D / 2D
        ========================= */}
        <div className="diameter-select">
          <p>Provedení:</p>
          <div className="diameter-options">
            <label>
              <input
                type="radio"
                name="variant"
                checked={variant === "3D"}
                onChange={() => handleVariantChange("3D")}
              />
              <span>3D</span>
            </label>

            <label>
              <input
                type="radio"
                name="variant"
                checked={variant === "2D"}
                onChange={() => handleVariantChange("2D")}
              />
              <span>2D</span>
            </label>
          </div>
        </div>

        {/* =========================
            VÝŠKA
        ========================= */}
        <div className="height-select">
          <label htmlFor="height">Vyberte výšku:</label>
          <select
            id="height"
            value={selectedHeight}
            onChange={(e) => setSelectedHeight(e.target.value)}
          >
            {heightOptions.map((height) => (
              <option key={height} value={height}>
                {height}
              </option>
            ))}
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

export default PanelyZincChange;
