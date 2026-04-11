import "../Sass/_buypletivo.scss";
import DeskyChange from "../functions/DeskyChange";

function BuyDesky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <DeskyChange>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Betonové podhrabové desky dodávají plotu odolnost a ochranu
                navíc, zároveň poskytnou plotu i estetiku a upravený vzhled. Na
                usazování desek jsou většinou potřeba 2 lidi.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </DeskyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyDesky;
