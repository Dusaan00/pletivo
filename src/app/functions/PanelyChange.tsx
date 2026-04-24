"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import {
  ProductColorSwatches,
  ProductDetailShell,
  ProductSelectField,
} from "../Components/ProductDetailShell";

interface PanelyChangeProps {
  children: ReactNode;
  titleAs?: "h1" | "h2" | "h3";
}

const prices: Record<string, number> = {
  "1030/2500": 490,
  "1230/2500": 530,
  "1530/2500": 580,
  "1730/2500": 620,
  "2030/2500": 690,
};

const PanelyChange = ({ children, titleAs = "h1" }: PanelyChangeProps) => {
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [selectedHeight, setSelectedHeight] = useState("1030/2500");
  const [quantity, setQuantity] = useState(1);

  const title =
    selectedColor === "zelená"
      ? "Panel 3D Zelený, drát 4mm"
      : "Panel 3D Antracit, drát 4mm";

  const imgSrc =
    selectedColor === "zelená"
      ? `${basePath}/panely/panelgreen.webp`
      : `${basePath}/panely/paneltracit.webp`;

  const isInStock = true;
  const currentPrice = prices[selectedHeight] || 490;

  return (
    <ProductDetailShell
      title={title}
      titleAs={titleAs}
      priceLabel={`${currentPrice},-`}
      imageSrc={imgSrc}
      cartItem={{
        productId: "panely-pvc-3d",
        name: title,
        image: imgSrc,
        href: "/PanelyProduct",
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},-`,
        options: [
          { name: "Výška", value: selectedHeight },
          { name: "Barva", value: selectedColor },
        ],
        checkoutMode: "gateway-ready",
      }}
      stockLabel={
        isInStock
          ? "Skladem, ihned k odběru"
          : "Panely antracit na skladě od 18.3. 2026."
      }
      stockClassName={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}
      quantity={quantity}
      onQuantityChange={setQuantity}
      orderDisabled={!isInStock}
      selectors={
        <>
          <ProductSelectField
            id="height"
            label="Vyberte výšku:"
            value={selectedHeight}
            onChange={setSelectedHeight}
            options={[
              { value: "1030/2500", label: "1030/2500" },
              { value: "1230/2500", label: "1230/2500" },
              { value: "1530/2500", label: "1530/2500" },
              { value: "1730/2500", label: "1730/2500" },
              { value: "2030/2500", label: "2030/2500" },
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

export default PanelyChange;
