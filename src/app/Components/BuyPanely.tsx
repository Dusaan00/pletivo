import "../Sass/_buypletivo.scss";
import PanelyChange from "../functions/PanelyChange";

function BuyPletivo() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <PanelyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Tento panel je dostupný v zelené a antracitové barvě. Panely
                jsou šíroké 2.5m, vysoké jsou od 1m do 2m. Tyty panely mají
                průměr drátu 4mm. Při montáži se dají dobře kombinovat s
                podhrabovými deskami. Montáž panelů je snadná, jednoduše se
                zasunou mezi sloupky.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </PanelyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPletivo;
