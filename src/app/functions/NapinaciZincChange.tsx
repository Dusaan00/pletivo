"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { useRouter } from "next/navigation";
import { ProductDetailShell, ProductRadioGroup } from "../Components/ProductDetailShell";

interface NapinaciChangeProps {
  children: ReactNode;
}

const NapinaciChange = ({ children }: NapinaciChangeProps) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetailShell
      title="Napínací drát – Zinkový"
      priceLabel="255,-"
      imageSrc={`${basePath}/sloupky/dratzink.webp`}
      stockLabel="Skladem, ihned k odběru"
      cartItem={{
        productId: "napinaci-drat-zinkovy",
        name: "Napínací drát zinkový",
        image: `${basePath}/sloupky/dratzink.webp`,
        href: "/NapinaciDratyZinkove",
        unitPrice: 255,
        unitLabel: "255,-",
        options: [{ name: "Typ", value: "Zinkový" }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <ProductRadioGroup
          label="Typ drátu:"
          name="type"
          className="type-select"
          options={[
            {
              value: "pvc",
              label: "PVC",
              checked: false,
              onChange: () => router.push("/NapinaciDraty"),
            },
            {
              value: "zinc",
              label: "Zinkové",
              checked: true,
              onChange: () => undefined,
            },
          ]}
        />
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default NapinaciChange;
