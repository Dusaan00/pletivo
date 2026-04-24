import Link from "next/link";
import { ReactNode } from "react";
import { basePath } from "../functions/Env";
import {
  getCategoryById,
  getDefaultFamilyProduct,
  getFamilyById,
  getFamilyProducts,
} from "../../data/products/model";
import { withMerchantReturnPolicy } from "../../lib/merchantPolicies";
import DoporuceneProdukty from "./DoporucenePletivo";
import Sortkarty from "./Sortkarty";
import Pay from "./Pay";

type FaqItem = {
  question: string;
  answer: string;
};

type FamilyProduct = NonNullable<ReturnType<typeof getFamilyProducts>[number]>;

type ProductDetailPageProps = {
  familyId: string;
  title: string;
  lead: string;
  highlights: string[];
  body: string[];
  faqItems?: FaqItem[];
  recommendationTitle: string;
  recommendationProducts: any[];
  configurator: ReactNode;
};

const siteUrl = "https://pletivogrygov.cz";

function formatVariantLabel(product: FamilyProduct) {
  const variantEntries = Object.entries(product.variantOptions || {});

  if (variantEntries.length === 0) {
    return "";
  }

  return variantEntries
    .map(([, value]) => String(value))
    .filter(Boolean)
    .join(" • ");
}

function getProductColor(product: FamilyProduct) {
  return product.variantOptions?.barva
    ? String(product.variantOptions.barva)
    : undefined;
}

function buildProductSchema({
  title,
  lead,
  pageUrl,
  defaultProduct,
  familyProducts,
  categoryName,
}: {
  title: string;
  lead: string;
  pageUrl: string;
  defaultProduct: FamilyProduct;
  familyProducts: FamilyProduct[];
  categoryName: string;
}) {
  const pricedVariants = familyProducts.filter(
    (product): product is FamilyProduct & { pricing: { amount: number } } =>
      typeof product.pricing?.amount === "number",
  );

  const lowPrice =
    pricedVariants.length > 0
      ? Math.min(...pricedVariants.map((product) => product.pricing.amount))
      : undefined;

  const highPrice =
    pricedVariants.length > 0
      ? Math.max(...pricedVariants.map((product) => product.pricing.amount))
      : undefined;
  const variesBy = defaultProduct.variantAxes?.map((axis: string) => {
    if (axis === "barva") {
      return "https://schema.org/color";
    }

    return axis;
  });

  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: title,
    description: lead,
    url: pageUrl,
    category: categoryName,
    brand: {
      "@type": "Brand",
      name: "Pletivo Grygov",
    },
    image: [`${siteUrl}${defaultProduct.image}`],
    productGroupID: defaultProduct.familyId,
    variesBy,
    offers:
      lowPrice !== undefined && highPrice !== undefined
        ? {
            ...withMerchantReturnPolicy({
              "@type": "AggregateOffer",
              priceCurrency: "CZK",
              lowPrice,
              highPrice,
              offerCount: pricedVariants.length,
              availability: "https://schema.org/InStock",
              url: pageUrl,
            })
          }
        : undefined,
    hasVariant: familyProducts.map((product) => {
      const color = getProductColor(product);

      return {
        "@type": "Product",
        name: product.name,
        sku: product.sku,
        description: product.description,
        image: [`${siteUrl}${product.image}`],
        url: `${siteUrl}${product.purchase?.href || product.link}`,
        ...(color ? { color } : {}),
        additionalProperty: Object.entries(product.variantOptions || {}).map(
          ([name, value]) => ({
            "@type": "PropertyValue",
            name,
            value,
          }),
        ),
        offers:
          product.pricing?.type === "fixed"
            ? withMerchantReturnPolicy({
                "@type": "Offer",
                priceCurrency: "CZK",
                price: product.pricing.amount,
                availability:
                  product.inventory?.status === "in_stock"
                    ? "https://schema.org/InStock"
                    : "https://schema.org/PreOrder",
                url: `${siteUrl}${product.purchase?.href || product.link}`,
              })
            : withMerchantReturnPolicy({
                "@type": "Offer",
                availability: "https://schema.org/PreOrder",
                url: `${siteUrl}${product.purchase?.href || product.link}`,
              }),
      };
    }),
  };
}

