import "../Sass/_buypletivo.scss";
import PanelyZincChange from "../functions/PanelyZincChange";

function BuyPanelZinc() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <PanelyZincChange>
              <p>
                Panely zinkové 3D máme dostupné ve výškách od 1.03m do 1.73m,
                délka 2.5m, průměr drátu 4mm. Panely zinkové v 2D provedení máme
                dostupné ve výškách od 1.03m do 2.03m, drát 5/6mm.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </PanelyZincChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPanelZinc;
