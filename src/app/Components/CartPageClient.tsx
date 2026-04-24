"use client";

import Link from "next/link";
import { useCart, formatCartPrice } from "./CartProvider";

function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-page__container">
          <div className="cart-page__empty">
            <p className="cart-page__eyebrow">Košík</p>
            <h1>Košík je zatím prázdný</h1>
            <p>Vyberte si zboží v eshopu a přidejte jej do košíku.</p>
            <div className="cart-page__actions">
              <Link href="/Prehled" className="cart-page__secondary-btn">
                Projít sortiment
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="cart-page__container">
        <div className="cart-page__header">
          <div>
            <p className="cart-page__eyebrow">Košík</p>
            <h1>Kontrola vybraného zboží</h1>
            <p className="cart-page__lead">
              V košíku vidíte vybrané zboží, množství a celkovou cenu. Dopravu,
              výběr platby a konečné potvrzení objednávky dokončíte v dalším
              kroku.
            </p>
          </div>
        </div>

        <div className="cart-page__layout">
          <div className="cart-page__items">
            {items.map((item) => (
              <article key={item.lineId} className="cart-card">
                <div className="cart-card__image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-card__content">
                  <div className="cart-card__top">
                    <div>
                      <h2>
                        <Link href={item.href}>{item.name}</Link>
                      </h2>
                      {item.options?.length ? (
                        <ul className="cart-card__options">
                          {item.options.map((option) => (
                            <li key={`${item.lineId}-${option.name}`}>
                              <strong>{option.name}:</strong> {option.value}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <button
                      type="button"
                      className="cart-card__remove"
                      onClick={() => removeItem(item.lineId)}
                    >
                      Odstranit
                    </button>
                  </div>

                  <div className="cart-card__bottom">
                    <label className="cart-card__qty">
                      <span>Množství</span>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(
                            item.lineId,
                            Number(event.target.value),
                          )
                        }
                      />
                    </label>

                    <div className="cart-card__price">
                      <span>Za kus</span>
                      <strong>{formatCartPrice(item.unitPrice)}</strong>
                    </div>

                    <div className="cart-card__price">
                      <span>Mezisoučet</span>
                      <strong>
                        {formatCartPrice(item.unitPrice * item.quantity)}
                      </strong>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Shrnutí objednávky</h2>

            <div className="cart-summary__row">
              <span>Počet položek</span>
              <strong>
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </strong>
            </div>

            <div className="cart-summary__row">
              <span>Mezisoučet</span>
              <strong>{formatCartPrice(subtotal)}</strong>
            </div>

            <p className="cart-summary__note">
              Dopravu a způsob úhrady si zvolíte v pokladně.
            </p>

            <div className="cart-summary__actions">
              <Link href="/Pokladna" className="cart-page__primary-btn">
                Pokračovat k pokladně
              </Link>
              <Link href="/Prehled" className="cart-page__secondary-btn">
                Přidat další zboží
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CartPageClient;
