import PanelyZincChange from "../functions/PanelyZincChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

type BuyPanelZincProps = {
  variant: "3D" | "2D";
  pageHref: string;
  breadcrumbLabel: string;
};

function BuyPanelZinc({
  variant,
  pageHref,
  breadcrumbLabel,
}: BuyPanelZincProps) {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <ShopBreadcrumbs
            items={[
              { label: "Domů", href: "/" },
              { label: "Panely 3D/2D", href: "/Panely3D2D" },
              { label: breadcrumbLabel },
            ]}
          />
          <div className="section-spletivo-product">
            <PanelyZincChange variant={variant} pageHref={pageHref}>
              <p>
                Panely zinkové 3D máme dostupné ve výškách od 1.03m do 1.73m,
                délka 2.5m, průměr drátu 4mm. Panely zinkové v 2D provedení máme
                dostupné ve výškách od 1.03m do 2.03m, drát 5/6mm.
              </p>
              <br />
              <p>
                Produkt můžete jednoduše vložit do košíku a objednávku dokončit
                online. Případně nám můžete zavolat nebo napsat email.
              </p>
            </PanelyZincChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPanelZinc;
