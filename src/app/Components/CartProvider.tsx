"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItemOption = {
  name: string;
  value: string;
};

export type CartItemDraft = {
  productId: string;
  name: string;
  image: string;
  href: string;
  unitPrice: number;
  unitLabel: string;
  quantity?: number;
  options?: CartItemOption[];
  checkoutMode?: "manual" | "gateway-ready";
};

export type CartItem = CartItemDraft & {
  lineId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItemDraft) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "pg_cart_v1";

const CartContext = createContext<CartContextValue | null>(null);

function normalizeQuantity(value?: number) {
  if (!value || Number.isNaN(value)) {
    return 1;
  }

  return Math.max(1, Math.round(value));
}

function createLineId(item: CartItemDraft) {
  const optionKey = (item.options || [])
    .map((option) => `${option.name}:${option.value}`)
    .join("|");

  return `${item.productId}__${optionKey || "default"}`;
}

export function formatCartPrice(value: number) {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    } catch (error) {
      console.error("Cart restore error:", error);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (item: CartItemDraft) => {
      const quantity = normalizeQuantity(item.quantity);
      const lineId = createLineId(item);

      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (currentItem) => currentItem.lineId === lineId,
        );

        if (existingItem) {
          return currentItems.map((currentItem) =>
            currentItem.lineId === lineId
              ? {
                  ...currentItem,
                  quantity: currentItem.quantity + quantity,
                }
              : currentItem,
          );
        }

        return [
          ...currentItems,
          {
            ...item,
            quantity,
            lineId,
            checkoutMode: item.checkoutMode || "manual",
          },
        ];
      });
    };

    const updateQuantity = (lineId: string, quantity: number) => {
      const normalizedQuantity = normalizeQuantity(quantity);

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: normalizedQuantity }
            : item,
        ),
      );
    };

    const removeItem = (lineId: string) => {
      setItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId),
      );
    };

    const clearCart = () => {
      setItems([]);
    };

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
