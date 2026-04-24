import PanelyChange from "../functions/PanelyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyPletivo() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Panely 3D/2D", href: "/Panely3D2D" },
              { label: "Panely 3D PVC" },
            ]}
          />
          <div className="section-spletivo-product">
            <PanelyChange>
              <p>
                Tento panel je dostupný v zelené a antracitové barvě. Panely
                jsou šíroké 2.5m, vysoké jsou od 1m do 2m. Tyty panely mají
                průměr drátu 4mm. Při montáži se dají dobře kombinovat s
                podhrabovými deskami. Montáž panelů je snadná, jednoduše se
                zasunou mezi sloupky.
              </p>
              <br />
              <p>
                Produkt můžete jednoduše vložit do košíku a objednávku dokončit
                online. Případně nám můžete zavolat nebo napsat email.
              </p>
            </PanelyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPletivo;
