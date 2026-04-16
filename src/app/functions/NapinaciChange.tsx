"use client";

import { useState, ReactNode, useEffect } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Color = "zelena" | "antracitova";
type Length = "26" | "52" | "78";

interface NapinaciChangeProps {
  children: ReactNode;
  initialColor?: Color;
  initialLength?: Length;
}

const productData: Record<Color, Partial<Record<Length, number>>> = {
  zelena: { "26": 140, "52": 250, "78": 340 },
  antracitova: { "52": 270, "78": 360 },
};

const colorLabels = {
  zelena: "zelený",
  antracitova: "antracitový",
};

const NapinaciChange = ({
  children,
  initialColor = "zelena",
  initialLength = "26",
}: NapinaciChangeProps) => {
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<Color>(initialColor);
  const [selectedLength, setSelectedLength] = useState<Length>(initialLength);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.id as Color;
    setSelectedColor(color);

    const availableLengths = Object.keys(productData[color]) as Length[];
    setSelectedLength(availableLengths[0]);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLength(e.target.value as Length);
  };

  /* update URL */
  useEffect(() => {
    router.replace(
      `/NapinaciDraty?color=${selectedColor}&length=${selectedLength}`,
      { scroll: false },
    );
  }, [selectedColor, selectedLength, router]);

  const imgSrc =
    selectedColor === "zelena"
      ? `${basePath}/sloupky/dratgreen.webp`
      : `${basePath}/sloupky/dratantra.webp`;

  const currentPrice = productData[selectedColor]?.[selectedLength] ?? 0;

  const title = `Napínací drát ${
    colorLabels[selectedColor]
  }, ${selectedLength} m`;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},-</h2>

        <h3 className="stock-status in-stock">Skladem, ihned k odběru</h3>

        {children}

        <div className="type-select">
          <p>Typ drátu:</p>

          <div className="type-options">
            <label className="type-label active">
              <input type="radio" name="type" checked readOnly /> PVC
            </label>

            <label className="type-label">
              <input
                type="radio"
                name="type"
                onChange={() => router.push("/NapinaciDratyZinkove")}
              />
              Zinkové
            </label>
          </div>
        </div>

        <div className="height-select">
          <label htmlFor="length">Vyberte délku:</label>

          <select
            id="length"
            value={selectedLength}
            onChange={handleLengthChange}
          >
            {(Object.keys(productData[selectedColor]) as Length[]).map(
              (length) => (
                <option key={length} value={length}>
                  {length} m
                </option>
              ),
            )}
          </select>
        </div>

        <form>
          <div className="color-select">
            <p>Barva:</p>

            <label htmlFor="zelena">
              <input
                type="radio"
                name="color"
                id="zelena"
                checked={selectedColor === "zelena"}
                onChange={handleColorChange}
              />
              <span className="color-1"></span>
            </label>

            <label htmlFor="antracitova">
              <input
                type="radio"
                name="color"
                id="antracitova"
                checked={selectedColor === "antracitova"}
                onChange={handleColorChange}
              />
              <span className="color-2"></span>
            </label>
          </div>

          <div className="quantity-select">
            <p>Množství</p>
            <input type="number" defaultValue={1} min="1" />
          </div>

          <Link href="/form" className="order-link">
            <button type="button">
              Objednat <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default NapinaciChange;
