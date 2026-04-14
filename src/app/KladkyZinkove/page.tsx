import KladkyZinkove from "../Components/BuyKladkyZinc";
import Pay from "../Components/Pay";

export const metadata = {
  title: "Pletivo Grygov - Kladky Zinkové",
  description:
    "Panely 3D/2D skladem: moderní 3D panely v zelené a antracitové barvě dodávající plotu estetický vzhled, odolné zinkové panely 3D/2D, ideální pro zabezpečení objektů.",
  keywords:
    "panely 3D, panely 2D, zinkové panely, plotové panely, 3D panely zelené, panely antracit",
  openGraph: {
    title: "Pletivo Grygov - Kladky Zinkové",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/KladkyZinkove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Kladky Zinkové",
    description:
      "Nabízíme 3D/2D panely v zelené, antracitové a zinkové variantě, které tvoří moderní oplocení a zároveň skvěle plní účel zabezpečení pozemku.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/KladkyZinkove",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <KladkyZinkove />
      <Pay />
    </>
  );
}
