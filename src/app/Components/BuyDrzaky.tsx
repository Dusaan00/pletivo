import "../Sass/_pletiva.scss";
import DrzakyChange from "../functions/DrzakyChange";
import ShopBreadcrumbs from "./ShopBreadcrumbs";

function BuyDrzaky() {
  return (
    <section className="section-spletivo">
      <div className="section-spletivo-background"></div>
      <div className="section-spletivo-container">
        <ShopBreadcrumbs
          items={[
            { label: "Domů", href: "/" },
            { label: "Podhrabové desky", href: "/PodhraboveDesky" },
            { label: "Držáky na podhrabové desky" },
          ]}
        />
        <div className="section-spletivo-product">
          <DrzakyChange>
            <p>
              Držáky na podhrabové desky se používají pro snadné a pevné usazení
              betonových desek mezi sloupky. Jsou vhodným doplňkem k panelovým
              plotům a plotům z pleteného pletiva, kde podhrabové desky mohou
              figurovat jako přídavný bezpečnostní a estetický doplněk k vašemu
              oplocení.
            </p>
            <br />
            <p>
              Produkt můžete jednoduše vložit do košíku a objednávku dokončit
              online. Případně nám můžete zavolat nebo napsat email.
            </p>
          </DrzakyChange>
        </div>
      </div>
    </section>
  );
}

export default BuyDrzaky;
