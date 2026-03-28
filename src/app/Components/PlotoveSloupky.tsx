import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";
import "../Sass/_plotovesloupky.scss";
import { sloupkyplotoveProducts } from "../../data/products/sloupkyplotove";
import ProductSearch from "../functions/ProductSearch";

function Sloupky() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <h2>Sloupky pro oplocení z pletiva</h2>
      <p>
        Tyto sloupky a vzpěry se využívají jako plotové sloupky při stavbách
        oplocení z pleteného pletiva.
      </p>
      <ProductSearch products={sloupkyplotoveProducts} />
    </section>
  );
}

export default Sloupky;
