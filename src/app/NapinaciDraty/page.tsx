import Napinaci from "../Components/BuyNapinaci";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import { recnapinaciProducts } from "../../data/products/recnapinaci";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Napínací dráty pvc",
  description:
    "Panely 3D/2D skladem: moderní 3D panely v zelené a antracitové barvě dodávající plotu estetický vzhled, odolné zinkové panely 3D/2D, ideální pro zabezpečení objektů.",
  keywords:
    "panely 3D, panely 2D, zinkové panely, plotové panely, 3D panely zelené, panely antracit",
  openGraph: {
    title: "Výroba Pletiva Grygov - Napínací dráty pvc",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/NapinaciDraty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Napínací dráty pvc",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/NapinaciDraty",
  },
  robots: "index, follow",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // 2. MUSÍME POČKAT NA VYHODNOCENÍ PROMISE
  const params = await searchParams;

  // 3. TEĎ UŽ ČTEME Z VYHODNOCENÝCH "params"
  const colorParam = Array.isArray(params?.color)
    ? params?.color[0]
    : params?.color;

  const lengthParam = Array.isArray(params?.length)
    ? params?.length[0]
    : params?.length;

  const color = colorParam === "antracitova" ? "antracitova" : "zelena";

  const length =
    lengthParam === "52" || lengthParam === "78" ? lengthParam : "26";

  return (
    <>
      <Napinaci
        key={`${color}-${length}`}
        initialColor={color}
        initialLength={length as any}
      />

      <DoporuceneProdukty
        title="K napínacímu drátu ještě můžete potřebovat:"
        products={recnapinaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
