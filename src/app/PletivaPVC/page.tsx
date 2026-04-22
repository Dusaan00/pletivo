import BuyPletivo from "../Components/BuyPletivo";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpletivaProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "pletivo-pvc",
  title: "Pletivo PVC 25 m | Poplastované pletivo | Pletivo Grygov",
  description:
    "Poplastované pletivo PVC 25 m v zelené a antracitové barvě, výšky od 100 do 200 cm. Český výrobce, skladem a vhodné pro rodinné domy i firmy.",
  keywords: [
    "pletivo pvc",
    "poplastované pletivo",
    "pletivo 25m",
    "zelené pletivo",
    "antracitové pletivo",
    "pletivo Grygov",
  ],
});

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
