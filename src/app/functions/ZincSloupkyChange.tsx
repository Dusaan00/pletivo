"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import {
  ProductDetailShell,
  ProductSelectField,
} from "../Components/ProductDetailShell";

interface ZincSloupkyChangeProps {
  children: ReactNode;
}

const prices: Record<string, number> = {
  "2000": 355,
  "2400": 390,
  "2600": 490,
};

const ZincSloupkyChange = ({ children }: ZincSloupkyChangeProps) => {
  const [selectedHeight, setSelectedHeight] = useState("2000");
  const [quantity, setQuantity] = useState(1);

  const title = `Sloupek Zn 60x40 / ${selectedHeight}`;
  const imgSrc = `${basePath}/sloupky/jeklzinc.webp`;
  const currentPrice = prices[selectedHeight];

  return (
    <ProductDetailShell
      title={title}
      priceLabel={`${currentPrice},-`}
      imageSrc={imgSrc}
      stockLabel="Skladem, ihned k odběru"
      cartItem={{
        productId: "sloupek-jekl-zinc",
        name: title,
        image: imgSrc,
        href: "/SloupkyZinkoveJekl",
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},-`,
        options: [{ name: "Výška", value: `${selectedHeight} mm` }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <ProductSelectField
          id="height"
          label="Vyberte výšku:"
          value={selectedHeight}
          onChange={setSelectedHeight}
          options={[
            { value: "2000", label: "2.00 m" },
            { value: "2400", label: "2.40 m" },
            { value: "2600", label: "2.60 m" },
          ]}
        />
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default ZincSloupkyChange;
