import "../Sass/_all.scss";

import { vseProducts } from "../../data/products/collections";
import ProductSearch from "../functions/ProductSearch";

function All() {
  return (
    <section className="all">
      <ProductSearch products={vseProducts} />
    </section>
  );
}

export default All;
