import { Suspense } from "react";
import Napinaci from "../Components/BuyNapinaci";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recnapinaciProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "napinaci-drat-pvc",
  title: "Napínací drát PVC | 26 m, 52 m, 78 m | Pletivo Grygov",
  description:
    "Napínací drát PVC v zelené a antracitové barvě, délky 26 m, 52 m a 78 m. Důležitý prvek pro pevnou montáž pletivového plotu.",
  keywords: [
    "napínací drát pvc",
    "napínací drát zelený",
    "napínací drát antracit",
    "dráty pro pletivo",
    "montáž pletiva",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/NapinaciDraty"
        familyId="napinaci-drat-pvc"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Napínací drát PVC" },
        ]}
      />
      <Suspense fallback={<div style={{ minHeight: "600px" }}>Načítání...</div>}>
        <Napinaci />
      </Suspense>
      <DoporuceneProdukty
        title="K napínacímu drátu ještě můžete potřebovat:"
        products={recnapinaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
