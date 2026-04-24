"use client";

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { basePath } from "../functions/Env";
import {
  ProductDetailShell,
  ProductRadioGroup,
  ProductSelectField,
} from "../Components/ProductDetailShell";

interface PanelyZincChangeProps {
  children: ReactNode;
  variant: Variant;
  pageHref: string;
  variantRoutes?: Record<Variant, string>;
}

type Variant = "3D" | "2D";

const variants: Record<
  Variant,
  {
    title: string;
    img: string;
    heights: Record<string, number>;
  }
> = {
  "3D": {
    title: "Panel zinkový 3D, drát 4mm",
    img: `${basePath}/pletivaa/zinc.png`,
    heights: {
      "1030/2500": 520,
      "1230/2500": 585,
      "1530/2500": 677,
      "1730/2500": 710,
    },
  },
  "2D": {
    title: "Panel zinkový 2D, drát 5/6mm",
    img: `${basePath}/pletivaa/dvad.png`,
    heights: {
      "1030/2500": 925,
      "1230/2500": 965,
      "1430/2500": 1120,
      "1630/2500": 1240,
      "1830/2500": 1450,
      "2030/2500": 1520,
    },
  },
};

const PanelyZincChange = ({
  children,
  variant,
  pageHref,
  variantRoutes = {
    "3D": "/PanelyZinkove3D",
    "2D": "/PanelyZinkove2D",
  },
}: PanelyZincChangeProps) => {
  const router = useRouter();
  const [selectedHeight, setSelectedHeight] = useState(
    Object.keys(variants[variant].heights)[0],
  );
  const [quantity, setQuantity] = useState(1);

  const currentVariant = variants[variant];
  const heightOptions = Object.keys(currentVariant.heights);
  const currentPrice =
    currentVariant.heights[selectedHeight] ??
    Object.values(currentVariant.heights)[0];

  const handleVariantChange = (value: Variant) => {
    if (value === variant) {
      return;
    }

    router.push(variantRoutes[value]);
  };

  return (
    <ProductDetailShell
      title={currentVariant.title}
      priceLabel={`${currentPrice},-`}
      imageSrc={currentVariant.img}
      stockLabel="Skladem, ihned k odběru"
      cartItem={{
        productId: variant === "3D" ? "panel-3d-zinc" : "panel-2d-zinc",
        name: currentVariant.title,
        image: currentVariant.img,
        href: pageHref,
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},-`,
        options: [
          { name: "Provedení", value: variant },
          { name: "Výška", value: selectedHeight },
        ],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <>
          <ProductRadioGroup
            label="Provedení:"
            name="variant"
            options={[
              {
                value: "3D",
                label: "3D",
                checked: variant === "3D",
                onChange: () => handleVariantChange("3D"),
              },
              {
                value: "2D",
                label: "2D",
                checked: variant === "2D",
                onChange: () => handleVariantChange("2D"),
              },
            ]}
          />
          <ProductSelectField
            id="height"
            label="Vyberte výšku:"
            value={selectedHeight}
            onChange={setSelectedHeight}
            options={heightOptions.map((height) => ({
              value: height,
              label: height,
            }))}
          />
        </>
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default PanelyZincChange;
