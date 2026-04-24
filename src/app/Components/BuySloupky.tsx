import SloupkyChange from "../functions/SloupkyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuySloupky() {
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
              { label: "Sloupky JEKL" },
            ]}
          />
          <div className="section-spletivo-product">
            <SloupkyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Sloupky poplastované ve velikosti 60x40 a výškami od 2m do 2.6m.
                Používají se při montážích oplocení z 3D pletiva.
              </p>
              <br />
              <p>
                Produkt můžete jednoduše vložit do košíku a objednávku dokončit
                online. Případně nám můžete zavolat nebo napsat email.
              </p>
            </SloupkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuySloupky;
