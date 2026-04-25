import { PAYMENT_METHODS, SHIPPING_METHODS } from "./checkout";

const ORDER_LIMITS = {
  fullName: { min: 3, max: 80 },
  email: { max: 254 },
  phone: { minDigits: 9, maxDigits: 15, max: 24 },
  company: { max: 120 },
  ico: { digits: 8 },
  street: { min: 3, max: 120 },
  city: { min: 2, max: 80 },
  postalCode: { max: 6 },
  note: { max: 1500 },
  cartItems: { max: 50 },
  quantity: { min: 1, max: 999 },
  unitPrice: { min: 0, max: 1_000_000 },
  optionText: { max: 80 },
  productText: { max: 160 },
} as const;

export const ORDER_TERMS_VERSION = "24.04.2026";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;
const CITY_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u;
const POSTAL_CODE_PATTERN = /^\d{3}\s?\d{2}$/;
const ICO_PATTERN = /^\d{8}$/;
const PHONE_ALLOWED_PATTERN = /^[+()0-9\s.-]+$/;

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: string[] };

type ValidatedCartItemOption = {
  name: string;
  value: string;
};

type ValidatedCartItem = {
  lineId?: string;
  productId?: string;
  name: string;
  image?: string;
  href?: string;
  unitPrice: number;
  unitLabel?: string;
  quantity: number;
  options: ValidatedCartItemOption[];
  checkoutMode?: "manual" | "gateway-ready";
};

