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
      quantity={quantity}
      onQuantityChange={setQuantity}
    >
      {children}
    </ProductDetailShell>
  );
};

export default PrichytkyChange;
