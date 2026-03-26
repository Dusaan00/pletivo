"use client";

import { useState, ReactNode } from "react";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NapinaciChangeProps {
  children: ReactNode;
}

const NapinaciChange = ({ children }: NapinaciChangeProps) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const imgSrc = `${basePath}/sloupky/dratzink.webp`;
  const currentPrice = 255;
  const title = `Napínací drát – Zinkový`;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- Kč</h2>

        <h3 className="stock-status in-stock">Skladem, ihned k odběru</h3>

        {children}

        <div className="type-select">
          <p>Typ drátu:</p>
          <div className="type-options">
            <label className="type-label">
              <input
                type="radio"
                name="type"
                onChange={() => router.push("/NapinaciDraty")}
              />{" "}
              PVC
            </label>
            <label className="type-label active">
              <input type="radio" name="type" checked={true} readOnly /> Zinkové
            </label>
          </div>
        </div>

        <form>
          <div className="quantity-select">
            <p>Množství</p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
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
