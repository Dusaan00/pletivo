import Sloupky from "../Sloupky/Sloupky";
import Pay from "../Components/Pay";
import CategoryStructuredData from "../Components/CategoryStructuredData";
import { buildCategoryMetadata } from "../functions/categoryPageMetadata";
import { sloupkyProducts } from "../../data/products/collections";

const title = "Sloupky a příslušenství k plotům | Pletivo Grygov";
const description =
  "Sloupky, objímky, napínací dráty, vázací dráty, kladky a další příslušenství pro kompletní montáž pletivových i panelových plotů.";

export const metadata = buildCategoryMetadata({
  categoryId: "prislusenstvi",
  canonicalPath: "/SloupkyPrislusenstvi",
  title,
  description,
  keywords: [
    "sloupky a příslušenství",
    "sloupky k plotu",
    "napínací dráty",
    "vázací dráty",
    "objímky a kladky",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <CategoryStructuredData
        categoryId="prislusenstvi"
        canonicalPath="/SloupkyPrislusenstvi"
        title={title}
        description={description}
        products={sloupkyProducts}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství" },
        ]}
      />
      <Sloupky />
      <Pay />
    </>
  );
}
