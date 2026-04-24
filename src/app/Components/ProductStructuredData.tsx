import {
  getCategoryById,
  getDefaultFamilyProduct,
  getFamilyById,
  getFamilyProducts,
  getProductById,
} from "../../data/products/model";
import { withMerchantReturnPolicy } from "../../lib/merchantPolicies";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ProductStructuredDataProps = {
  canonicalPath: string;
  breadcrumbItems: BreadcrumbItem[];
  familyId?: string;
  productId?: string;
  productIds?: string[];
};

const siteUrl = "https://pletivogrygov.cz";
const organization = {
  "@type": "Organization",
  name: "Pletivo Grygov",
  url: siteUrl,
};

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path}`;
}

function mapAxisToSchema(axis: string) {
  if (axis === "barva") {
    return "https://schema.org/color";
  }

  return axis;
}

function buildOffer(product: any, url: string) {
  if (typeof product.pricing?.amount !== "number") {
    return undefined;
  }

  return withMerchantReturnPolicy({
    "@type": "Offer",
    priceCurrency: product.pricing.currency || "CZK",
    price: product.pricing.amount,
    availability:
      product.inventory?.status === "in_stock"
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
    itemCondition: "https://schema.org/NewCondition",
    seller: organization,
    url,
  });
}

function getProductColor(product: any) {
  return product.variantOptions?.barva
    ? String(product.variantOptions.barva)
    : undefined;
}

function buildProductNode(product: any) {
  const productUrl = toAbsoluteUrl(product.purchase?.href || product.link);
  const color = getProductColor(product);

  return {
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    sku: product.sku,
    description: product.description,
    image: [toAbsoluteUrl(product.image)],
    url: productUrl,
    brand: organization,
    ...(color ? { color } : {}),
    additionalProperty: Object.entries(product.variantOptions || {}).map(
      ([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value,
      }),
    ),
    offers: buildOffer(product, productUrl),
  };
}

function buildProductSchema({
  canonicalPath,
  family,
  category,
  products,
  primaryProduct,
}: {
  canonicalPath: string;
  family: any;
  category: any;
  products: any[];
  primaryProduct: any;
}) {
  const pageUrl = toAbsoluteUrl(canonicalPath);
  const fixedProducts = products.filter(
    (product) => typeof product.pricing?.amount === "number",
  );

  if (products.length > 1) {
    const lowPrice =
      fixedProducts.length > 0
        ? Math.min(...fixedProducts.map((product) => product.pricing.amount))
        : undefined;
    const highPrice =
      fixedProducts.length > 0
        ? Math.max(...fixedProducts.map((product) => product.pricing.amount))
        : undefined;

    return {
      "@context": "https://schema.org",
      "@type": "ProductGroup",
      "@id": `${pageUrl}#product-group`,
      name: family?.name || primaryProduct.name,
      description: primaryProduct.description,
      image: [toAbsoluteUrl(primaryProduct.image)],
      url: pageUrl,
      brand: organization,
      category: category?.name,
      productGroupID: family?.id,
      variesBy: (family?.variantAxes || []).map(mapAxisToSchema),
      offers:
        lowPrice !== undefined && highPrice !== undefined
          ? {
              ...withMerchantReturnPolicy({
                "@type": "AggregateOffer",
                lowPrice,
                highPrice,
                offerCount: fixedProducts.length,
                priceCurrency: primaryProduct.pricing?.currency || "CZK",
                availability: "https://schema.org/InStock",
                url: pageUrl,
              })
            }
          : undefined,
      hasVariant: products.map((product) => buildProductNode(product)),
    };
  }

  return {
    "@context": "https://schema.org",
    ...buildProductNode(primaryProduct),
    "@id": `${pageUrl}#product`,
    url: pageUrl,
    category: category?.name,
  };
}

function buildBreadcrumbSchema(
  breadcrumbItems: BreadcrumbItem[],
  canonicalPath: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href || canonicalPath),
    })),
  };
}

export default function ProductStructuredData({
  canonicalPath,
  breadcrumbItems,
  familyId,
  productId,
  productIds,
}: ProductStructuredDataProps) {
  const explicitProducts =
    productIds?.map((id) => getProductById(id)).filter(Boolean) || [];
  const family = familyId ? getFamilyById(familyId) : null;
  const familyProducts =
    productIds && explicitProducts.length > 0
      ? explicitProducts
      : familyId
        ? getFamilyProducts(familyId)
        : [];
  const singleProduct = productId ? getProductById(productId) : null;
  const products = familyProducts.length > 0 ? familyProducts : singleProduct ? [singleProduct] : [];
  const primaryProduct =
    products[0] ||
    (familyId ? getDefaultFamilyProduct(familyId) : null) ||
    singleProduct;

  if (!primaryProduct || products.length === 0) {
    return null;
  }

  const category = getCategoryById(primaryProduct.categoryKey);
  const productSchema = buildProductSchema({
    canonicalPath,
    family,
    category,
    products,
    primaryProduct,
  });
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems, canonicalPath);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
