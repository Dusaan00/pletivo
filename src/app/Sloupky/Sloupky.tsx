import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

function Sloupky() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <div className="pletiva-container pletiva-gird">
        <div className="pletiva-about-data">
          <h1 className="pletiva-title-h1">Sloupky a příslušenství</h1>
          <h2 className="pletiva-title-h2">
            Kompletní příslušenství k úspěšné stavbě plotu
          </h2>
          <p className="pletiva-description">
            Dodáváme všechna nezbytná příslušenství pro stavbu plotu. Napínací
            dráty, napínáky, vázací dráty, vzpěry, čepičky, objímky, stínící
            tkaniny i bezpečnostní prvky jako jsou ostnaté dráty.
          </p>
          <ul className="pletiva-advantages">
            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Sloupky pro ploty z pletiva i panelů</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Dodatečné bezpečnostní prvky oplocení</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Napínací dráty, vázací dráty, objímky, čepičky</span>
            </li>
          </ul>
        </div>
        <div className="pletiva-about-image">
          <img
            src={`${basePath}/panely/panely4.webp`}
            alt="Sloupky pro stavby plotů"
            className="pletiva-about-image-i"
          />
        </div>
      </div>

      <div className="pletivo-products">
        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/jeklgreen.webp`}
              alt="Sloupek JEKL - zelený"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek pvc zelený 60x40</h3>
            </div>
            <p>Sloupek se používá při montážích plotů z 3D pletiva.</p>
            <div className="pletivo-product-price">
              <h4>od 255,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/SloupkyProduct">
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
              src={`${basePath}/sloupky/jeklantracit.webp`}
              alt="Sloupek JEKL - antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek pvc antracit 60x40</h3>
            </div>
            <p>Sloupek se používá při montážích plotů z 3D pletiva.</p>
            <div className="pletivo-product-price">
              <h4>od 255,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/SloupkyProduct">
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
              src={`${basePath}/sloupky/jeklzinc.webp`}
              alt="Sloupek JEKL - zinkový"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek JEKL - zinkový</h3>
            </div>
            <p>Sloupek se používá při montížch plotů z 3D pletiva.</p>
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
              src={`${basePath}/sloupky/sloupekantracit.webp`}
              alt="Sloupek antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek antracit – ⌀48mm</h3>
            </div>
            <p>
              Sloupek ⌀48mm v antracitové barvě. Pro montáže pletivových plotů.
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
              src={`${basePath}/sloupky/vzperantracit.webp`}
              alt="Vzpěra antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra antracit – ⌀38mm</h3>
            </div>
            <p>Vzpěra v barvě antracit. Pro montáže pletivových plotů.</p>
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
              src={`${basePath}/sloupky/sloupekzinc.webp`}
              alt="Sloupek zinkový"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek zinkový – ⌀48mm</h3>
            </div>
            <p>
              Sloupek zinkový, používá se při montážích plotů z pletiva bezinal.
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
              src={`${basePath}/sloupky/sloupekgreen.webp`}
              alt="Sloupek zelený"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek zelený ⌀48mm</h3>
            </div>
            <p>Sloupek zelený pvc, používá se při stavbě plotu z pletiva.</p>
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
              src={`${basePath}/sloupky/vzperagreen.webp`}
              alt="Vzpěra zelená"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra zelená – ⌀38mm</h3>
            </div>
            <p>Vzpěra zelená pvc, používá se při stavbě plotu z pletiva.</p>
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
              src={`${basePath}/sloupky/vzperazn.webp`}
              alt="Vzpěra zinková"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra zinková – ⌀38mm</h3>
            </div>
            <p>
              Vzpěra zinková, používá se při montážích oplocení z pletiva
              bezinal.
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
              src={`${basePath}/sloupky/dratzink.webp`}
              alt="Napínací drát zinkový"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vázací drát – Zinkový</h3>
            </div>
            <p>
              Vázací drát zinkový, využivá se při montáži plotu ze zinkového
              pletiva bezinal.
            </p>
            <div className="pletivo-product-price">
              <h4>od 145,-Kč</h4>
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
      </div>
    </section>
  );
}

export default Sloupky;
