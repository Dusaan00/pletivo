import "../Sass/_pletiva.scss";
import ColorChange from "../functions/ColorChange";
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
              { label: "Pletivo", href: "/Pletivo" },
              { label: "Pletivo PVC 25m" },
            ]}
          />
          <div className="section-spletivo-product">
            <ColorChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Pletivo poplastované s průměrem drátu 2.5mm a rozměrem oka 55m.
                Dostupné výšky pletiva od 100 do 200cm. Pletivo je upletené u
                nás v našich dílnách. 1 balík pletiva má délku 25m. Pletivo je
                kvalitní, odolné, po dokončené montáži není potřeba dále
                udržovat. Vyrobeno u nás.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </ColorChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPletivo;
