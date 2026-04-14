"use client";

import { useState, ReactNode } from "react";
import { basePath } from "./Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface KladkyChangeProps {
  children: ReactNode;
  type: "pvc" | "zinc";
}

const KladkyChange = ({ children, type }: KladkyChangeProps) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("zelená");

  const handleTypeChange = (newType: "pvc" | "zinc") => {
    if (newType === "pvc") router.push("/Kladky");
    if (newType === "zinc") router.push("/KladkyZinkove");
  };

  // Dynamická data
  let title = "";
  let imgSrc = "";
  let currentPrice = 29; // Výchozí cena (pro Antracit a Zinek)

  if (type === "pvc") {
    if (selectedColor === "zelená") {
      title = "Napínací Kladka Zelená";
      imgSrc = `${basePath}/sloupky/kladka.webp`;
      currentPrice = 22; // <--- TADY JE TA TVOJE CENA PRO ZELENOU
    } else {
      title = "Napínací Kladka Antracit";
      imgSrc = `${basePath}/sloupky/kladkaa.webp`;
      currentPrice = 29; // Antracit zůstává za 29,-
    }
  } else {
    title = "Napínací Kladka Zinková";
    imgSrc = `${basePath}/sloupky/kladkazinc.webp`;
    currentPrice = 29; // Zinek taky za 29,- (nebo si uprav podle potřeby)
  }

  const isInStock = true;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- / ks</h2>

        <h3 className={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}>
          {isInStock ? "Skladem, ihned k odběru" : "Momentálně nedostupné"}
        </h3>

        {children}

        {/* VÝBĚR TYPU - POUŽÍVÁ TVÉ STRUKTURY Z PANELŮ */}
        <div className="diameter-select">
          <p>Typ kladky:</p>
          <div className="diameter-options">
            <label>
              <input
                type="radio"
                name="variant"
                checked={type === "pvc"}
                onChange={() => handleTypeChange("pvc")}
              />
              <span>PVC</span>
            </label>

            <label>
              <input
                type="radio"
                name="variant"
                checked={type === "zinc"}
                onChange={() => handleTypeChange("zinc")}
              />
              <span>Zinek</span>
            </label>
          </div>
        </div>

        {/* VÝBĚR BARVY - POUŽÍVÁ STEJNOU STRUKTURU */}
        {type === "pvc" && (
          <div className="diameter-select" style={{ marginTop: "1.5rem" }}>
            <p>Barva:</p>
            <div className="diameter-options">
              <label>
                <input
                  type="radio"
                  name="color"
                  checked={selectedColor === "zelená"}
                  onChange={() => setSelectedColor("zelená")}
                />
                <span>Zelená</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="color"
                  checked={selectedColor === "antracit"}
                  onChange={() => setSelectedColor("antracit")}
                />
                <span>Antracit</span>
              </label>
            </div>
          </div>
        )}

        <form>
          <div className="quantity-select">
            <p>Množství</p>
            <input type="number" defaultValue={1} min="1" />
          </div>

          <Link href="/form" className="order-link">
            <button type="button" disabled={!isInStock}>
              Objednat <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default KladkyChange;
