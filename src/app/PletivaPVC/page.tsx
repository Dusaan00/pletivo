import BuyPletivo from "../Components/BuyPletivo";
import Pay from "../Components/Pay";

export const metadata = {
  title: "Pletivo Grygov - Pletivo PVC",
  description:
    "Pletiva skladem: poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo Bezinal ze zinku a hliníku, a žeberkové pletivo. Pletivo od českého výrobce.",
  keywords:
    "pletivo Grygov, pletivo, poplastované pletivo, pletivo Bezinal, žeberkové pletivo, drátěné pletivo",
  openGraph: {
    title: "Výroba Pletiva Grygov - Kvalitní Pletivo Skladem",
    description:
      "Kvalitní pletivo od českého výrobce: poplastované pletivo zelené/antracit, pletivo Bezinal a žeberková pletiva. Rychlé dodání.",
    images: [{ url: "/opengraph-image.png" }], // Add a relevant image
    url: "https://pletivogrygov.cz/Pletivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Kvalitní Pletivo Skladem",
    description:
      "Pletivo skladem: poplastovaná pletiva, pletivo Bezinal a žeberková pletiva od českého výrobce.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/Pletivo",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <BuyPletivo />
      <Pay />
    </>
  );
}
