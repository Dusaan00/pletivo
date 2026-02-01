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
            alt="Pletiva PVC a zinková"
            className="pletiva-about-image-i"
          />
        </div>
      </div>

      <div className="pletivo-products">
        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/sloupky/sloupekantracit.webp`}
              alt="Pletivo PVC zelené"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek antracit – ⌀48mm</h3>
            </div>
            <p>
              Panel pvc v zelené barvě, šířka 2.50m, dostupné výšky panelů od 1m
              do 2m. Idealní pro oplocení rodinného domu, zahrady, i firemního
              areálu.
            </p>
            <div className="pletivo-product-price">
              <h4>od 490,-Kč</h4>
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
              alt="Pletivo PVC antracit"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra antracit – ⌀38mm</h3>
            </div>
            <p>
              Panel pvc v antracitové barvě, šířka 2.50m, dostupné výšky panelů
              od 1m do 2m. Idealní pro oplocení rodinného domu, zahrady, i
              firemního areálu.
            </p>
            <div className="pletivo-product-price">
              <h4>od 490,-Kč</h4>
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
              src={`${basePath}/sloupky/sloupekpvp.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek PVC – ⌀42mm</h3>
            </div>
            <p>
              Panel 3D zinkový v zinkové barvě, šířka 2.50m, dostupné výšky
              panelů od 1m do 2m. Zinek dodává ochranu navíc. Zinkové panely
              jsou velice odolné s dlouhou životností. Ideální pro oplocení
              např. v oblastech průmyslu.
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
              src={`${basePath}/sloupky/vzperapvp.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra PVC – ⌀42mm</h3>
            </div>
            <p>
              Panel 2D zinkový v zinkové barvě, šířka 2.50m, dostupné výšky
              panelů od 1m do 2m. Zinek dodává ochranu navíc. Zinkové panely
              jsou velice odolné s dlouhou životností. Ideální pro oplocení
              např. v oblastech průmyslu.
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
              src={`${basePath}/sloupky/sloupekzinc.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek zinkový – ⌀48mm</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/sloupekgreen.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek zelený ⌀48mm</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/vzperagreen.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra zelená – ⌀38mm</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/vzperazn.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Vzpěra zinková – ⌀38mm</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/jeklantracit.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek JEKL - antracit</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/jeklzinc.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek JEKL - zinkový</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/jeklgreen.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Sloupek JEKL - zelený</h3>
            </div>
            <p>
              Sloupky mezi které se panely při montáži plotu dosazují. Rozměr
              60x40.
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
              src={`${basePath}/sloupky/dratgreen.webp`}
              alt="Pletivo zinkové bezinal"
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
              alt="Pletivo zinkové bezinal"
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
              alt="Pletivo zinkové bezinal"
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
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Napínací drát – Zinkový</h3>
            </div>
            <p>
              Napínací drát zinkový, využivá se při montáži plotu ze zinkového
              pletiba bezinal.
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
      </div>
    </section>
  );
}

export default Sloupky;
