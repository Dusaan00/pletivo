import type { Metadata } from "next";
import { getDefaultFamilyProduct, getFamilyById } from "../../data/products/model";

const siteUrl = "https://pletivogrygov.cz";

type BuildProductMetadataOptions = {
  familyId: string;
  title: string;
  description: string;
  keywords: string[];
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
  title,
  description,
  keywords,
  image,
}: BuildProductMetadataOptions): Metadata {
  const family = getFamilyById(familyId);
  const defaultProduct = getDefaultFamilyProduct(familyId);
  const canonicalPath = family?.route || "/";
  const imagePath = image || defaultProduct?.image || "/opengraph-image.png";
  const absoluteImageUrl = toAbsoluteUrl(imagePath);
  const absolutePageUrl = toAbsoluteUrl(canonicalPath);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    alternates: {
      canonical: absolutePageUrl,
    },
    openGraph: {
      title,
      description,
      url: absolutePageUrl,
      type: "website",
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
