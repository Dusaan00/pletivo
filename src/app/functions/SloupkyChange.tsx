"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import {
  ProductColorSwatches,
  ProductDetailShell,
  ProductSelectField,
} from "../Components/ProductDetailShell";

interface ColorChangeProps {
  children: ReactNode;
}

const prices: Record<string, number> = {
  "2000": 255,
  "2300": 285,
  "2600": 335,
};

const ColorChange = ({ children }: ColorChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [selectedHeight, setSelectedHeight] = useState("2000");
  const [quantity, setQuantity] = useState(1);

  const title =
    selectedColor === "zelená"
      ? "Sloupky pvc 60x40 zelené"
      : "Sloupky pvc 60x40 antracit";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/land/sloupkyland.webp`
      : `${basePath}/land/sloupkyantracit.webp`;

  const currentPrice = prices[selectedHeight] || 255;

  return (
    <ProductDetailShell
      title={title}
      priceLabel={`${currentPrice},-`}
      imageSrc={imgSrc}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <>
          <ProductSelectField
            id="height"
            label="Vyberte výšku:"
            value={selectedHeight}
            onChange={setSelectedHeight}
            options={[
              { value: "2000", label: "2.00m" },
              { value: "2300", label: "2.30m" },
              { value: "2600", label: "2.60m" },
            ]}
          />
          <ProductColorSwatches
            label="Barva:"
            name="color"
            options={[
              {
                id: "zelená",
                checked: selectedColor === "zelená",
                onChange: () => setSelectedColor("zelená"),
                swatchClassName: "color-1",
              },
              {
                id: "antracit",
                checked: selectedColor === "antracit",
                onChange: () => setSelectedColor("antracit"),
                swatchClassName: "color-2",
              },
            ]}
          />
        </>
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default ColorChange;
