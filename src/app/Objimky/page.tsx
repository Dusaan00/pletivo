import Objimky from "../Components/BuyObjimky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recobjimkyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "objimky-panelove",
  title: "Objímky pro panely 3D | Zelené a antracit | Pletivo Grygov",
  description:
    "Objímky pro montáž panelového oplocení 3D v zelené a antracitové barvě. Nezbytné příslušenství pro správné uchycení panelů ke sloupkům.",
  keywords: [
    "objímky pro panely",
    "objímky 3D panely",
    "objímky zelené",
    "objímky antracit",
    "příslušenství pro panely",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/Objimky"
        familyId="objimky-panelove"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Objímky" },
        ]}
      />
      <Objimky />
      <DoporuceneProdukty
        title="K objímkám můžete ještě potřebovat:"
        products={recobjimkyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
