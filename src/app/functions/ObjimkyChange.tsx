"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface ObjimkyChangeProps {
  children: ReactNode;
}

const ObjimkyChange = ({ children }: ObjimkyChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.id);
  };

  // Dynamický titulek podle barvy
  const title =
    selectedColor === "zelená"
      ? "Objímka Zelená (RAL 6005)"
      : "Objímka Antracitová (RAL 7016)";

  // Cesta k obrázkům (předpokládám, že máš v /objimky/ soubory objimka-green/antracit)
  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/sloupky/objimky3d.jpeg`
      : `${basePath}/sloupky/objimky3da.jpg`;

  const isInStock = true;

  // Pevná cena pro objímku (uprav si podle potřeby)
  const currentPrice = 25;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- / ks</h2>

        <h3 className={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}>
          {isInStock ? "Skladem, ihned k odběru" : "Momentálně nedostupné"}
        </h3>

        {children}

        <form>
          <div className="objimka-color-selector">
            <div className="objimka-tile-grid">
              {/* Zelená varianta */}
              <label
                className={`objimka-tile ${selectedColor === "zelená" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="color"
                  id="zelená"
                  checked={selectedColor === "zelená"}
                  onChange={handleColorChange}
                />
                <div className="tile-color-box is-green"></div>
                <div className="tile-info">
                  <span className="tile-name">Zelená</span>
                  <span className="tile-ral">RAL 6005</span>
                </div>
              </label>

              {/* Antracitová varianta */}
              <label
                className={`objimka-tile ${selectedColor === "antracit" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="color"
                  id="antracit"
                  checked={selectedColor === "antracit"}
                  onChange={handleColorChange}
                />
                <div className="tile-color-box is-antracit"></div>
                <div className="tile-info">
                  <span className="tile-name">Antracit</span>
                  <span className="tile-ral">RAL 7016</span>
                </div>
              </label>
            </div>
          </div>

          <div className="quantity-select">
            <p>Množství</p>
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

export default ObjimkyChange;
