import KladkyZinkove from "../Components/BuyKladkyZinc";
import Pay from "../Components/Pay";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import Sortkarty from "../Components/Sortkarty";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { kladkyznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "napinaci-kladka-zinkova",
  title: "Napínací kladka zinková | Pro zinkové pletivo | Pletivo Grygov",
  description:
    "Zinková napínací kladka pro montáž Bezinal a dalších zinkových plotů. Praktické a odolné příslušenství pro správné dopnutí plotového drátu.",
  keywords: [
    "napínací kladka zinková",
    "kladka pro bezinal",
    "příslušenství pro zinkové pletivo",
    "kladka na plot",
    "montáž bezinal",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/KladkyZinkove"
        familyId="napinaci-kladka-zinkova"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Napínací kladka zinková" },
        ]}
      />
      <KladkyZinkove />
      <DoporuceneProdukty
        title="K napínacím zinkovým kladkám ještě můžete potřebovat:"
        products={kladkyznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
