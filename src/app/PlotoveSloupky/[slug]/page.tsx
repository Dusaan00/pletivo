import { notFound } from "next/navigation";
import BuyPlotoveSloupky from "../../Components/BuyPlotoveSloupky";
import DoporuceneProdukty from "../../Components/DoporucenePletivo";
import Pay from "../../Components/Pay";
import ProductStructuredData from "../../Components/ProductStructuredData";
import Sortkarty from "../../Components/Sortkarty";
import { buildProductMetadata } from "../../functions/productPageMetadata";
import {
  getFamilyProducts,
  getProductBySlug,
} from "../../../data/products/model";
import { recnapinaciProducts } from "../../../data/products/collections";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getPlotoveSloupkyProducts() {
  return [
    ...getFamilyProducts("sloupky-kulate"),
    ...getFamilyProducts("vzpery"),
  ];
}

function getPlotoveSloupkyProduct(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) {
    return null;
  }

  return getPlotoveSloupkyProducts().some(
    (candidate) => candidate.id === product.id,
  )
    ? product
    : null;
}

export function generateStaticParams() {
  return getPlotoveSloupkyProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getPlotoveSloupkyProduct(slug);

  if (!product) {
    return {};
  }

  return buildProductMetadata({
    productId: product.id,
    canonicalPath: product.link,
    title: `${product.name} | Pletivo Grygov`,
    description: `${product.description} Cena ${product.price} s DPH. Plotové sloupky a vzpěry pro pletivové oplocení od Pletivo Grygov.`,
    keywords: [
      product.name,
      "plotové sloupky PVC",
      "vzpěry k pletivu",
      "sloupek 48 mm",
      "vzpěra 38 mm",
      "pletivový plot",
      "Pletivo Grygov",
    ],
    image: product.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = getPlotoveSloupkyProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductStructuredData
        canonicalPath={product.link}
        productId={product.id}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Plotové sloupky a vzpěry", href: "/PlotoveSloupky" },
          { label: product.name },
        ]}
      />
      <BuyPlotoveSloupky initialProductId={product.id} />
      <DoporuceneProdukty
        title="K plotovým sloupkům a vzpěrám dále můžete potřebovat:"
        products={recnapinaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
