import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";
import "../Sass/_plotovesloupky.scss";
import { sloupkyplotoveProducts } from "../../data/products/collections";
import ProductSearch from "../functions/ProductSearch";

function Sloupky() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <h2>Sloupky pro oplocení z pletiva</h2>
      <p>
        Následující sloupky a vzpěry se využívají jako plotové sloupky při
        stavbách oplocení z pleteného pletiva. Sloupky zakoupené u nás snadno
        odolávají tlaku větru, dokážou tedy zajistit velice dlouhou trvanlivost
        celého oplocení. U zinkových sloupků je jejich maximální odolnost
        zajištěna procesem zinkování, který na nich vytváří silnou ochrannou
        vrstvu, která tak sloupky chrání před korozí.
      </p>
      <ProductSearch products={sloupkyplotoveProducts} />
    </section>
  );
}

export default Sloupky;
