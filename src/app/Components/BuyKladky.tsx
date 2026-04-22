import "../Sass/_buykladky.scss";
import "../Sass/_buyobjimky.scss";
import KladkyChange from "../functions/KladkyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyKladky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
              { label: "Napínací kladka PVC" },
            ]}
          />
          <div className="section-spletivo-product">
            <KladkyChange type="pvc">
              <p>
                Napínací kladky se používají při stavbě plotu z pleteného
                pletiva při napínání napínacího drátu, který drží pletivo.
                Napínací kladka umožňuje postupně utahovat nabínací drát tak,
                aby byl pevně napnutý mezi plotovými slupky, díky tomu plot může
                správně držet svůj tvar.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </KladkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyKladky;
