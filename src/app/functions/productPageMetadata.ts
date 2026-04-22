import type { Metadata } from "next";
import {
  getDefaultFamilyProduct,
  getFamilyById,
  getProductById,
} from "../../data/products/model";

const siteUrl = "https://pletivogrygov.cz";

type BuildProductMetadataOptions = {
  familyId?: string;
  productId?: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalPath?: string;
  image?: string;
};

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path}`;
}

export function buildProductMetadata({
  familyId,
  productId,
  title,
  description,
  keywords,
  canonicalPath,
  image,
}: BuildProductMetadataOptions): Metadata {
  const family = familyId ? getFamilyById(familyId) : null;
  const defaultProduct = familyId ? getDefaultFamilyProduct(familyId) : null;
  const singleProduct = productId ? getProductById(productId) : null;
  const resolvedCanonicalPath =
    canonicalPath || family?.route || singleProduct?.purchase?.href || "/";
  const imagePath =
    image || defaultProduct?.image || singleProduct?.image || "/opengraph-image.png";
  const absoluteImageUrl = toAbsoluteUrl(imagePath);
  const absolutePageUrl = toAbsoluteUrl(resolvedCanonicalPath);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    category: family?.category || singleProduct?.categoryKey,
    alternates: {
      canonical: absolutePageUrl,
    },
    openGraph: {
      title,
      description,
      url: absolutePageUrl,
      type: "website",
      siteName: "Pletivo Grygov",
      images: [{ url: absoluteImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
    robots: "index, follow",
  };
}