function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function buildFaqSchema(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function ProductDetailPage({
  familyId,
  title,
  lead,
  highlights,
  body,
  faqItems = [],
  recommendationTitle,
  recommendationProducts,
  configurator,
}: ProductDetailPageProps) {
  const family = getFamilyById(familyId);
  const defaultProduct = getDefaultFamilyProduct(familyId);

  if (!family || !defaultProduct) {
    throw new Error(`Unknown product family: ${familyId}`);
  }

  const category = getCategoryById(defaultProduct.categoryKey);
  const familyProducts = getFamilyProducts(familyId) as FamilyProduct[];
  const startingPrice = familyProducts
    .map((product: FamilyProduct) => product.pricing?.amount)
    .filter((amount): amount is number => typeof amount === "number");
  const lowestPrice =
    startingPrice.length > 0 ? Math.min(...startingPrice) : defaultProduct.pricing?.amount;
  const pageUrl = `${siteUrl}${family.route}`;
  const breadcrumbItems = [
    { name: "Domů", url: `${siteUrl}/` },
    {
      name: category?.name || "Kategorie",
      url: `${siteUrl}${category?.route || "/"}`,
    },
    { name: title, url: pageUrl },
  ];

  const productSchema = buildProductSchema({
    title,
    lead,
    pageUrl,
    defaultProduct,
    familyProducts,
    categoryName: category?.name || "",
  });

  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
  const faqSchema = faqItems.length > 0 ? buildFaqSchema(faqItems) : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="product-page">
        <div className="product-page__container">
          <nav className="product-page__breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbItems.map((item, index) => (
              <span key={item.url}>
                {index < breadcrumbItems.length - 1 ? (
                  <>
                    <Link href={item.url.replace(siteUrl, "")}>{item.name}</Link>
                    <span className="product-page__breadcrumb-sep">/</span>
                  </>
                ) : (
                  <span>{item.name}</span>
                )}
              </span>
            ))}
          </nav>

          <header className="product-page__hero">
            <div className="product-page__hero-copy">
              <p className="product-page__eyebrow">
                {category?.name || "Produkt"} od českého výrobce
              </p>
              <h1>{title}</h1>
              <p className="product-page__lead">{lead}</p>

              <div className="product-page__badges">
                {(family.badges || []).map((badge: string) => (
                  <span key={badge} className="product-page__badge">
                    {badge}
                  </span>
                ))}
                <span className="product-page__badge">
                  {defaultProduct.inventory?.label}
                </span>
              </div>

              <ul className="product-page__highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="product-page__hero-card">
              <div className="product-page__hero-visual">
                <img
                  src={`${basePath}${defaultProduct.image}`}
                  alt={defaultProduct.name}
                />
              </div>

              <div className="product-page__hero-meta">
                <div>
                  <span className="product-page__meta-label">Cena od</span>
                  <strong>
                    {typeof lowestPrice === "number"
                      ? `${lowestPrice},-`
                      : defaultProduct.pricing?.display}
                  </strong>
                </div>
                <div>
                  <span className="product-page__meta-label">Nákupní režim</span>
                  <strong>
                    {defaultProduct.purchase?.mode === "buy"
                      ? "Objednávka"
                      : "Nezávazná poptávka"}
                  </strong>
                </div>
                <div>
                  <span className="product-page__meta-label">Kategorie</span>
                  <strong>{category?.name}</strong>
                </div>
                <div>
                  <span className="product-page__meta-label">Varianty</span>
                  <strong>{familyProducts.length}</strong>
                </div>
              </div>
            </div>
          </header>

          <section className="product-page__main">
            <div className="product-page__configurator">{configurator}</div>

            <aside className="product-page__sidebar">
              <div className="product-page__info-card">
                <h2>Proč zvolit právě tento produkt</h2>
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="product-page__info-card">
                <h2>Jak ti pomůžeme s objednávkou</h2>
                <ul className="product-page__list">
                  <li>Poradíme s výběrem vhodné varianty podle typu plotu.</li>
                  <li>Připravíme kompletní materiál pro montáž i doplňky.</li>
                  <li>Objednávku nebo poptávku s tebou rychle doladíme telefonicky.</li>
                </ul>
              </div>
            </aside>
          </section>

          <section className="product-page__variants">
            <div className="product-page__section-heading">
              <p className="product-page__eyebrow">Varianty a možnosti</p>
              <h2>Dostupné varianty této produktové řady</h2>
            </div>

            <div className="product-page__variant-grid">
              {familyProducts.map((product) => (
                <article key={product.id} className="product-page__variant-card">
                  <div className="product-page__variant-head">
                    <h3>{product.name}</h3>
                    <strong>{product.pricing?.display}</strong>
                  </div>

                  {formatVariantLabel(product) && (
                    <p className="product-page__variant-label">
                      {formatVariantLabel(product)}
                    </p>
                  )}

                  <p>{product.description}</p>
                </article>
              ))}
            </div>
          </section>

          {faqItems.length > 0 && (
            <section className="product-page__faq">
              <div className="product-page__section-heading">
                <p className="product-page__eyebrow">FAQ</p>
                <h2>Časté otázky k produktu</h2>
              </div>

              <div className="product-page__faq-list">
                {faqItems.map((item) => (
                  <article key={item.question} className="product-page__faq-item">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <DoporuceneProdukty
        title={recommendationTitle}
        products={recommendationProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
