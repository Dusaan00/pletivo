import "../Sass/_pletiva.scss";
import PrichytkyChange from "../functions/PrichytkyChange";

function BuyPrichytky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <PrichytkyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>Příchytky a šroubky.</p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </PrichytkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPrichytky;
