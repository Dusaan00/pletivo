import "../Sass/_buyvazaci.scss";
import VazaciChange from "../functions/VazaciChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyVazaci() {
  return (
    <>
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
              { label: "Vázací drát" },
            ]}
          />
          <div className="section-spletivo-product">
            <VazaciChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Vázací drát se používá k přivázání k napínacímu drátu ve spodní,
                střední a horní části plotu. Dále se vázací drát používá při
                přichycování pletiva k plotovým sloupkům a k přichycováním
                různých doplňků, jako jsou např. stínící tkaniny a ostnatá drát.
              </p>
              <br />
              <p>
                Produkt můžete jednoduše vložit do košíku a objednávku dokončit
                online. Případně nám můžete zavolat nebo napsat email.
              </p>
            </VazaciChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyVazaci;
