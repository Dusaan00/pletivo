"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import {
  ProductDetailShell,
  ProductRadioGroup,
  ProductSelectField,
} from "../Components/ProductDetailShell";

interface BezinalChangeProps {
  children: ReactNode;
  titleAs?: "h1" | "h2" | "h3";
}

const prices: Record<string, Record<string, number>> = {
  "1.00": { "2.0": 1550, "2.2": 1999 },
  "1.25": { "2.0": 1950, "2.2": 2499 },
  "1.50": { "2.0": 2325, "2.2": 2999 },
  "1.60": { "2.0": 2475, "2.2": 3199 },
  "1.80": { "2.0": 2799, "2.2": 3599 },
  "2.00": { "2.0": 3099, "2.2": 3999 },
};

const BezinalChange = ({ children, titleAs = "h1" }: BezinalChangeProps) => {
  const [selectedHeight, setSelectedHeight] = useState("1.00");
  const [selectedDiameter, setSelectedDiameter] = useState("2.0");
  const [quantity, setQuantity] = useState(1);

  const title = "Pletivo Zinkové Bezinal 25m";
  const imgSrc = `${basePath}/pletivaa/bezinai.webp`;
  const currentPrice = prices[selectedHeight]?.[selectedDiameter] || 1000;

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
        productId: "pletivo-bezinal",
        name: `${title}, ${selectedDiameter} mm`,
        image: imgSrc,
        href: "/PletivaBezinal",
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},-`,
        options: [
          { name: "Výška", value: `${selectedHeight} m` },
          { name: "Průměr drátu", value: `${selectedDiameter} mm` },
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
          <ProductRadioGroup
            label="Průměr drátu:"
            name="diameter"
            options={[
              {
                value: "2.0",
                label: "2.0 mm",
                checked: selectedDiameter === "2.0",
                onChange: () => setSelectedDiameter("2.0"),
              },
              {
                value: "2.2",
                label: "2.2 mm",
                checked: selectedDiameter === "2.2",
                onChange: () => setSelectedDiameter("2.2"),
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

export default BezinalChange;
