import BuyPanely from "../Components/BuyPanely";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpanelyProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "panely-pvc-3d",
  title: "Panely 3D PVC | Panelové oplocení | Pletivo Grygov",
  description:
    "3D panely PVC v zelené a antracitové barvě, šířka 2500 mm a výšky pro běžné i firemní oplocení. Zachované ceny podle výšky panelu v moderním detailu produktu.",
  keywords: [
    "3D panely",
    "panelové oplocení",
    "panely pvc",
    "antracitové panely",
    "zelené panely",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <BuyPanely />
      <DoporuceneProdukty
        title="K montáži plotu z panelů dále můžete potřebovat:"
        products={recpanelyProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
