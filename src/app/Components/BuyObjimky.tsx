import "../Sass/_buyobjimky.scss";
import ObjimkyChange from "../functions/ObjimkyChange";

function BuyObjimky() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <ObjimkyChange>
              <p>
                Objímky jsou nepostradatelné příslušenství při montáži oplocení
                z panelů 3D. Objímky se používají k spojení upevnění plotového
                panelu a sloupku. Pro usazení jednoho panelu jsou zpravidla
                potřeba 2 objímky (každá na jedné straně spojuje sloupek).
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
            </ObjimkyChange>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyObjimky;
