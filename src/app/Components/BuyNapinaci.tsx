import "../Sass/_buypletivo.scss";
import NapinaciChange from "../functions/NapinaciChange";

function BuyNapinaci() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <NapinaciChange>
              <p>
                Napínaci dráty v zelené a antracitové barvě. Využívají se při
                montážích plotů.
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
