import Prichytky from "../Components/BuyPrichytky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { prichytkyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "prichytky-sroubky",
  title: "Příchytky a šroubky | Montážní příslušenství | Pletivo Grygov",
  description:
    "Příchytky a šroubky pro montáž plotových systémů. Praktické příslušenství pro dokončení oplocení a rychlé uchycení jednotlivých prvků.",
  keywords: [
    "příchytky a šroubky",
    "příchytky pro plot",
    "montážní příslušenství",
    "šroubky pro panely",
    "plotové doplňky",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/PrichytkySroubky"
        familyId="prichytky-sroubky"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Příchytky a šroubky" },
        ]}
      />
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
