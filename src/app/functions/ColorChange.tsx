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
  titleAs?: "h1" | "h2" | "h3";
}

const prices: Record<string, number> = {
  "1.00": 1325,
  "1.25": 1650,
  "1.50": 1975,
  "1.60": 2100,
  "1.80": 2350,
  "2.00": 2625,
};

const ColorChange = ({ children, titleAs = "h1" }: ColorChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [selectedHeight, setSelectedHeight] = useState("1.00");
  const [quantity, setQuantity] = useState(1);

  const title =
    selectedColor === "zelená"
      ? "Pletivo Poplastované Zelené 25m"
      : "Pletivo Poplastované Antracit 25m";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/pletivaa/green.webp`
      : `${basePath}/pletivaa/antracit.webp`;

  const currentPrice = prices[selectedHeight] || 1325;

  return (
    <ProductDetailShell
      title={title}
      titleAs={titleAs}
      priceLabel={`${currentPrice},-`}
      imageSrc={imgSrc}
      stockLabel="Skladem od 4.5.2026"
      stockNote="Předobjednávka mailem a telefonicky"
      stockClassName="stock-status available-from-stock"
      orderDisabled
      orderLabel="Dostupné od 4.5.2026"
      cartItem={{
        productId: "pletivo-pvc",
        name: title,
        image: imgSrc,
        href: "/PletivaPVC",
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},-`,
        options: [
          { name: "Výška", value: `${selectedHeight} m` },
          { name: "Barva", value: selectedColor },
        ],
        checkoutMode: "gateway-ready",
      }}
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
              { value: "1.00", label: "1.00m" },
              { value: "1.25", label: "1.25m" },
              { value: "1.50", label: "1.50m" },
              { value: "1.60", label: "1.60m" },
              { value: "1.80", label: "1.80m" },
              { value: "2.00", label: "2.00m" },
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
