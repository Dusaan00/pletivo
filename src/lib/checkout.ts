export const SHIPPING_METHODS = {
  delivery_arranged: {
    label: "Doručení na vaši adresu",
    description:
      "Přesný způsob dopravy potvrdíme po kontrole objednávky podle rozměrů a typu zboží.",
  },
  pickup: {
    label: "Osobní odběr - Zdarma",
    description:
      "Odběr zboží připravíme po potvrzení objednávky a domluvě termínu.",
  },
} as const;

export const PAYMENT_METHODS = {
  bank_transfer: {
    label: "Bankovní převod po potvrzení objednávky",
    description: "Platební údaje pošleme po kontrole objednávky.",
  },
  cash_on_pickup: {
    label: "Hotově/kartou při osobním odběru",
    description:
      "Hotovostní úhrada je dostupná při osobním odběru po předchozím potvrzení.",
  },
} as const;

export const DEFAULT_SHIPPING_METHOD = "pickup";
export const DEFAULT_PAYMENT_METHOD = "bank_transfer";
export const DEFAULT_CHECKOUT_MODE = "manual";
export const DEFAULT_PAYMENT_STATUS = "pending";
export const CHECKOUT_FLOW_VERSION = 1;

export function getShippingMethodLabel(method?: string) {
  if (!method || !(method in SHIPPING_METHODS)) {
    return SHIPPING_METHODS[DEFAULT_SHIPPING_METHOD].label;
  }

  return SHIPPING_METHODS[method as keyof typeof SHIPPING_METHODS].label;
}

export function getPaymentMethodLabel(method?: string) {
  if (!method || !(method in PAYMENT_METHODS)) {
    return PAYMENT_METHODS[DEFAULT_PAYMENT_METHOD].label;
  }

  return PAYMENT_METHODS[method as keyof typeof PAYMENT_METHODS].label;
}

export function getGatewaySupport(
  items: Array<{ checkoutMode?: string }> = [],
) {
  if (!items.length) {
    return false;
  }

  return items.every((item) => item.checkoutMode === "gateway-ready");
}

type CheckoutStateInput = {
  items?: Array<{ checkoutMode?: string }>;
  shippingMethod?: string;
  paymentMethod?: string;
  paymentProvider?: string | null;
  paymentStatus?: string;
  mode?: string;
};

export function createCheckoutState({
  items = [],
  shippingMethod = DEFAULT_SHIPPING_METHOD,
  paymentMethod = DEFAULT_PAYMENT_METHOD,
  paymentProvider = null,
  paymentStatus = DEFAULT_PAYMENT_STATUS,
  mode = DEFAULT_CHECKOUT_MODE,
}: CheckoutStateInput = {}) {
  return {
    flowVersion: CHECKOUT_FLOW_VERSION,
    mode,
    shippingMethod,
    paymentMethod,
    paymentProvider,
    paymentStatus,
    supportsGateway: getGatewaySupport(items),
    requiresManualReview: true,
  };
}
