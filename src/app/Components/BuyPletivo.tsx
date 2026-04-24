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
              <p>
                Pletivo poplastované s průměrem drátu 2.5mm a rozměrem oka 55m.
                Dostupné výšky pletiva od 100 do 200cm. Pletivo je upletené u
                nás v našich dílnách. 1 balík pletiva má délku 25m. Pletivo je
                kvalitní, odolné, po dokončené montáži není potřeba dále
                udržovat. Vyrobeno u nás.
              </p>
              <br />
              <p>
                Produkt bude možné objednat online po naskladnění. Případně nám
                můžete zavolat nebo napsat email.
              </p>
            </ColorChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPletivo;
