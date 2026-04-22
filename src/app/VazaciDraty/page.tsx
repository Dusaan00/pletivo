import BuyVazaci from "../Components/BuyVazaci";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recvazaciProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "vazaci-drat",
  title: "Vázací drát PVC 50 m | Pro montáž pletiva | Pletivo Grygov",
  description:
    "Vázací drát PVC 50 m pro přichycení pletiva k napínacímu drátu a sloupkům. Praktické montážní příslušenství pro dokončení plotu.",
  keywords: [
    "vázací drát pvc",
    "vázací drát 50 m",
    "drát pro montáž pletiva",
    "příslušenství k plotu",
    "vázací drát na plot",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/VazaciDraty"
        familyId="vazaci-drat"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Vázací drát" },
        ]}
      />
      <BuyVazaci />
      <DoporuceneProdukty
        title="K vázacímu drátu ještě můžete potřebovat:"
        products={recvazaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
