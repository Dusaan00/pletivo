import DeskyPodhrabove from "../Components/BuyDesky";
import Sortkarty from "../Components/Sortkarty";
import Pay from "../Components/Pay";
import ProductStructuredData from "../Components/ProductStructuredData";
import { buildProductMetadata } from "../functions/productPageMetadata";

export const metadata = buildProductMetadata({
  familyId: "podhrabove-desky",
  title: "Podhrabové desky betonové | 2,5 m a 2,9 m | Pletivo Grygov",
  description:
    "Betonové podhrabové desky pro pletivové i panelové ploty v délkách 2,5 m a 2,9 m. Ochrana plotu, čistší vzhled a praktičtější zakončení oplocení.",
  keywords: [
    "podhrabové desky",
    "betonové podhrabové desky",
    "desky k plotu",
    "podhrabové desky 2,5 m",
    "podhrabové desky 2,9 m",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <ProductStructuredData
        canonicalPath="/DeskyPodhrabove"
        familyId="podhrabove-desky"
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Podhrabové desky", href: "/PodhraboveDesky" },
          { label: "Betonové podhrabové desky" },
        ]}
      />
      <DeskyPodhrabove />
      <Sortkarty />
      <Pay />
    </>
  );
}
