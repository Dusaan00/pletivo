import "../Sass/_buypletivo.scss";
import NapinaciChange from "../functions/NapinaciChange";

interface BuyNapinaciProps {
  initialColor?: "zelena" | "antracitova";
  initialLength?: "26" | "52" | "78";
}

function BuyNapinaci({ initialColor, initialLength }: BuyNapinaciProps) {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <NapinaciChange
              initialColor={initialColor}
              initialLength={initialLength}
            >
              <p>
                Napínaci drát se používá při stavbě plotu z pletiva k tomu, aby
                pletivo zpevnil, a udržel ho rovně a pevně napnuté mezi
                plotovými sloupky. Pletivo se na napínací drát přivazuje pomocí
                vázacího drátu. Při povětrnostních vlivech se síla přenáší z
                pletiva do napínací drátu se sloupky, a plot se ak stáva
                stabilnější.
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
