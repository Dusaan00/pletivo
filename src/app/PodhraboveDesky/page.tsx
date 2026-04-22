import Desky from "../Desky/Desky";
import CategoryStructuredData from "../Components/CategoryStructuredData";
import { buildCategoryMetadata } from "../functions/categoryPageMetadata";
import { deskyProducts } from "../../data/products/collections";

const title = "Podhrabové desky | Betonové desky a držáky | Pletivo Grygov";
const description =
  "Podhrabové desky a související doplňky pro pletivové i panelové oplocení. Betonové desky, držáky a přehled řešení pro čistší a odolnější plot.";

export const metadata = buildCategoryMetadata({
  categoryId: "desky",
  canonicalPath: "/PodhraboveDesky",
  title,
  description,
  keywords: [
    "podhrabové desky",
    "betonové podhrabové desky",
    "držáky podhrabových desek",
    "desky k plotu",
    "oplocení s deskami",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <CategoryStructuredData
        categoryId="desky"
        canonicalPath="/PodhraboveDesky"
        title={title}
        description={description}
        products={deskyProducts}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Podhrabové desky" },
        ]}
      />
      <Desky />
    </>
  );
}
