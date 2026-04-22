import BuySloupkyZinc from "../Components/BuyZincSloupky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recsloupkyznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  productId: "sloupek-jekl-zinc",
  canonicalPath: "/SloupkyZinkoveJekl",
  title: "Sloupky JEKL zinkové 60x40 | Pro zinkové panely | Pletivo Grygov",
  description:
    "Zinkové sloupky JEKL 60x40 pro panelové oplocení, výšky od 2,0 do 2,6 m. Odolné řešení pro zinkové panely a náročnější použití.",
  keywords: [
    "sloupky jekl zinkové",
    "sloupky 60x40",
    "sloupky pro zinkové panely",
    "zinkové sloupky",
    "panelové oplocení",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/SloupkyZinkoveJekl"
        productId="sloupek-jekl-zinc"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Sloupky JEKL zinkové" },
        ]}
      />
      <BuySloupkyZinc />
      <DoporuceneProdukty
        title="K zinkovým panelovým sloupkům můžete ještě potřebovat:"
        products={recsloupkyznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
