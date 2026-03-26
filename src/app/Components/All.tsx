import "../Sass/_all.scss";

import { vseProducts } from "../../data/products/vse";
import ProductCard from "../Components/ProductCard";

function All() {
  return (
    <section className="all">
      <div className="pletivo-products">
        {vseProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default All;
