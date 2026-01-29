import "../Sass/_buypletivo.scss";
import { basePath } from "../functions/Env";
import { RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

function BuyPletivo() {
  return (
    <>
      <section className="section-spletivo">
        <div className="section-spletivo-background"></div>
        <div className="section-spletivo-container">
          <div className="section-spletivo-product">
            <div className="section-spletivo-gal">
              <img src={`${basePath}/pletivaa/green.webp`} alt="Pletivo PVC" />
            </div>
            <div className="section-spletivo-details">
              <h1>Pletivo Poplastované Zelené 25m</h1>
              <h2>1325,- Kč</h2>
              <h3>Skladem, ihned k odběru</h3>
              <p>
                Pletivo poplastované s průměrem drátu 2.5mm a rozměrem oka 55m.
                Dostupné výšky pletiva od 100 do 200cm. Pletivo je upletené u
                nás v našich dílnách. 1 balík pletiva má délku 25m. Pletivo je
                kvalitní, odolné, po dokončené montáži není potřeba dále
                udržovat.
              </p>
              <br />
              <p>
                Pro nákup nás můžete kontaktovat přes kontaktní formulář, napsat
                email, nebo nám zavolat. Na možnosti nákupu online momentálně
                pracujeme.
              </p>
              <div className="height-select">
                <label htmlFor="height" className="height">
                  Vyberte výšku:
                </label>
                <select id="height" name="height">
                  <option value="1.00">1.00m</option>
                  <option value="1.20">1.25m</option>
                  <option value="1.40">1.50m</option>
                  <option value="1.40">1.60m</option>
                  <option value="1.40">1.80m</option>
                  <option value="1.40">2.00m</option>
                </select>
              </div>
              <form>
                <div className="color-select">
                  <p>Barva:</p>
                  <label htmlFor="zelená">
                    <input type="radio" name="color" id="zelená"></input>
                    <span className="color-1"></span>
                  </label>
                  <label htmlFor="antracit">
                    <input type="radio" name="color" id="antracit"></input>
                    <span className="color-2"></span>
                  </label>
                </div>

                <div className="quantity-select">
                  <p>Množství</p>
                  <input type="number" defaultValue={1} min="1"></input>
                </div>
                <Link href="/form" className="order-link">
                  <button>
                    Objednat <RiShoppingCart2Line />
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPletivo;
