"use client";

import { ReactNode, Suspense, useEffect, useState } from "react";
import { basePath } from "../functions/Env";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ProductColorSwatches,
  ProductDetailShell,
  ProductRadioGroup,
  ProductSelectField,
} from "../Components/ProductDetailShell";

type Color = "zelena" | "antracitova";
type Length = "26" | "52" | "78";

interface NapinaciChangeProps {
  children: ReactNode;
}

const productData: Record<Color, Partial<Record<Length, number>>> = {
  zelena: { "26": 140, "52": 250, "78": 340 },
  antracitova: { "52": 270, "78": 360 },
};

const colorLabels = {
  zelena: "zelený",
  antracitova: "antracitový",
};

const NapinaciContent = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const colorParam = searchParams.get("color") as Color;
  const lengthParam = searchParams.get("length") as Length;

  const colorFromUrl: Color =
    colorParam && productData[colorParam] ? colorParam : "zelena";

  const availableLengths = Object.keys(productData[colorFromUrl]) as Length[];

  const lengthFromUrl: Length =
    lengthParam && availableLengths.includes(lengthParam)
      ? lengthParam
      : availableLengths[0];

  useEffect(() => {
    const urlColor = searchParams.get("color");
    const urlLength = searchParams.get("length");

    if (urlColor !== colorFromUrl || urlLength !== lengthFromUrl) {
      router.replace(
        `/NapinaciDraty?color=${colorFromUrl}&length=${lengthFromUrl}`,
        { scroll: false },
      );
    }
  }, [colorFromUrl, lengthFromUrl, router, searchParams]);

  const [selectedColor, setSelectedColor] = useState<Color>(colorFromUrl);
  const [selectedLength, setSelectedLength] = useState<Length>(lengthFromUrl);

  useEffect(() => {
    setSelectedColor(colorFromUrl);
    setSelectedLength(lengthFromUrl);
  }, [colorFromUrl, lengthFromUrl]);

  const handleColorChange = (color: Color) => {
    const nextLengths = Object.keys(productData[color]) as Length[];
    const firstAvailableLength = nextLengths[0];

    setSelectedColor(color);
    setSelectedLength(firstAvailableLength);

    router.replace(
      `/NapinaciDraty?color=${color}&length=${firstAvailableLength}`,
      { scroll: false },
    );
  };

  const handleLengthChange = (length: string) => {
    const castLength = length as Length;
    setSelectedLength(castLength);

    router.push(`/NapinaciDraty?color=${selectedColor}&length=${castLength}`, {
      scroll: false,
    });
  };

  const imgSrc =
    selectedColor === "zelena"
      ? `${basePath}/sloupky/dratgreen.webp`
      : `${basePath}/sloupky/dratantra.webp`;

  const currentPrice = productData[selectedColor]?.[selectedLength] ?? 0;
  const title = `Napínací drát ${colorLabels[selectedColor]}, ${selectedLength} m`;

  return (
    <ProductDetailShell
      title={title}
      priceLabel={`${currentPrice},-`}
      imageSrc={imgSrc}
      stockLabel="Skladem, ihned k odběru"
      quantity={quantity}
      onQuantityChange={setQuantity}
      selectors={
        <>
          <ProductRadioGroup
            label="Typ drátu:"
            name="type"
            className="type-select"
            options={[
              {
                value: "pvc",
                label: "PVC",
                checked: true,
                onChange: () => undefined,
              },
              {
                value: "zinc",
                label: "Zinkové",
                checked: false,
                onChange: () => router.push("/NapinaciDratyZinkove"),
              },
            ]}
          />
          <ProductSelectField
            id="length"
            label="Vyberte délku:"
            value={selectedLength}
            onChange={handleLengthChange}
            options={(Object.keys(productData[selectedColor]) as Length[]).map(
              (length) => ({
                value: length,
                label: `${length} m`,
              }),
            )}
          />
          <ProductColorSwatches
            label="Barva:"
            name="color"
            options={[
              {
                id: "zelena",
                checked: selectedColor === "zelena",
                onChange: () => handleColorChange("zelena"),
                swatchClassName: "color-1",
              },
              {
                id: "antracitova",
                checked: selectedColor === "antracitova",
                onChange: () => handleColorChange("antracitova"),
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

const NapinaciChange = ({ children }: NapinaciChangeProps) => {
  return (
    <Suspense fallback={<div>Načítání...</div>}>
      <NapinaciContent>{children}</NapinaciContent>
    </Suspense>
  );
};

export default NapinaciChange;
