"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { ProductDetailShell } from "../Components/ProductDetailShell";

interface ObjimkyChangeProps {
  children: ReactNode;
}

const ObjimkyChange = ({ children }: ObjimkyChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [quantity, setQuantity] = useState(1);

  const title =
    selectedColor === "zelená"
      ? "Objímka Zelená (RAL 6005)"
      : "Objímka Antracitová (RAL 7016)";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/sloupky/objimky3d.jpeg`
      : `${basePath}/sloupky/objimky3da.jpg`;

  const isInStock = true;

  return (
    <ProductDetailShell
      title={title}
      priceLabel="55,- / ks"
      imageSrc={imgSrc}
      stockLabel={isInStock ? "Skladem, ihned k odběru" : "Momentálně nedostupné"}
      stockClassName={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}
      quantity={quantity}
      onQuantityChange={setQuantity}
      orderDisabled={!isInStock}
      selectors={
        <div className="objimka-color-selector">
          <div className="objimka-tile-grid">
            <label
              className={`objimka-tile ${selectedColor === "zelená" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="zelená"
                checked={selectedColor === "zelená"}
                onChange={() => setSelectedColor("zelená")}
              />
              <div className="tile-color-box is-green"></div>
              <div className="tile-info">
                <span className="tile-name">Zelená</span>
                <span className="tile-ral">RAL 6005</span>
              </div>
            </label>

            <label
              className={`objimka-tile ${selectedColor === "antracit" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="antracit"
                checked={selectedColor === "antracit"}
                onChange={() => setSelectedColor("antracit")}
              />
              <div className="tile-color-box is-antracit"></div>
              <div className="tile-info">
                <span className="tile-name">Antracit</span>
                <span className="tile-ral">RAL 7016</span>
              </div>
            </label>
          </div>
        </div>
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default ObjimkyChange;
