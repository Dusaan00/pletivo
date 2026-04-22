import Kladky from "../Components/BuyKladky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { kladkyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "napinaci-kladka-pvc",
  title: "Napínací kladka PVC | Zelená a antracit | Pletivo Grygov",
  description:
    "Napínací kladky PVC v zelené a antracitové barvě pro montáž pletivového plotu. Přehledné varianty a důležité příslušenství pro správné napnutí drátu.",
  keywords: [
    "napínací kladka pvc",
    "kladka na pletivo",
    "zelená kladka",
    "antracitová kladka",
    "příslušenství pro plot",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/Kladky"
        familyId="napinaci-kladka-pvc"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Napínací kladka PVC" },
        ]}
      />
      <Kladky />
      <DoporuceneProdukty
        title="K napínacím kladkám ještě můžete potřebovat:"
        products={kladkyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
