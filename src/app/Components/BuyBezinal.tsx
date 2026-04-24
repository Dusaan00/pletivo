import BezinalChange from "../functions/BezinalChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyBezinal() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Pletivo", href: "/Pletivo" },
              { label: "Pletivo Bezinal 25m" },
            ]}
          />
          <div className="section-spletivo-product">
            <BezinalChange>
              <p>
                Zinková Pletiva Bezinal máme ve variantách s průměrem drátu
                2.0mm a 2.2mm. Pletiva Bezinal pleteme v našich dílnách už mnoho
                let, takže kvalitní a odolné pletivo zaručujeme. Zinkové pletivo
                Bezinal se díky svým vlastnostem využívá hlavně u firemních
                objektů a v průmyslových oblastech vzhledem k jeho vysoké
                odolnosti a ochraně.
              </p>
              <br />
              <p>
                Produkt bude možné objednat online po naskladnění. Případně nám
                můžete zavolat nebo napsat email.
              </p>
            </BezinalChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyBezinal;
