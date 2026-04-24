import BuyPanelZinc from "../Components/BuyPanelZinc";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpanelyznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  productId: "panel-3d-zinc",
  canonicalPath: "/PanelyZinkove3D",
  title: "Panely zinkové 3D | Drát 4 mm | Pletivo Grygov",
  description:
    "Zinkové 3D panely s drátem 4 mm pro odolné oplocení firem, skladů i technických objektů. Přehled výšek, cena od konkrétní varianty a rychlá dostupnost.",
  keywords: [
    "panely zinkové 3D",
    "panel 3D zinkový",
    "3D panel zinek",
    "panelové oplocení 3D",
    "průmyslové oplocení",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/PanelyZinkove3D"
        productId="panel-3d-zinc"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Panely 3D/2D", href: "/Panely3D2D" },
          { label: "Panely zinkové 3D" },
        ]}
      />
      <BuyPanelZinc
        variant="3D"
        pageHref="/PanelyZinkove3D"
        breadcrumbLabel="Panely zinkové 3D"
      />
      <DoporuceneProdukty
        title="K montáži plotu ze zinkových panelů dále můžete potřebovat:"
        products={recpanelyznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
