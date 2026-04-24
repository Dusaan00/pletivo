export const priceValidUntil = "2026-12-31";

export function withMerchantOfferMetadata<T extends Record<string, unknown>>(
  offer: T | undefined,
) {
  if (!offer) {
    return undefined;
  }

  return {
    ...offer,
    priceValidUntil,
  };
}
