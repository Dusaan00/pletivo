export const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "CZ",
  returnPolicyCountry: "CZ",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  itemCondition: "https://schema.org/NewCondition",
  returnMethod: [
    "https://schema.org/ReturnByMail",
    "https://schema.org/ReturnInStore",
  ],
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
  refundType: "https://schema.org/FullRefund",
  returnLabelSource: "https://schema.org/ReturnLabelCustomerResponsibility",
} as const;

export const priceValidUntil = "2026-12-31";

export function withMerchantReturnPolicy<T extends Record<string, unknown>>(
  offer: T | undefined,
) {
  if (!offer) {
    return undefined;
  }

  return {
    ...offer,
    priceValidUntil,
    hasMerchantReturnPolicy: merchantReturnPolicy,
  };
}
