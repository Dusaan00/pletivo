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
        odolávají tlaku větru a pomáhají zajistit dlouhou trvanlivost celého
        oplocení. V nabídce najdete zelené a antracitové PVC sloupky Ø48 i
        odpovídající vzpěry Ø38 pro pletivové ploty.
      </p>
      <ProductSearch products={sloupkyplotoveProducts} />
    </section>
  );
}

export default Sloupky;
