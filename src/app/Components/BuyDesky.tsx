import DeskyChange from "../functions/DeskyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyDesky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Podhrabové desky", href: "/PodhraboveDesky" },
              { label: "Betonové podhrabové desky" },
            ]}
          />
          <div className="section-spletivo-product">
            <DeskyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Betonové podhrabové desky dodávají plotu odolnost a ochranu
                navíc, zároveň poskytnou plotu i estetiku a upravený vzhled. Na
                usazování desek jsou většinou potřeba 2 lidi.
              </p>
              <br />
              <p>
                Produkt můžete jednoduše vložit do košíku a objednávku dokončit
                online. Případně nám můžete zavolat nebo napsat email.
              </p>
            </DeskyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyDesky;
