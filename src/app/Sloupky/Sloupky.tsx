import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";
import { RiCheckboxCircleLine, RiShoppingCart2Line } from "react-icons/ri";
import Link from "next/link";
import { sloupkyProducts } from "../../data/products/sloupky";
import ProductCard from "../Components/ProductCard";

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
        {sloupkyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Sloupky;
