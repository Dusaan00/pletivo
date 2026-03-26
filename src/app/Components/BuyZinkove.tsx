import "../Sass/_buypletivo.scss";
import NapinaciChange from "../functions/NapinaciZincChange";

function BuyNapinaci() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <NapinaciChange>
              <p>
                Napínací drát zinkový, využívá se při stavbách oplocení z
                pozinkovaného pletiva bezinal.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </NapinaciChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyNapinaci;
