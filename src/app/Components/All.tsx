import "../Sass/_all.scss";
import { basePath } from "../functions/Env";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

function All() {
  return (
    <section className="all">
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
              Kvalitní pletivo PVC s průměrem 2.5mm a rozměrem oka 55mm.
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
              Kvalitní pletivo PVC s průměrem 2.5mm a rozměrem oka 55mm.
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
              Kvalitní pletivo bezinal s průměrem 2.0mm a rozměrem oka 55mm.
              Dostupné výšky pletiva bezinal od 100 do 200cm.
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
              Kvalitní pletivo bezinal s průměrem 2.2mm a rozměrem oka 55mm.
              Dostupné výšky pletiva bezinal od 100 do 200cm.
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
              <h4>od 520,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PanelyZinkove">
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
              <h4>od 925,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/PanelyZinkove">
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
              Sloupek JEKL zinkový se používá při montážích plotů ze zinkového
              3D pletiva.
            </p>
            <div className="pletivo-product-price">
              <h4>odd 355,-Kč</h4>
            </div>
          </div>
          <div className="btn-buy">
            <Link href="/SloupkyZinkoveJekl">
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
              Napínací drát zinkový, využivá se při montáži plotu ze zinkového
              pletiva bezinal.
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

export default All;
