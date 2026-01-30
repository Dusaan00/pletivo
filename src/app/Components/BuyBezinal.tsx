import "../Sass/_buypletivo.scss";
import BezinalChange from "../functions/BezinalChange";

function BuyBezinal() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <BezinalChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Zinková Pletiva Bezinal máme ve variantách s průměrem drátu
                2.0mm a 2.2mm. Pletiva Bezinal pleteme v našich dílnách už mnoho
                let, takže kvalití a odolné pletivo zaručujeme. Zinkové pletivo
                Bezinal se díky svým vlastnostem využívá hlavně u firemních
                objektů a v průmyslových oblastech vzhledem k jeho vysoké
                odolnosti a ochraně.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </BezinalChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyBezinal;
