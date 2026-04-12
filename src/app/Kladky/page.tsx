import Kladky from "../Components/BuyKladky";
import Pay from "../Components/Pay";

export const metadata = {
  title: "Pletivo Grygov - Kladky PVC",
  description: "Objímky pro montáže plotů z panelů.",
  keywords:
    "panely 3D, panely 2D, zinkové panely, plotové panely, 3D panely zelené, panely antracit",
  openGraph: {
    title: "Pletivo Grygov - Objímky Na Panely",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/Kladky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Kladky PVC",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/Kladky",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <Kladky />
      <Pay />
    </>
  );
}
