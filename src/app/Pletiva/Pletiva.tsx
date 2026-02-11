import "../Sass/_pletiva.scss";
import { basePath } from "../functions/Env";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import Slider from "../functions/Slider";
import Link from "next/link";

const sliderItems = [
  { src: "/land/sloupkyland.webp", label: "Sloupky" },
  { src: "/land/vzperagreen.webp", label: "Vzpěry" },
  { src: "/land/dratgreen.webp", label: "Napínací dráty" },
  { src: "/sloupky/vazacidrat.jpeg", label: "Vázací dráty" },
];

function Pletiva() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <div className="pletiva-container pletiva-gird">
        <div className="pletiva-about-data">
          <h1 className="pletiva-title-h1">Oplocení z pletiva</h1>
          <h2 className="pletiva-title-h2">
            Pletivový plot jako oplocení pozemku
          </h2>
          <p className="pletiva-description">
            Plot z pletiva je efektivní a cenově dostupné řešení oplocení
            pozemku, plot z pletiva se zároveň jednoduše instaluje. Pletivo
            můžete využít k oplocení svého domu, zahrady, chaty, firemních
            objektů i např. sportovišť.
          </p>
          <p className="pletiva-description">
            Máme k dispozici pletiva pvc i zinková - bezinal.
            <br />
            Výšky pletiva 1m - 2m.
          </p>
          <ul className="pletiva-advantages">
            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Čistý a upravený vzhled</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Cenově dostupný plot</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Jednoduchá instalace</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Možnost instalace s podhrabovými deskami</span>
            </li>
          </ul>
        </div>
        <div className="pletiva-about-image">
          <img
            src={`${basePath}/land/pletvo.webp`}
            alt="Pletiva PVC a zinková"
            className="pletiva-about-image-i"
          />
        </div>
      </div>
      <div className="pletivo-needed">
        <div className="pletivo-needed-text">
          <h2 className="pletivo-needed-h2">
            Co potřebujete k pletivu dokoupit pro úspěšnou stavbu plotu?
          </h2>
          <ul className="pletivo-needed-ul">
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <span>Sloupky zelené/antracit</span>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <span>Vzpěry zelené/antracit</span>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <span>Napínací drát</span>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <span>Vázací drát</span>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <span>Napínáky</span>
            </li>
          </ul>
        </div>
        <div className="pletivo-slider">
          <Slider items={sliderItems} />
        </div>
      </div>

      <div className="pletivo-products">
        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/pletivaa/zelenep.webp`}
              alt="Pletivo PVC zelené"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Pletivo Poplastované Zelené 25m</h3>
            </div>
            <p>
              Kvalitní pletivo PVC s průměrem drátu 2.5mm a rozměrem oka 55mm.
              Dostupné výšky pletiva od 100 do 200cm.
            </p>
            <div className="pletivo-product-price">
              <h4>1325,- Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PletivaPVC">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/pletivaa/antracitv.webp`}
              alt="Pletivo PVC antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Pletivo Poplastované Antracit 25m</h3>
            </div>
            <p>
              Kvalitní pletivo PVC s průměrem drátu 2.5mm a rozměrem oka 55mm.
              Dostupné výšky pletiva od 100 do 200cm.
            </p>
            <div className="pletivo-product-price">
              <h4>1325,- Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PletivaPVC">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/pletivaa/bezinalv.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Pletivo Zinkové Bezinal 25m, 2.0mm</h3>
            </div>
            <p>
              Kvalitní pletivo bezinal s průměrem drátu 2.0mm a rozměrem oka
              55mm. Dostupné výšky pletiva bezinal od 100 do 200cm.
            </p>
            <div className="pletivo-product-price">
              <h4>1550,- Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PletivaBezinal">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/pletivaa/bezinalv.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Pletivo Zinkové Bezinal 25m, 2.2mm</h3>
            </div>
            <p>
              Kvalitní pletivo bezinal s průměrem drátu 2.2mm a rozměrem oka
              55mm. Dostupné výšky pletiva bezinal od 100 do 200cm.
            </p>
            <div className="pletivo-product-price">
              <h4>1999,- Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PletivaBezinal">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/land/zeberkove.webp`}
              alt="Žeberkové pletivo"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Žeberkové pletivo</h3>
            </div>
            <p>
              Tento typ pletiva vyrábíme v naší dílně a dodáváme na objednávku.
              V případě zájmu o pletivo nás kontaktujte.
            </p>
            <div className="pletivo-product-price">
              <h4>Na poptávku</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/vazacidrat.jpeg`}
              alt="Napínací kladka zinková"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vázací drát pvc 50m</h3>
            </div>
            <p>
              Vázací dráty pvc v zelené/antracitové/hnědé barvě s průměrem
              1,4mm/2,0mm.
            </p>
            <div className="pletivo-product-price">
              <h4>140,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratgreen.webp`}
              alt="Napínací drát pvc zelený"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – zelený 78m</h3>
            </div>
            <p>
              Napínací drát PVC zelený, délka 78 metrů. Napínací drát se využívá
              při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>340,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/NapinaciDraty">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratgreen.webp`}
              alt="Napínací drát pvc zelený"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – zelený 52m</h3>
            </div>
            <p>
              Napínací drát PVC zelený, délka 52 metrů. Napínací drát se využívá
              při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>250,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/NapinaciDraty">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratgreen.webp`}
              alt="Napínací drát pvc zelený"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – zelený 26m</h3>
            </div>
            <p>
              Napínací drát PVC zelený, délka 26 metrů. Napínací drát se využívá
              při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>140,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/NapinaciDraty">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratantra.webp`}
              alt="Napínací drát v barvě antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – antracit 78m</h3>
            </div>
            <p>
              Napínací drát PVC antracit, délka 78 metrů. Napínací drát se
              využívá při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>360,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/NapinaciDraty">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratantra.webp`}
              alt="Napínací drát v barvě antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – antracit 52m</h3>
            </div>
            <p>
              Napínací drát PVC antracit, délka 52 metrů. Napínací drát se
              využívá při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>270,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/NapinaciDraty">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/dratzink.webp`}
              alt="Napínací drát zinkový"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – Zinkový</h3>
            </div>
            <p>
              Napínací drát zinkový, využivá se při montáži plotu ze zinkového
              pletiva bezinal.
            </p>
            <div className="pletivo-product-price">
              <h4>od 255,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/kladka.webp`}
              alt="Napínací kladka pvc v zelené barvě"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací kladka PVC zelená</h3>
            </div>
            <p>
              Napínací kladka PVC v zelené barvě, tohle příslušenství se využivá
              při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>22,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/kladkaa.webp`}
              alt="Napínací kladka pvc antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací kladka PVC antracit</h3>
            </div>
            <p>
              Napínací kladka PVC v antracitové barvě, tohle příslušenství se
              využivá při montáži pletivového plotu.
            </p>
            <div className="pletivo-product-price">
              <h4>29,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/kladkazinc.webp`}
              alt="Napínací kladka zinková"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací kladka zinková</h3>
            </div>
            <p>
              Napínací kladka zinkový, tohle příslušenství se využivá při
              montáži zinkového plotuz pletiva bezinal.
            </p>
            <div className="pletivo-product-price">
              <h4>29,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/prichytky.webp`}
              alt="Napínací kladka zinková"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Příchytky + šroubky</h3>
            </div>
            <p>
              Příchytky a šroubky, které se využívají pro kompletní montáže
              plotů. Cena za 1ks příchytka + 1ks šroubek je 7,- Kč.
            </p>
            <div className="pletivo-product-price">
              <h4>7,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/form">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pletiva;
