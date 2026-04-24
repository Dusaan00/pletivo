"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { ProductDetailShell } from "../Components/ProductDetailShell";

interface VazaciChangeProps {
  children: ReactNode;
}

const VazaciChange = ({ children }: VazaciChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [quantity, setQuantity] = useState(1);

  const title =
    selectedColor === "zelená"
      ? "Vázací Drát Zelený 50m"
      : selectedColor === "antracit"
        ? "Vázací Drát Antracitový 50m"
        : "Vázací Drát Hnědá 50m";

  const imgSrc = `${basePath}/sloupky/vazacidrat.jpeg`;
  const isInStock = true;

  return (
    <ProductDetailShell
      title={title}
      priceLabel="140,- / ks"
      imageSrc={imgSrc}
      cartItem={{
        productId: "vazaci-drat",
        name: title,
        image: imgSrc,
        href: "/VazaciDraty",
        unitPrice: 140,
        unitLabel: "140,- / ks",
        options: [{ name: "Barva", value: selectedColor }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      orderDisabled={!isInStock}
      selectors={
        <div className="vazaci-selector">
          <div className="vazaci-grid">
            <label
              className={`vazaci-tile ${selectedColor === "zelená" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="zelená"
                checked={selectedColor === "zelená"}
                onChange={() => setSelectedColor("zelená")}
              />
              <div className="vazaci-color-box is-green"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Zelená</span>
                <span className="vazaci-ral">RAL 6005</span>
              </div>
            </label>

            <label
              className={`vazaci-tile ${selectedColor === "antracit" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="antracit"
                checked={selectedColor === "antracit"}
                onChange={() => setSelectedColor("antracit")}
              />
              <div className="vazaci-color-box is-antracit"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Antracit</span>
                <span className="vazaci-ral">RAL 7016</span>
              </div>
            </label>

            <label
              className={`vazaci-tile ${selectedColor === "hnědá" ? "active" : ""}`}
            >
              <input
                type="radio"
                name="color"
                id="hnědá"
                checked={selectedColor === "hnědá"}
                onChange={() => setSelectedColor("hnědá")}
              />
              <div className="vazaci-color-box is-brown"></div>
              <div className="vazaci-info">
                <span className="vazaci-name">Hnědá</span>
                <span className="vazaci-ral">RAL 8017</span>
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

export default VazaciChange;
