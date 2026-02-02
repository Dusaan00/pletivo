import "../Sass/_pletiva.scss";
import { basePath } from "../functions/Env";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";

function Panely() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <div className="pletiva-container pletiva-gird">
        <div className="pletiva-about-data">
          <h1 className="pletiva-title-h1">Oplocení z panelů 3D/2D</h1>
          <h2 className="pletiva-title-h2">
            Plot z pletiva 3D/2D jako oplocení pozemku
          </h2>
          <p className="pletiva-description">
            Plot z panelů 3D/2D je v dnešní době velice žádané řešení oplocení
            pozemku. Je moderní, estetické a zároveň skvěle zabezpečí a chrání
            váš pozemek. Plot z panelů 3D/2D je tak skvělá volba pro oplocení u
            rodinných domů a zahrad, ale také i pro firmy díky spolehlivému
            zabezpečení firemních objektů. Montáž panelů 3D/2D se dá provést i s
            podhrabovými deskami, ať už je to kvůli bezpečnostnímu prvku navíc,
            nebo čistě z hlediska estetiky plotu.
          </p>
          <p className="pletiva-description">
            Panely 3D/2D máme k dispozici v zelené, antracitové a zinkové barvě,
            k dispozici jsou varianty pvc a panely zinkové - které se obvzlášť
            hodí na oplocení v průmyslových oblastech. <br />
            Dostupné výšky 1m - 2m.
          </p>
          <ul className="pletiva-advantages">
            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Moderní, estetický vzhled</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Jednoduchá instalace</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Velice spolehlivé zabezpečení pozemku</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Možnost instalace s podhrabovými deskami</span>
            </li>
          </ul>
        </div>
        <div className="pletiva-about-image">
          <img
            src={`${basePath}/panelyintroo.png`}
            alt="Pletiva PVC a zinková"
            className="pletiva-about-image-i"
          />
        </div>
      </div>

      <div className="pletivo-products">
        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img
              src={`${basePath}/pletivaa/panelgreen.png`}
              alt="3D panel v zelené barvě"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Panel 3D Zelený, drát 4mm</h3>
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
            <Link href="/PanelyProduct">
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
              src={`${basePath}/pletivaa/pantracit.png`}
              alt="Panel 3D v antracitové barvě"
            />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Panel 3D Antracit, drát 4mm</h3>
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
            <Link href="/PanelyProduct">
              <button>
                Koupit
                <RiShoppingCart2Line />
              </button>
            </Link>
          </div>
        </div>

        <div className="pletivo-product">
          <div className="pletivo-product-image">
            <img src={`${basePath}/pletivaa/zinc.png`} alt="Panel 3D zinkový" />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Panel 3D zinkový</h3>
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
            <img src={`${basePath}/pletivaa/dvad.png`} alt="Panel 2D zinkový" />
          </div>
          <div className="pletivo-product-text">
            <div className="pletivo-product-pricing">
              <h3>Panel 2D zinkový</h3>
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
              src={`${basePath}/sloupky/jeklgreen.webp`}
              alt="Sloupek JEKL - zelený"
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
              src={`${basePath}/sloupky/jeklantracit.webp`}
              alt="Sloupek JEKL - antracit"
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
              alt="Sloupek JEKL - zinkový"
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
      </div>
    </section>
  );
}

export default Panely;