type ValidatedOrderPayload = {
  customer: {
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
    deliveryAddress: {
      street: string;
      city: string;
      postalCode: string;
    } | null;
    paymentMethod: keyof typeof PAYMENT_METHODS;
    note: string;
  };
  cart: {
    items: ValidatedCartItem[];
    subtotal: number;
    currency: "CZK";
  };
  checkout: {
    shippingMethod: keyof typeof SHIPPING_METHODS;
    paymentMethod: keyof typeof PAYMENT_METHODS;
    paymentProvider: string | null;
    paymentStatus: string;
    mode: string;
    termsAccepted: true;
    termsVersion: string;
  };
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

export function normalizeText(value: unknown) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

export function normalizePostalCode(value: unknown) {
  const normalized = normalizeText(value).replace(/\s+/g, "");

  if (normalized.length === 5) {
    return `${normalized.slice(0, 3)} ${normalized.slice(3)}`;
  }

  return normalizeText(value);
}

export function normalizePhone(value: unknown) {
  return normalizeText(value);
}

const getDigits = (value: string) => value.replace(/\D/g, "");

const getOptionalString = (value: unknown, maxLength: number) =>
  normalizeText(value).slice(0, maxLength);

const addTextError = (
  errors: string[],
  value: string,
  label: string,
  minLength: number,
  maxLength: number,
  pattern?: RegExp,
) => {
  if (value.length < minLength) {
    errors.push(`${label} je povinné pole.`);
    return;
  }

  if (value.length > maxLength) {
    errors.push(`${label} je příliš dlouhé.`);
    return;
  }

  if (pattern && !pattern.test(value)) {
    errors.push(`${label} nemá platný formát.`);
  }
};

const validateEmail = (errors: string[], value: string) => {
  if (!value) {
    errors.push("Email je povinné pole.");
    return;
  }

  if (value.length > ORDER_LIMITS.email.max || !EMAIL_PATTERN.test(value)) {
    errors.push("Zadejte platnou emailovou adresu.");
  }
};

const validatePhone = (errors: string[], value: string) => {
  const digits = getDigits(value);

  if (!value) {
    errors.push("Telefon je povinné pole.");
    return;
  }

  if (
    value.length > ORDER_LIMITS.phone.max ||
    digits.length < ORDER_LIMITS.phone.minDigits ||
    digits.length > ORDER_LIMITS.phone.maxDigits ||
    !PHONE_ALLOWED_PATTERN.test(value)
  ) {
    errors.push("Zadejte platné telefonní číslo.");
  }
};

const validatePostalCode = (errors: string[], value: string, label = "PSČ") => {
  if (!value) {
    errors.push(`${label} je povinné pole.`);
    return;
  }

  if (!POSTAL_CODE_PATTERN.test(value)) {
    errors.push(`${label} musí být ve formátu 12345 nebo 123 45.`);
  }
};

const validateOptionalIco = (errors: string[], value: string) => {
  if (!value) {
    return;
  }

  if (!ICO_PATTERN.test(value.replace(/\s+/g, ""))) {
    errors.push("IČO musí obsahovat přesně 8 číslic.");
  }
};

const validateEnumValue = <T extends Record<string, unknown>>(
  value: unknown,
  allowedValues: T,
  fallback: keyof T,
) => {
  const normalized = normalizeText(value);

  return normalized in allowedValues ? (normalized as keyof T) : fallback;
};

const validateCartItems = (
  errors: string[],
  items: unknown,
): ValidatedCartItem[] => {
  if (!Array.isArray(items) || items.length === 0) {
    errors.push("Košík je prázdný.");
    return [];
  }

  if (items.length > ORDER_LIMITS.cartItems.max) {
    errors.push("Objednávka obsahuje příliš mnoho položek.");
    return [];
  }

  return items
    .map((item, index) => {
      if (!isRecord(item)) {
        errors.push(`Položka objednávky ${index + 1} nemá platný formát.`);
        return null;
      }

      const name = normalizeText(item.name);
      const unitPrice = Number(item.unitPrice);
      const quantity = Number(item.quantity);

      if (!name || name.length > ORDER_LIMITS.productText.max) {
        errors.push(`Položka objednávky ${index + 1} nemá platný název.`);
      }

      if (
        !Number.isFinite(unitPrice) ||
        unitPrice < ORDER_LIMITS.unitPrice.min ||
        unitPrice > ORDER_LIMITS.unitPrice.max
      ) {
        errors.push(`Položka objednávky ${index + 1} nemá platnou cenu.`);
      }

      if (
        !Number.isInteger(quantity) ||
        quantity < ORDER_LIMITS.quantity.min ||
        quantity > ORDER_LIMITS.quantity.max
      ) {
        errors.push(`Položka objednávky ${index + 1} nemá platné množství.`);
      }

      const options = Array.isArray(item.options)
        ? item.options
            .filter(isRecord)
            .slice(0, 20)
            .map((option) => ({
              name: normalizeText(option.name).slice(
                0,
                ORDER_LIMITS.optionText.max,
              ),
              value: normalizeText(option.value).slice(
                0,
                ORDER_LIMITS.optionText.max,
              ),
            }))
            .filter((option) => option.name && option.value)
        : [];

      return {
        lineId: getOptionalString(item.lineId, 160) || undefined,
        productId: getOptionalString(item.productId, 100) || undefined,
        name,
        image: getOptionalString(item.image, 300) || undefined,
        href: getOptionalString(item.href, 300) || undefined,
        unitPrice,
        unitLabel: getOptionalString(item.unitLabel, 40) || undefined,
        quantity,
        options,
        checkoutMode:
          item.checkoutMode === "gateway-ready" ? "gateway-ready" : "manual",
      };
    })
    .filter(Boolean) as ValidatedCartItem[];
};

export function validateOrderPayload(
  payload: unknown,
): ValidationResult<ValidatedOrderPayload> {
  const errors: string[] = [];

  if (!isRecord(payload)) {
    return { success: false, errors: ["Objednávka nemá platný formát."] };
  }

  const customerInput = isRecord(payload.customer) ? payload.customer : {};
  const cartInput = isRecord(payload.cart) ? payload.cart : {};
  const checkoutInput = isRecord(payload.checkout) ? payload.checkout : {};

  const shippingMethod = validateEnumValue(
    checkoutInput.shippingMethod || customerInput.shippingMethod,
    SHIPPING_METHODS,
    "pickup",
  );
  const paymentMethod = validateEnumValue(
    checkoutInput.paymentMethod || customerInput.paymentMethod,
    PAYMENT_METHODS,
    "bank_transfer",
  );
  const termsAccepted = checkoutInput.termsAccepted === true;
  const deliveryAddressMode: "same_as_billing" | "different_address" =
    customerInput.deliveryAddressMode === "different_address"
      ? "different_address"
      : "same_as_billing";
  const deliveryAddressInput = isRecord(customerInput.deliveryAddress)
    ? customerInput.deliveryAddress
    : {};

  const customer = {
    fullName: normalizeText(customerInput.fullName),
    email: normalizeText(customerInput.email).toLowerCase(),
    phone: normalizePhone(customerInput.phone),
    company: getOptionalString(customerInput.company, ORDER_LIMITS.company.max),
    ico: normalizeText(customerInput.ico).replace(/\s+/g, ""),
    street: normalizeText(customerInput.street),
    city: normalizeText(customerInput.city),
    postalCode: normalizePostalCode(customerInput.postalCode),
    shippingMethod,
    deliveryAddressMode,
    deliveryAddress: null as ValidatedOrderPayload["customer"]["deliveryAddress"],
    paymentMethod,
    note: getOptionalString(customerInput.note, ORDER_LIMITS.note.max),
  };

  addTextError(
    errors,
    customer.fullName,
    "Jméno a příjmení",
    ORDER_LIMITS.fullName.min,
    ORDER_LIMITS.fullName.max,
    NAME_PATTERN,
  );
  validateEmail(errors, customer.email);
  validatePhone(errors, customer.phone);
  validateOptionalIco(errors, customer.ico);
  addTextError(
    errors,
    customer.street,
    "Ulice a číslo popisné",
    ORDER_LIMITS.street.min,
    ORDER_LIMITS.street.max,
  );
  addTextError(
    errors,
    customer.city,
    "Město",
    ORDER_LIMITS.city.min,
    ORDER_LIMITS.city.max,
    CITY_PATTERN,
  );
  validatePostalCode(errors, customer.postalCode);

  if (!termsAccepted) {
    errors.push("Pro odeslání objednávky je nutné souhlasit s obchodními podmínkami.");
  }

  if (customerInput.note && normalizeText(customerInput.note).length > ORDER_LIMITS.note.max) {
    errors.push("Poznámka k objednávce je příliš dlouhá.");
  }

  if (shippingMethod === "delivery_arranged" && deliveryAddressMode === "different_address") {
    const deliveryAddress = {
      street: normalizeText(deliveryAddressInput.street),
      city: normalizeText(deliveryAddressInput.city),
      postalCode: normalizePostalCode(deliveryAddressInput.postalCode),
    };

    addTextError(
      errors,
      deliveryAddress.street,
      "Doručovací ulice a číslo popisné",
      ORDER_LIMITS.street.min,
      ORDER_LIMITS.street.max,
    );
    addTextError(
      errors,
      deliveryAddress.city,
      "Doručovací město",
      ORDER_LIMITS.city.min,
      ORDER_LIMITS.city.max,
      CITY_PATTERN,
    );
    validatePostalCode(errors, deliveryAddress.postalCode, "Doručovací PSČ");
    customer.deliveryAddress = deliveryAddress;
  }

  const items = validateCartItems(errors, cartInput.items);
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      customer,
      cart: {
        items,
        subtotal,
        currency: "CZK",
      },
      checkout: {
        shippingMethod,
        paymentMethod,
        paymentProvider:
          typeof checkoutInput.paymentProvider === "string"
            ? checkoutInput.paymentProvider
            : null,
        paymentStatus: normalizeText(checkoutInput.paymentStatus) || "pending",
        mode: normalizeText(checkoutInput.mode) || "manual",
        termsAccepted: true,
        termsVersion:
          normalizeText(checkoutInput.termsVersion) || ORDER_TERMS_VERSION,
      },
    },
  };
}

export const checkoutValidationAttributes = {
  fullName: {
    minLength: ORDER_LIMITS.fullName.min,
    maxLength: ORDER_LIMITS.fullName.max,
  },
  email: {
    maxLength: ORDER_LIMITS.email.max,
  },
  phone: {
    maxLength: ORDER_LIMITS.phone.max,
    pattern: "[+()0-9\\s.-]{9,24}",
  },
  company: {
    maxLength: ORDER_LIMITS.company.max,
  },
  ico: {
    maxLength: 8,
    pattern: "[0-9]{8}",
  },
  street: {
    minLength: ORDER_LIMITS.street.min,
    maxLength: ORDER_LIMITS.street.max,
  },
  city: {
    minLength: ORDER_LIMITS.city.min,
    maxLength: ORDER_LIMITS.city.max,
  },
  postalCode: {
    maxLength: ORDER_LIMITS.postalCode.max,
    pattern: "[0-9]{3}\\s?[0-9]{2}",
  },
  note: {
    maxLength: ORDER_LIMITS.note.max,
  },
} as const;
