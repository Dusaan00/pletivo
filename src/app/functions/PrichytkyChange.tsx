"use client";

import { ReactNode, useState } from "react";
import { basePath } from "./Env";
import { ProductDetailShell } from "../Components/ProductDetailShell";

interface PrichytkyChangeProps {
  children: ReactNode;
}

const PrichytkyChange = ({ children }: PrichytkyChangeProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetailShell
      title="Příchytky + šroubky"
      priceLabel="7,- / ks"
      imageSrc={`${basePath}/sloupky/prichytky.webp`}
      cartItem={{
        productId: "prichytky-sroubky",
        name: "Příchytky + šroubky",
        image: `${basePath}/sloupky/prichytky.webp`,
        href: "/PrichytkySroubky",
        unitPrice: 7,
        unitLabel: "7,- / ks",
        options: [{ name: "Balení", value: "1 ks příchytka + 1 ks šroubek" }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
    >
      {children}
    </ProductDetailShell>
  );
};

export default PrichytkyChange;
