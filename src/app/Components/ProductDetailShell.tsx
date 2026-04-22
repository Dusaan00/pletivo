"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

interface ProductDetailShellProps {
  title: string;
  titleAs?: "h1" | "h2" | "h3";
  priceLabel: string;
  imageSrc: string;
  imageAlt?: string;
  stockLabel?: string;
  stockClassName?: string;
  children?: ReactNode;
  selectors?: ReactNode;
  quantity?: number;
  onQuantityChange?: (value: number) => void;
  quantityLabel?: string;
  orderHref?: string;
  orderLabel?: string;
  orderDisabled?: boolean;
  orderButtonType?: "button" | "submit";
}

interface ProductOptionChoice {
  checked: boolean;
  label: ReactNode;
  value?: string;
  onChange: () => void;
}

interface ProductRadioGroupProps {
  label: string;
  name: string;
  options: ProductOptionChoice[];
  className?: string;
}

interface ProductSelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  className?: string;
}

interface ProductColorSwatchesProps {
  label: string;
  name: string;
  options: Array<{
    id: string;
    checked: boolean;
    onChange: () => void;
    swatchClassName: string;
  }>;
}

export function ProductDetailShell({
  title,
  titleAs: TitleTag = "h1",
  priceLabel,
  imageSrc,
  imageAlt,
  stockLabel,
  stockClassName = "stock-status in-stock",
  children,
  selectors,
  quantity = 1,
  onQuantityChange,
  quantityLabel = "Množství",
  orderHref = "/form",
  orderLabel = "Objednat",
  orderDisabled = false,
  orderButtonType = "button",
}: ProductDetailShellProps) {
  return (
    <>
      <div className="section-spletivo-gal">
        <img src={imageSrc} alt={imageAlt || title} />
      </div>

      <div className="section-spletivo-details">
        <TitleTag>{title}</TitleTag>
        <h2>{priceLabel}</h2>
        {stockLabel && <h3 className={stockClassName}>{stockLabel}</h3>}

        {children}

        {selectors}

        <form>
          <div className="quantity-select">
            <p>{quantityLabel}</p>
            <input
              type="number"
              value={onQuantityChange ? quantity : undefined}
              defaultValue={onQuantityChange ? undefined : quantity}
              onChange={
                onQuantityChange
                  ? (event) => onQuantityChange(Number(event.target.value))
                  : undefined
              }
              min="1"
            />
          </div>

          <Link href={orderHref} className="order-link">
            <button type={orderButtonType} disabled={orderDisabled}>
              {orderLabel} <RiShoppingCart2Line />
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export function ProductRadioGroup({
  label,
  name,
  options,
  className = "diameter-select",
}: ProductRadioGroupProps) {
  return (
    <div className={className}>
      <p>{label}</p>
      <div className="diameter-options">
        {options.map((option, index) => (
          <label key={`${name}-${option.value || index}`}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.checked}
              onChange={option.onChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function ProductSelectField({
  id,
  label,
  value,
  onChange,
  options,
  className = "height-select",
}: ProductSelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function ProductColorSwatches({
  label,
  name,
  options,
}: ProductColorSwatchesProps) {
  return (
    <div className="color-select">
      <p>{label}</p>
      {options.map((option) => (
        <label key={option.id} htmlFor={option.id}>
          <input
            type="radio"
            name={name}
            id={option.id}
            checked={option.checked}
            onChange={option.onChange}
          />
          <span className={option.swatchClassName}></span>
        </label>
      ))}
    </div>
  );
}
