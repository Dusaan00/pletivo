import Prichytky from "../Components/BuyPrichytky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import { prichytkyProducts } from "../../data/products/collections";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Příchytky, šroubky",
  description: "Objímky pro montáže plotů z panelů.",
  keywords:
    "panely 3D, panely 2D, zinkové panely, plotové panely, 3D panely zelené, panely antracit",
  openGraph: {
    title: "Pletivo Grygov - Příchytky, šroubky",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/PrichytkySroubky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Příchytky, šroubky",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/PrichytkySroubky",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <Prichytky />
      <DoporuceneProdukty
        title="Dále můžete potřebovat:"
        products={prichytkyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
