import BuyBezinal from "../Components/BuyBezinal";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recpletivoznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "pletivo-bezinal",
  title: "Pletivo Bezinal 25 m | Zinkové pletivo | Pletivo Grygov",
  description:
    "Pletivo Bezinal 25 m se zvýšenou odolností pro firmy, průmyslové provozy i náročnější oplocení. Varianty podle výšky a průměru drátu se zachovanými cenami.",
  keywords: [
    "pletivo bezinal",
    "zinkové pletivo",
    "pozinkované pletivo",
    "pletivo 25m",
    "pletivo pro firmy",
    "pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/PletivaBezinal"
        familyId="pletivo-bezinal"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Pletivo", href: "/Pletivo" },
          { label: "Pletivo Bezinal 25m" },
        ]}
      />
      <BuyBezinal />
      <DoporuceneProdukty
        title="K montáži zinkového pletiva dále můžete potřebovat:"
        products={recpletivoznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
