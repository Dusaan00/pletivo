"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { formatCartPrice, useCart } from "./CartProvider";
import {
  createCheckoutState,
  DEFAULT_PAYMENT_METHOD,
  DEFAULT_SHIPPING_METHOD,
  PAYMENT_METHODS,
  SHIPPING_METHODS,
} from "../../lib/checkout";
import {
  checkoutValidationAttributes,
  validateOrderPayload,
} from "../../lib/orderValidation";

type CheckoutFormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  ico: string;
  street: string;
  city: string;
  postalCode: string;
  shippingMethod: keyof typeof SHIPPING_METHODS;
  deliveryAddressMode: "same_as_billing" | "different_address";
  deliveryStreet: string;
  deliveryCity: string;
  deliveryPostalCode: string;
  paymentMethod: keyof typeof PAYMENT_METHODS;
  note: string;
};

const initialState: CheckoutFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  ico: "",
  street: "",
  city: "",
  postalCode: "",
  shippingMethod: DEFAULT_SHIPPING_METHOD,
  deliveryAddressMode: "same_as_billing",
  deliveryStreet: "",
  deliveryCity: "",
  deliveryPostalCode: "",
  paymentMethod: DEFAULT_PAYMENT_METHOD,
  note: "",
};

function CheckoutPageClient() {
  const { items, subtotal, clearCart } = useCart();
  const [formState, setFormState] = useState<CheckoutFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successNumber, setSuccessNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isDeliverySelected = formState.shippingMethod === "delivery_arranged";
  const usesDifferentDeliveryAddress =
    isDeliverySelected && formState.deliveryAddressMode === "different_address";

  if (items.length === 0 && !successNumber) {
    return (
      <section className="checkout-page">
        <div className="checkout-page__container">
          <div className="checkout-page__empty">
            <p className="cart-page__eyebrow">Pokladna</p>
            <h1>Nejdřív je potřeba naplnit košík</h1>
            <p>
              Do pokladny můžete pokračovat až ve chvíli, kdy budete mít v
              košíku alespoň jednu položku.
            </p>
            <div className="cart-page__actions">
              <Link href="/Kosik" className="cart-page__secondary-btn">
                Zpět do košíku
              </Link>
              <Link href="/Prehled" className="cart-page__primary-btn">
                Projít sortiment
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const orderPayload = {
        customer: {
          ...formState,
          deliveryAddress: usesDifferentDeliveryAddress
            ? {
                street: formState.deliveryStreet,
                city: formState.deliveryCity,
                postalCode: formState.deliveryPostalCode,
              }
            : null,
        },
        cart: {
          items,
          subtotal,
          currency: "CZK",
        },
        checkout: createCheckoutState({
          items,
          shippingMethod: formState.shippingMethod,
          paymentMethod: formState.paymentMethod,
          paymentProvider: null,
        }),
      };
      const validation = validateOrderPayload(orderPayload);

      if (!validation.success) {
        throw new Error(validation.errors[0] || "Zkontrolujte prosím údaje v objednávce.");
      }

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Objednávku se nepodařilo odeslat.");
      }

      clearCart();
      setSuccessNumber(data.orderNumber);
      setFormState(initialState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Objednávku se nepodařilo odeslat.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successNumber) {
    return (
      <section className="checkout-page">
        <div className="checkout-page__container">
          <div className="checkout-page__success">
            <p className="cart-page__eyebrow">Objednávka odeslána</p>
            <h1>Děkujeme, objednávku jsme přijali</h1>
            <p>
              Objednávku je přijata pod číslem <strong>{successNumber}</strong>.
              Potvrzení o objednávce zároveň bylo odesláno na váš email, brzy
              vás kontaktujeme s dalšími informacemi k platbě a dopravě.
            </p>
            <div className="cart-page__actions">
              <Link href="/" className="cart-page__secondary-btn">
                Zpět na úvod
              </Link>
              <Link href="/Prehled" className="cart-page__primary-btn">
                Pokračovat v nákupu
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-page__container">
        <div className="checkout-page__header">
          <div>
            <p className="cart-page__eyebrow">Pokladna</p>
            <h1>Dokončení objednávky</h1>
            <p className="cart-page__lead">
              Vyplňte kontaktní údaje a odešlete objednávku. Následně vás
              kontaktujeme s instrukcemi a informacemi k platbě a dopravě.
              Momentálně je možno platit hotově a platební kartou při převzetí
              zboží nebo bankovním převodem. Na napojení online platební brány
              pro možnost zaplatit kartou online momentálně pracujeme.
            </p>
          </div>
        </div>

        <div className="checkout-page__layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="checkout-form__grid">
              <label>
                <span>Jméno a příjmení *</span>
                <input
                  required
                  name="fullName"
                  autoComplete="name"
                  {...checkoutValidationAttributes.fullName}
                  value={formState.fullName}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      fullName: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>Email *</span>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  {...checkoutValidationAttributes.email}
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>Telefon *</span>
                <input
                  type="tel"
                  required
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  {...checkoutValidationAttributes.phone}
                  value={formState.phone}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      phone: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>Firma</span>
                <input
                  name="company"
                  autoComplete="organization"
                  {...checkoutValidationAttributes.company}
                  value={formState.company}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      company: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>IČO</span>
                <input
                  name="ico"
                  inputMode="numeric"
                  {...checkoutValidationAttributes.ico}
                  value={formState.ico}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      ico: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>Ulice a číslo popisné *</span>
                <input
                  required
                  name="street"
                  autoComplete="address-line1"
                  {...checkoutValidationAttributes.street}
                  value={formState.street}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      street: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>Město *</span>
                <input
                  required
                  name="city"
                  autoComplete="address-level2"
                  {...checkoutValidationAttributes.city}
                  value={formState.city}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      city: event.target.value,
                    }))
                  }
                />
              </label>

              <label>
                <span>PSČ *</span>
                <input
                  required
                  name="postalCode"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  {...checkoutValidationAttributes.postalCode}
                  value={formState.postalCode}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      postalCode: event.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div className="checkout-form__section">
              <h2>Doprava</h2>
              <label className="checkout-form__radio">
                <input
                  type="radio"
                  name="shippingMethod"
                  checked={formState.shippingMethod === "pickup"}
                  onChange={() =>
                    setFormState((current) => ({
                      ...current,
                      shippingMethod: "pickup",
                      deliveryAddressMode: "same_as_billing",
                    }))
                  }
                />
                <span>{SHIPPING_METHODS.pickup.label}</span>
              </label>
              {formState.shippingMethod === "pickup" ? (
                <div className="checkout-form__pickup-address">
                  <p className="checkout-form__subsection-title">
                    Adresa osobního odběru
                  </p>
                  <p>Za Tratí 255</p>
                  <p>Grygov, 783 73</p>
                </div>
              ) : null}
              <label className="checkout-form__radio">
                <input
                  type="radio"
                  name="shippingMethod"
                  checked={formState.shippingMethod === "delivery_arranged"}
                  onChange={() =>
                    setFormState((current) => ({
                      ...current,
                      shippingMethod: "delivery_arranged",
                    }))
                  }
                />
                <span>{SHIPPING_METHODS.delivery_arranged.label}</span>
              </label>
              {isDeliverySelected ? (
                <div className="checkout-form__subsection">
                  <p className="checkout-form__subsection-title">
                    Doručovací adresa
                  </p>
                  <label className="checkout-form__radio">
                    <input
                      type="radio"
                      name="deliveryAddressMode"
                      checked={
                        formState.deliveryAddressMode === "same_as_billing"
                      }
                      onChange={() =>
                        setFormState((current) => ({
                          ...current,
                          deliveryAddressMode: "same_as_billing",
                        }))
                      }
                    />
                    <span>Doručovací adresa je stejná jako fakturační</span>
                  </label>
                  <label className="checkout-form__radio">
                    <input
                      type="radio"
                      name="deliveryAddressMode"
                      checked={
                        formState.deliveryAddressMode === "different_address"
                      }
                      onChange={() =>
                        setFormState((current) => ({
                          ...current,
                          deliveryAddressMode: "different_address",
                        }))
                      }
                    />
                    <span>Zadat jinou adresu doručení</span>
                  </label>

                  {usesDifferentDeliveryAddress ? (
                    <div className="checkout-form__address-grid">
                      <label>
                        <span>Ulice a číslo popisné *</span>
                        <input
                          required={usesDifferentDeliveryAddress}
                          name="deliveryStreet"
                          autoComplete="shipping address-line1"
                          {...checkoutValidationAttributes.street}
                          value={formState.deliveryStreet}
                          onChange={(event) =>
                            setFormState((current) => ({
                              ...current,
                              deliveryStreet: event.target.value,
                            }))
                          }
                        />
                      </label>

                      <label>
                        <span>Město *</span>
                        <input
                          required={usesDifferentDeliveryAddress}
                          name="deliveryCity"
                          autoComplete="shipping address-level2"
                          {...checkoutValidationAttributes.city}
                          value={formState.deliveryCity}
                          onChange={(event) =>
                            setFormState((current) => ({
                              ...current,
                              deliveryCity: event.target.value,
                            }))
                          }
                        />
                      </label>

                      <label>
                        <span>PSČ *</span>
                        <input
                          required={usesDifferentDeliveryAddress}
                          name="deliveryPostalCode"
                          autoComplete="shipping postal-code"
                          inputMode="numeric"
                          {...checkoutValidationAttributes.postalCode}
                          value={formState.deliveryPostalCode}
                          onChange={(event) =>
                            setFormState((current) => ({
                              ...current,
                              deliveryPostalCode: event.target.value,
                            }))
                          }
                        />
                      </label>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="checkout-form__section">
              <h2>Platba</h2>
              <label className="checkout-form__radio">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={formState.paymentMethod === "bank_transfer"}
                  onChange={() =>
                    setFormState((current) => ({
                      ...current,
                      paymentMethod: "bank_transfer",
                    }))
                  }
                />
                <span>{PAYMENT_METHODS.bank_transfer.label}</span>
              </label>
              <label className="checkout-form__radio">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={formState.paymentMethod === "cash_on_pickup"}
                  onChange={() =>
                    setFormState((current) => ({
                      ...current,
                      paymentMethod: "cash_on_pickup",
                    }))
                  }
                />
                <span>{PAYMENT_METHODS.cash_on_pickup.label}</span>
              </label>
            </div>

            <label className="checkout-form__note">
              <span>Poznámka k objednávce</span>
              <textarea
                name="note"
                rows={5}
                {...checkoutValidationAttributes.note}
                value={formState.note}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    note: event.target.value,
                  }))
                }
              />
            </label>

            {errorMessage && (
              <p className="checkout-form__error">{errorMessage}</p>
            )}

            <div className="checkout-form__actions">
              <Link href="/Kosik" className="cart-page__secondary-btn">
                Zpět do košíku
              </Link>
              <button
                type="submit"
                className="cart-page__primary-btn cart-page__primary-btn--submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Odesílám objednávku..." : "Odeslat objednávku"}
              </button>
            </div>
          </form>

          <div className="checkout-sidebar">
            <aside className="checkout-summary">
              <h2>Shrnutí</h2>
              <div className="checkout-summary__items">
                {items.map((item) => (
                  <div key={item.lineId} className="checkout-summary__item">
                    <div>
                      <strong>{item.name}</strong>
                      <p>
                        {item.options
                          ?.map((option) => option.value)
                          .join(" • ")}
                      </p>
                    </div>
                    <span>
                      {item.quantity}× {formatCartPrice(item.unitPrice)}
                    </span>
                  </div>
                ))}

                {isDeliverySelected ? (
                  <div className="checkout-summary__item">
                    <div>
                      <strong>Doprava</strong>
                      <p>
                        Cena bude upřesněna po zpracování objednávky, cca
                        20kč/km
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="cart-summary__row">
                <span>Mezisoučet</span>
                <strong>{formatCartPrice(subtotal)}</strong>
              </div>

              <p className="cart-summary__note">
                Po odeslání objednávky obdržíte instrukce k úhradě. Pokud jste
                zvolili dopravu s doručením na vaši adresu, přesnou cenu za
                dopravu vám pošleme po odeslání objednávky.
              </p>
            </aside>

            {isDeliverySelected ? (
              <aside className="checkout-shipping-info">
                <h2>Cena za dopravu</h2>
                <p>
                  Po obdržení a zpracování objednávky vám pošleme přesnou cenu
                  za dopravu. Cena se pohybuje kolem cca 20kč/km od obce Grygov.
                  Při odebrání většího objemu materiálu (hlavně u větších
                  firemních zakázek) je doprava zdarma.
                </p>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPageClient;
