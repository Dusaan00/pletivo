import "../Sass/_buypletivo.scss";
import SloupkyChange from "../functions/SloupkyChange";

function BuySloupky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <SloupkyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Sloupky poplastované ve velikosti 60x40 a výškami od 2m do 2.6m.
                Používají se při montážích oplocení z 3D pletiva.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </SloupkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuySloupky;
