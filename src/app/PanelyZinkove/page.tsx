import BuyPanelZinc from "../Components/BuyPanelZinc";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import { recpanelyznProducts } from "../../data/products/recpanelyzn";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Panely Zinkové",
  description:
    "Pletiva skladem: poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo Bezinal ze zinku a hliníku, a žeberkové pletivo. Pletivo od českého výrobce.",
  keywords:
    "pletivo Grygov, pletivo, poplastované pletivo, pletivo Bezinal, žeberkové pletivo, drátěné pletivo",
  openGraph: {
    title: "Pletivo Grygov - Kvalitní Pletivo Skladem",
    description:
      "Kvalitní pletivo od českého výrobce: poplastované pletivo zelené/antracit, pletivo Bezinal a žeberková pletiva. Rychlé dodání.",
    images: [{ url: "/opengraph-image.png" }], // Add a relevant image
    url: "https://pletivogrygov.cz/PanelyZinkove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Kvalitní Pletivo Skladem",
    description:
      "Pletivo skladem: poplastovaná pletiva, pletivo Bezinal a žeberková pletiva od českého výrobce.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/PanelyZinkove",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <BuyPanelZinc />
      <DoporuceneProdukty
        title="K montáži plotu ze zinkových panelů dále můžete potřebovat:"
        products={recpanelyznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
