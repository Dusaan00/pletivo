import Panely from "../Panely/Panely";
import Pay from "../Components/Pay";
import CategoryStructuredData from "../Components/CategoryStructuredData";
import { buildCategoryMetadata } from "../functions/categoryPageMetadata";
import { panelyProducts } from "../../data/products/collections";

const title = "Panely 3D/2D | Panelové oplocení | Pletivo Grygov";
const description =
  "Panely 3D a 2D v PVC i zinkové variantě pro moderní oplocení domů, firem i průmyslových objektů. Přehledné produktové varianty a příslušenství.";

export const metadata = buildCategoryMetadata({
  categoryId: "panely",
  canonicalPath: "/Panely3D2D",
  title,
  description,
  keywords: [
    "panely 3D",
    "panely 2D",
    "panelové oplocení",
    "zinkové panely",
    "plotové panely",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <CategoryStructuredData
        categoryId="panely"
        canonicalPath="/Panely3D2D"
        title={title}
        description={description}
        products={panelyProducts}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Panely 3D/2D" },
        ]}
      />
      <Panely />
      <Pay />
    </>
  );
}
