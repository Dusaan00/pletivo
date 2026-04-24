"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { ProductDetailShell, ProductSelectField } from "../Components/ProductDetailShell";

interface DeskyChangeProps {
  children: ReactNode;
}

const prices: Record<string, number> = {
  "2.50": 670,
  "2.90": 710,
};

const DeskyChange = ({ children }: DeskyChangeProps) => {
  const [selectedSize, setSelectedSize] = useState("2.50");
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetailShell
      title="Podhrabová betonová deska"
      priceLabel={`${prices[selectedSize]},-`}
      imageSrc={`${basePath}/deskyy/deskybeton.webp`}
      cartItem={{
        productId: "podhrabove-desky",
        name: `Podhrabová betonová deska ${selectedSize} m`,
        image: `${basePath}/deskyy/deskybeton.webp`,
        href: "/DeskyPodhrabove",
        unitPrice: prices[selectedSize],
        unitLabel: `${prices[selectedSize]},-`,
        options: [{ name: "Rozměr", value: `${selectedSize} m` }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <ProductSelectField
          id="size"
          label="Vyberte rozměr:"
          value={selectedSize}
          onChange={setSelectedSize}
          options={[
            { value: "2.50", label: "2.50 m" },
            { value: "2.90", label: "2.90 m" },
          ]}
        />
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default DeskyChange;
