"use client";

import Link from "next/link";
import { basePath } from "../functions/Env";
import { useCart } from "./CartProvider";

function CartHeaderLink() {
  const { itemCount } = useCart();

  return (
    <Link href="/Kosik" className="cart-entry" aria-label="Přejít do košíku">
      <div className="cart-entry__icon-wrap">
        <svg className="cart-entry__icon">
          <use href={`${basePath}/sprite2.svg#icon-cart`}></use>
        </svg>
        {itemCount > 0 && <span className="cart-entry__badge">{itemCount}</span>}
      </div>
      <p className="cart-entry__label">Košík</p>
    </Link>
  );
}

export default CartHeaderLink;
