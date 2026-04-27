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
          <PlotoveSloupkyChange initialProductId={initialProductId}>
            <p>
              Plotové sloupky PVC Ø48 a vzpěry PVC Ø38 se používají při stavbě
              pletivového plotu. Zvolená varianta se přizpůsobí podle typu
              produktu, barvy a výšky, aby bylo možné objednat přesně potřebný
              materiál.
            </p>
            <br />
            <p>
              Produkt můžete jednoduše vložit do košíku a objednávku dokončit
              online. Případně nám můžete zavolat nebo napsat email.
            </p>
          </PlotoveSloupkyChange>
        </div>
      </div>
    </section>
  );
}

export default BuyPlotoveSloupky;
