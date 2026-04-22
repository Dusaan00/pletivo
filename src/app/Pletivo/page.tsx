import Pletiva from "../Pletiva/Pletiva";
import Pay from "../Components/Pay";
import CategoryStructuredData from "../Components/CategoryStructuredData";
import { buildCategoryMetadata } from "../functions/categoryPageMetadata";
import { pletivaProducts } from "../../data/products/collections";

const title = "Pletiva | PVC, Bezinal a další oplocení | Pletivo Grygov";
const description =
  "Pletiva PVC, Bezinal a další řešení oplocení od českého výrobce. Přehled produktů pro rodinné domy, zahrady i firemní objekty.";

export const metadata = buildCategoryMetadata({
  categoryId: "pletiva",
  canonicalPath: "/Pletivo",
  title,
  description,
  keywords: [
    "pletivo",
    "pletivo pvc",
    "pletivo bezinal",
    "poplastované pletivo",
    "drátěné oplocení",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <CategoryStructuredData
        categoryId="pletiva"
        canonicalPath="/Pletivo"
        title={title}
        description={description}
        products={pletivaProducts}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Pletivo" },
        ]}
      />
      <Pletiva />
      <Pay />
    </>
  );
}
