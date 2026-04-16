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

export default function Page() {
  return (
    <>
      <Napinaci />
      <DoporuceneProdukty
        title="K napínacímu drátu ještě můžete potřebovat:"
        products={recnapinaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
