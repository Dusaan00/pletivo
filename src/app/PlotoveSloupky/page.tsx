import PlotoveSloupky from "../Components/PlotoveSloupky";
import CategoryStructuredData from "../Components/CategoryStructuredData";
import { buildCategoryMetadata } from "../functions/categoryPageMetadata";
import { sloupkyplotoveProducts } from "../../data/products/collections";

const title = "Plotové sloupky PVC a vzpěry k pletivu | Pletivo Grygov";
const description =
  "Plotové sloupky PVC Ø48 a vzpěry PVC Ø38 v zelené a antracitové barvě pro stavbu pletivového plotu. Varianty podle výšky, ceny s DPH a objednávka online.";

export const metadata = buildCategoryMetadata({
  categoryId: "sloupky",
  canonicalPath: "/PlotoveSloupky",
  title,
  description,
  keywords: [
    "plotové sloupky",
    "sloupky k pletivu",
    "sloupek PVC 48",
    "vzpěra PVC 38",
    "vzpěry k pletivu",
    "pletivový plot",
    "Pletivo Grygov",
  ],
});

export default function Page() {
  return (
    <>
      <CategoryStructuredData
        categoryId="sloupky"
        canonicalPath="/PlotoveSloupky"
        title={title}
        description={description}
        products={sloupkyplotoveProducts}
        breadcrumbItems={[
          { label: "Domů", href: "/" },
          { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
          { label: "Plotové sloupky a vzpěry" },
        ]}
      />
      <PlotoveSloupky />
    </>
  );
}
