import Napinaci from "../Components/BuyZinkove";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import DoporuceneProdukty from "../Components/DoporucenePletivo";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";
import { recnapinaciznProducts } from "../../data/products/collections";

export const metadata = buildProductMetadata({
  familyId: "napinaci-drat-zinkovy",
  title: "Napínací drát zinkový | Pro Bezinal a zinkové ploty | Pletivo Grygov",
  description:
    "Zinkový napínací drát pro montáž pletiva Bezinal a dalších zinkových plotových systémů. Odolné příslušenství pro pevné a stabilní oplocení.",
  keywords: [
    "napínací drát zinkový",
    "drát pro bezinal",
    "zinkový drát pro plot",
    "příslušenství k pletivu",
    "montáž plotu",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/NapinaciDratyZinkove"
        familyId="napinaci-drat-zinkovy"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Napínací drát zinkový" },
        ]}
      />
      <Napinaci />
      <DoporuceneProdukty
        title="K zinkovému napínacímu drátu ještě můžete potřebovat:"
        products={recnapinaciznProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
