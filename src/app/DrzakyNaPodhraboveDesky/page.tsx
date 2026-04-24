import BuyDrzaky from "../Components/BuyDrzaky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recdrzakyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "drzaky-desek",
  title: "Držáky na podhrabové desky | Příslušenství k plotu | Pletivo Grygov",
  description:
    "Držáky na podhrabové desky pro jednoduché a pevné usazení betonových desek mezi sloupky. Praktické příslušenství pro panelové i pletivové oplocení.",
  keywords: [
    "držáky na podhrabové desky",
    "držáky k podhrabovým deskám",
    "příslušenství k podhrabovým deskám",
    "držáky plotových desek",
    "plotové příslušenství",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/DrzakyNaPodhraboveDesky"
        familyId="drzaky-desek"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Podhrabové desky", href: "/PodhraboveDesky" },
          { label: "Držáky na podhrabové desky" },
        ]}
      />
      <BuyDrzaky />
      <DoporuceneProdukty
        title="K držákům na podhrabové desky můžete dále potřebovat:"
        products={recdrzakyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
