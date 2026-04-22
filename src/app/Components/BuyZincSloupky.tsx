import ZincSloupkyChange from "../functions/ZincSloupkyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyZincSloupky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Sloupky a příslušenství", href: "/SloupkyPrislusenstvi" },
              { label: "Sloupky JEKL zinkové" },
            ]}
          />
          <div className="section-spletivo-product">
            <ZincSloupkyChange>
              <p>
                Sloupky zinkové. Tyto sloupky se využívají pří stavbě plotu ze
                zinkových panelů. Dostupné výšky zinkových sloupků jekl máme od
                2m do 2.6m.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </ZincSloupkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyZincSloupky;
