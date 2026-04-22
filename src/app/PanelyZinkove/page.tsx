import BuyPanelZinc from "../Components/BuyPanelZinc";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpanelyznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "panely-zinkove",
  title: "Panely zinkové 3D a 2D | Odolné panelové oplocení | Pletivo Grygov",
  description:
    "Zinkové panely 3D a 2D pro odolné oplocení firem, skladů i technických objektů. Přehledné varianty, ceny od konkrétního typu a český dodavatel.",
  keywords: [
    "panely zinkové",
    "panely 3D zinkové",
    "panely 2D zinkové",
    "panelové oplocení",
    "průmyslové oplocení",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/PanelyZinkove"
        familyId="panely-zinkove"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Panely 3D/2D", href: "/Panely3D2D" },
          { label: "Panely zinkové" },
        ]}
      />
      <BuyPanelZinc />
      <DoporuceneProdukty
        title="K montáži plotu ze zinkových panelů dále můžete potřebovat:"
        products={recpanelyznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
