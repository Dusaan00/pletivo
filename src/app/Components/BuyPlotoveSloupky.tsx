import "../Sass/_pletiva.scss";
import PlotoveSloupkyChange from "../functions/PlotoveSloupkyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

interface BuyPlotoveSloupkyProps {
  initialProductId: string;
}

function BuyPlotoveSloupky({ initialProductId }: BuyPlotoveSloupkyProps) {
  return (
    <section className="section-spletivo">
      <div className="section-spletivo-background"></div>
      <div className="section-spletivo-container">
        <ShopBreadcrumbs
          items={[
            { label: "Domů", href: "/" },
            {
              label: "Sloupky a příslušenství",
              href: "/SloupkyPrislusenstvi",
            },
            { label: "Plotové sloupky a vzpěry", href: "/PlotoveSloupky" },
            { label: "Detail produktu" },
          ]}
        />
        <div className="section-spletivo-product">
          <PlotoveSloupkyChange initialProductId={initialProductId} />
        </div>
      </div>
    </section>
  );
}

export default BuyPlotoveSloupky;
