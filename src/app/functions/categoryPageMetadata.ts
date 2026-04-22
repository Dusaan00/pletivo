import type { Metadata } from "next";
import { getCategoryById } from "../../data/products/model";

const siteUrl = "https://pletivogrygov.cz";

type BuildCategoryMetadataOptions = {
  categoryId?: string;
  canonicalPath: string;
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

export function buildCategoryMetadata({
  categoryId,
  canonicalPath,
  title,
  description,
  keywords,
  image = "/opengraph-image.png",
}: BuildCategoryMetadataOptions): Metadata {
  const category = categoryId ? getCategoryById(categoryId) : null;
  const absolutePageUrl = toAbsoluteUrl(canonicalPath);
  const absoluteImageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords: keywords.join(", "),
    category: category?.name,
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
