import Objimky from "../Components/BuyObjimky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";

export const metadata = {
  title: "Pletivo Grygov - Objímky Na Panely",
  description: "Objímky pro montáže plotů z panelů.",
  keywords:
    "panely 3D, panely 2D, zinkové panely, plotové panely, 3D panely zelené, panely antracit",
  openGraph: {
    title: "Pletivo Grygov - Objímky Na Panely",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/BuyObjimky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Objímky",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/BuyObjimky",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <Objimky />
      <Sortkarty />
      <Pay />
    </>
  );
}
