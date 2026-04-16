"use client";

import { ReactNode } from "react";
import { basePath } from "./Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

interface PrichytkyChangeProps {
  children: ReactNode;
}

const PrichytkyChange = ({ children }: PrichytkyChangeProps) => {
  const title = "Příchytky + šroubky";
  const currentPrice = 7;
  const isInStock = true;

  const imgSrc = `${basePath}/sloupky/prichytky.webp`;

  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="section-spletivo-details">
        <h1>{title}</h1>
        <h2>{currentPrice},- / ks</h2>

        {children}

        <form>
          <div className="quantity-select">
            <p>Množství (ks)</p>
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

export default PrichytkyChange;
