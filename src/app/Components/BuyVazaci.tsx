import "../Sass/_buyvazaci.scss";
import VazaciChange from "../functions/VazaciChange";

function BuyVazaci() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
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
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </VazaciChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyVazaci;
