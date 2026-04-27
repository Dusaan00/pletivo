"use client";

import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { basePath } from "../functions/Env";
import {
  ProductColorSwatches,
  ProductDetailShell,
  ProductRadioGroup,
  ProductSelectField,
} from "../Components/ProductDetailShell";
import { getFamilyProducts, getProductById } from "../../data/products/model";

type ProductModelItem = NonNullable<ReturnType<typeof getProductById>>;
type ProductKind = "sloupek" | "vzpěra";
type Color = "zelená" | "antracit";

type SelectedOptions = {
  kind: ProductKind;
  color: Color;
  height: string;
};

interface PlotoveSloupkyChangeProps {
  children: ReactNode;
  initialProductId: string;
}

const familyByKind: Record<ProductKind, string> = {
  sloupek: "sloupky-kulate",
  vzpěra: "vzpery",
};

const heightOptions: Record<ProductKind, string[]> = {
  sloupek: ["1500", "1750", "2000", "2300", "2500"],
  vzpěra: ["1750", "2000", "2300", "2500"],
};

function getInitialOptions(productId: string): SelectedOptions {
  const product = getProductById(productId);
  const variantOptions = product?.variantOptions || {};
  const kind = variantOptions.typ === "vzpěra" ? "vzpěra" : "sloupek";
  const color = variantOptions.barva === "antracit" ? "antracit" : "zelená";
  const height = String(variantOptions.vyska || heightOptions[kind][0]).replace(
    " mm",
    "",
  );

  return {
    kind,
    color,
    height: heightOptions[kind].includes(height)
      ? height
      : heightOptions[kind][0],
  };
}

function findProduct({ kind, color, height }: SelectedOptions) {
  return getFamilyProducts(familyByKind[kind]).find(
    (product: ProductModelItem) =>
      product.variantOptions?.typ === kind &&
      product.variantOptions?.barva === color &&
      product.variantOptions?.vyska === `${height} mm`,
  );
}

function formatHeightLabel(height: string) {
  return `${(Number(height) / 1000).toFixed(2)}m`;
}

const PlotoveSloupkyChange = ({
  children,
  initialProductId,
}: PlotoveSloupkyChangeProps) => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(() =>
    getInitialOptions(initialProductId),
  );
  const [quantity, setQuantity] = useState(1);

  const currentProduct = findProduct(selectedOptions) || getProductById(initialProductId);

  if (!currentProduct) {
    return null;
  }

  const navigateToVariant = (nextOptions: SelectedOptions) => {
    const nextProduct = findProduct(nextOptions);

    if (!nextProduct) {
      return;
    }

    setSelectedOptions(nextOptions);
    router.push(nextProduct.link, { scroll: false });
  };

  const handleKindChange = (kind: ProductKind) => {
    const availableHeights = heightOptions[kind];
    const height = availableHeights.includes(selectedOptions.height)
      ? selectedOptions.height
      : availableHeights[0];

    navigateToVariant({
      ...selectedOptions,
      kind,
      height,
    });
  };

  const imageSrc = `${basePath}${currentProduct.image}`;
  const price = currentProduct.pricing.amount || 0;
  const kindLabel =
    selectedOptions.kind === "sloupek" ? "Sloupek PVC Ø48" : "Vzpěra PVC Ø38";

  return (
    <ProductDetailShell
      title={currentProduct.name}
      priceLabel={`${price},-`}
      imageSrc={imageSrc}
      imageAlt={currentProduct.name}
      stockLabel="Skladem, ihned k odběru"
      cartItem={{
        productId: currentProduct.id,
        name: currentProduct.name,
        image: imageSrc,
        href: currentProduct.link,
        unitPrice: price,
        unitLabel: `${price},-`,
        options: [
          { name: "Typ", value: kindLabel },
          { name: "Výška", value: `${selectedOptions.height} mm` },
          { name: "Barva", value: selectedOptions.color },
        ],
        checkoutMode: "gateway-ready",
      }}
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <>
          <ProductRadioGroup
            label="Typ produktu:"
            name="plotove-sloupky-type"
            className="type-select"
            options={[
              {
                value: "sloupek",
                label: "Sloupek PVC Ø48",
                checked: selectedOptions.kind === "sloupek",
                onChange: () => handleKindChange("sloupek"),
              },
              {
                value: "vzpera",
                label: "Vzpěra PVC Ø38",
                checked: selectedOptions.kind === "vzpěra",
                onChange: () => handleKindChange("vzpěra"),
              },
            ]}
          />
          <ProductSelectField
            id="height"
            label="Vyberte výšku:"
            value={selectedOptions.height}
            onChange={(height) =>
              navigateToVariant({
                ...selectedOptions,
                height,
              })
            }
            options={heightOptions[selectedOptions.kind].map((height) => ({
              value: height,
              label: formatHeightLabel(height),
            }))}
          />
          <ProductColorSwatches
            label="Barva:"
            name="color"
            options={[
              {
                id: "zelená",
                checked: selectedOptions.color === "zelená",
                onChange: () =>
                  navigateToVariant({
                    ...selectedOptions,
                    color: "zelená",
                  }),
                swatchClassName: "color-1",
              },
              {
                id: "antracit",
                checked: selectedOptions.color === "antracit",
                onChange: () =>
                  navigateToVariant({
                    ...selectedOptions,
                    color: "antracit",
                  }),
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

export default PlotoveSloupkyChange;
