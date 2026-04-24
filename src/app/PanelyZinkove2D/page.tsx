import BuyPanelZinc from "../Components/BuyPanelZinc";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpanelyznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  productId: "panel-2d-zinc",
  canonicalPath: "/PanelyZinkove2D",
  title: "Panely zinkové 2D | Drát 5/6 mm | Pletivo Grygov",
  description:
    "Zinkové 2D panely s drátem 5/6 mm pro pevné a odolné oplocení průmyslových i technických areálů. Samostatná produktová stránka, přehled výšek a ceny.",
  keywords: [
    "panely zinkové 2D",
    "panel 2D zinkový",
    "2D panel zinek",
    "panelové oplocení 2D",
    "pevné panelové oplocení",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/PanelyZinkove2D"
        productId="panel-2d-zinc"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Panely 3D/2D", href: "/Panely3D2D" },
          { label: "Panely zinkové 2D" },
        ]}
      />
      <BuyPanelZinc
        variant="2D"
        pageHref="/PanelyZinkove2D"
        breadcrumbLabel="Panely zinkové 2D"
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
