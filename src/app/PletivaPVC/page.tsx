import BuyPletivo from "../Components/BuyPletivo";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import Doporucene from "../Components/DoporucenePletivo";
import { recpletivaProducts } from "../../data/products/recpletiva";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Pletivo PVC",
  description:
    "Pletiva skladem: poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo Bezinal ze zinku a hliníku, a žeberkové pletivo. Pletivo od Českého výrobce.",
  keywords:
    "pletivo Grygov, pletivo, poplastované pletivo, pletivo Bezinal, žeberkové pletivo, drátěné pletivo",
  openGraph: {
    title: "Výroba Pletiva Grygov - Kvalitní Pletivo Skladem",
    description:
      "Kvalitní pletivo skladem od českého výrobce: poplastované pletivo zelené/antracit, pletivo Bezinal a žeberkové pletivo.",
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
      <DoporuceneProdukty
        title="K montáži pleteného pletiva PVC dále můžete potřebovat:"
        products={recpletivaProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
