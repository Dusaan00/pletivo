import BuyBezinal from "../Components/BuyBezinal";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import { recpletivoznProducts } from "../../data/products/recpletivozn";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Pletivo Bezinal",
  description:
    "Pletiva skladem: poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo Bezinal ze zinku a hliníku, a žeberkové pletivo. Pletivo od Českého výrobce.",
  keywords:
    "pletivo Grygov, pletivo, pletivo zinkové, pletivo bezinal, pletivo pozinkované, stříbrné pletivo",
  openGraph: {
    title: "Pletiv Grygov - Kvalitní Pletivo Bezinal Skladem",
    description:
      "Kvalitní pletivo skladem od českého výrobce: poplastované pletivo zelené/antracit, pletivo Bezinal a žeberkové pletivo.",
    images: [{ url: "/opengraph-image.png" }], // Add a relevant image
    url: "https://pletivogrygov.cz/PletivaBezinal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Kvalitní Pletivo Bezinal Skladem",
    description:
      "Pletivo skladem: poplastovaná pletiva, pletivo Bezinal a žeberková pletiva od českého výrobce.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/PletivaBezinal",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <BuyBezinal />
      <DoporuceneProdukty
        title="K montáži zinkového pletiva dále můžete potřebovat:"
        products={recpletivoznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
