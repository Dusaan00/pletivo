import "../Sass/_pletiva.scss";
import { basePath } from "../functions/Env";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Link from "next/link";
import { panelyProducts } from "../../data/products/collections";
import ProductSearch from "../functions/ProductSearch";

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
            zabezpečení firemních objektů. Montáž{" "}
            <Link href="/PanelyProduct" className="category-inline-link">
              panelů 3D PVC
            </Link>{" "}
            i{" "}
            <Link href="/PanelyZinkove" className="category-inline-link">
              zinkových panelů
            </Link>{" "}
            se dá provést i s{" "}
            <Link href="/PodhraboveDesky" className="category-inline-link">
              podhrabovými deskami
            </Link>
            .
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
              <Link href="/PodhraboveDesky" className="category-inline-link">
                Možnost instalace s podhrabovými deskami
              </Link>
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

      <ProductSearch products={panelyProducts} />
    </section>
  );
}

export default Panely;
