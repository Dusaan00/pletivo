import BuySloupky from "../Components/BuySloupky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recsloupkyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "sloupky-jekl",
  title: "Sloupky JEKL PVC 60x40 | Pro panelové ploty | Pletivo Grygov",
  description:
    "Poplastované sloupky JEKL 60x40 v zelené a antracitové barvě, výšky od 2,0 do 2,6 m. Vhodné pro panelové oplocení a skladem k rychlému odběru.",
  keywords: [
    "sloupky jekl",
    "sloupky pvc 60x40",
    "sloupky pro panely",
    "zelené sloupky",
    "antracitové sloupky",
    "Pletivo Grygov",
  ],
  canonicalPath: "/SloupkyProduct",
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/SloupkyProduct"
        familyId="sloupky-jekl"
        productIds={["sloupek-jekl-zeleny", "sloupek-jekl-antracit"]}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Sloupky JEKL" },
        ]}
      />
      <BuySloupky />
      <DoporuceneProdukty
        title="K pvc sloupkům pro panelové oplocení můžete ještě potřebovat:"
        products={recsloupkyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
