"use client";

import { ReactNode, useState } from "react";
import { basePath } from "./Env";
import { ProductDetailShell } from "../Components/ProductDetailShell";

interface DrzakyChangeProps {
  children: ReactNode;
}

const DrzakyChange = ({ children }: DrzakyChangeProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetailShell
      title="Držáky na podhrabové desky"
      priceLabel="55,- / ks"
      imageSrc={`${basePath}/deskyy/drzaky.webp`}
      cartItem={{
        productId: "drzaky-desek",
        name: "Držáky na podhrabové desky",
        image: `${basePath}/deskyy/drzaky.webp`,
        href: "/DrzakyNaPodhraboveDesky",
        unitPrice: 55,
        unitLabel: "55,- / ks",
        options: [{ name: "Typ", value: "Držák na podhrabové desky" }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
    >
      {children}
    </ProductDetailShell>
  );
};

export default DrzakyChange;
