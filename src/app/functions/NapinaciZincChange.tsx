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
