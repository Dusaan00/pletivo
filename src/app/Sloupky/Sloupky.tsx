import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Link from "next/link";
import { sloupkyProducts } from "../../data/products/collections";
import ProductSearch from "../functions/ProductSearch";

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
            tkaniny i bezpečnostní prvky jako jsou ostnaté dráty. Naleznete zde{" "}
            <Link
              href="/SloupkyProduct"
              className="category-inline-link category-inline-link--hero"
            >
              sloupky JEKL PVC
            </Link>
            ,{" "}
            <Link
              href="/SloupkyZinkoveJekl"
              className="category-inline-link category-inline-link--hero"
            >
              sloupky JEKL zinkové
            </Link>
            ,{" "}
            <Link
              href="/Objimky"
              className="category-inline-link category-inline-link--hero"
            >
              objímky
            </Link>
            ,{" "}
            <Link
              href="/NapinaciDraty"
              className="category-inline-link category-inline-link--hero"
            >
              napínací dráty
            </Link>{" "}
            i{" "}
            <Link
              href="/VazaciDraty"
              className="category-inline-link category-inline-link--hero"
            >
              vázací dráty
            </Link>
            .
          </p>
          <ul className="pletiva-advantages">
            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <Link
                href="/SloupkyProduct"
                className="category-inline-link category-inline-link--plain"
              >
                Sloupky pro ploty z pletiva i panelů
              </Link>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Dodatečné bezpečnostní prvky oplocení</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <Link
                href="/NapinaciDraty"
                className="category-inline-link category-inline-link--plain"
              >
                Napínací dráty, vázací dráty, objímky, čepičky
              </Link>
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

      <ProductSearch products={sloupkyProducts} />
    </section>
  );
}

export default Sloupky;
