"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { useRouter } from "next/navigation";
import { ProductDetailShell, ProductRadioGroup } from "../Components/ProductDetailShell";

interface KladkyChangeProps {
  children: ReactNode;
  type: "pvc" | "zinc";
}

const KladkyChange = ({ children, type }: KladkyChangeProps) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("zelená");
  const [quantity, setQuantity] = useState(1);

  const handleTypeChange = (newType: "pvc" | "zinc") => {
    if (newType === "pvc") router.push("/Kladky");
    if (newType === "zinc") router.push("/KladkyZinkove");
  };

  let title = "";
  let imgSrc = "";
  let currentPrice = 29;

  if (type === "pvc") {
    if (selectedColor === "zelená") {
      title = "Napínací Kladka Zelená";
      imgSrc = `${basePath}/sloupky/kladka.webp`;
      currentPrice = 22;
    } else {
      title = "Napínací Kladka Antracit";
      imgSrc = `${basePath}/sloupky/kladkaa.webp`;
      currentPrice = 29;
    }
  } else {
    title = "Napínací Kladka Zinková";
    imgSrc = `${basePath}/sloupky/kladkazinc.webp`;
    currentPrice = 29;
  }

  const isInStock = true;

  return (
    <ProductDetailShell
      title={title}
      priceLabel={`${currentPrice},- / ks`}
      imageSrc={imgSrc}
      stockLabel={isInStock ? "Skladem, ihned k odběru" : "Momentálně nedostupné"}
      stockClassName={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}
      cartItem={{
        productId:
          type === "pvc" ? "napinaci-kladka-pvc" : "napinaci-kladka-zinkova",
        name: title,
        image: imgSrc,
        href: type === "pvc" ? "/Kladky" : "/KladkyZinkove",
        unitPrice: currentPrice,
        unitLabel: `${currentPrice},- / ks`,
        options:
          type === "pvc"
            ? [{ name: "Barva", value: selectedColor }]
            : [{ name: "Typ", value: "Zinková" }],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      orderDisabled={!isInStock}
      selectors={
        <>
          <ProductRadioGroup
            label="Typ kladky:"
            name="variant"
            options={[
              {
                value: "pvc",
                label: "PVC",
                checked: type === "pvc",
                onChange: () => handleTypeChange("pvc"),
              },
              {
                value: "zinc",
                label: "Zinek",
                checked: type === "zinc",
                onChange: () => handleTypeChange("zinc"),
              },
            ]}
          />
          {type === "pvc" && (
            <ProductRadioGroup
              label="Barva:"
              name="color"
              className="diameter-select"
              options={[
                {
                  value: "zelená",
                  label: "Zelená",
                  checked: selectedColor === "zelená",
                  onChange: () => setSelectedColor("zelená"),
                },
                {
                  value: "antracit",
                  label: "Antracit",
                  checked: selectedColor === "antracit",
                  onChange: () => setSelectedColor("antracit"),
                },
              ]}
            />
          )}
        </>
      }
    >
      {children}
    </ProductDetailShell>
  );
};

export default KladkyChange;
