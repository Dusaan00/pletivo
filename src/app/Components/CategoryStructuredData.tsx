import { getCategoryById } from "../../data/products/model";
import { withMerchantReturnPolicy } from "../../lib/merchantPolicies";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CategoryStructuredDataProps = {
  categoryId?: string;
  canonicalPath: string;
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  products: any[];
};

const siteUrl = "https://pletivogrygov.cz";

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path}`;
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

function getProductColor(product: any) {
  return product.variantOptions?.barva
    ? String(product.variantOptions.barva)
    : undefined;
}

function buildCollectionPageSchema({
  title,
  description,
  canonicalPath,
  products,
  categoryName,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  products: any[];
  categoryName?: string;
}) {
  const url = toAbsoluteUrl(canonicalPath);
  const productsWithOffers = products.filter(
    (product) => typeof product.pricing?.amount === "number",
  );

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: title,
    description,
    url,
    about: categoryName,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: productsWithOffers.length,
      itemListElement: productsWithOffers.map((product, index) => {
        const productUrl = toAbsoluteUrl(product.purchase?.href || product.link);
        const color = getProductColor(product);

        return {
          "@type": "ListItem",
          position: index + 1,
          url: productUrl,
          item: {
            "@type": "Product",
            name: product.name,
            image: toAbsoluteUrl(product.image),
            description: product.description,
            url: productUrl,
            sku: product.sku,
            ...(color ? { color } : {}),
            offers: withMerchantReturnPolicy({
              "@type": "Offer",
              priceCurrency: product.pricing.currency || "CZK",
              price: product.pricing.amount,
              availability:
                product.inventory?.status === "in_stock"
                  ? "https://schema.org/InStock"
                  : "https://schema.org/PreOrder",
              url: productUrl,
            }),
          },
        };
      }),
    },
  };
}

export default function CategoryStructuredData({
  categoryId,
  canonicalPath,
  title,
  description,
  breadcrumbItems,
  products,
}: CategoryStructuredDataProps) {
  const category = categoryId ? getCategoryById(categoryId) : null;
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems, canonicalPath);
  const collectionSchema = buildCollectionPageSchema({
    title,
    description,
    canonicalPath,
    products,
    categoryName: category?.name,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
