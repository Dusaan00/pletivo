import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import { basePath } from "../functions/Env";

function ProductCard({ product }) {
  return (
    <div className="pletivo-product">
      <div className="pletivo-product-image">
        <img src={`${basePath}${product.image}`} alt={product.name} />
      </div>

      <div className="pletivo-product-text">
        <div className="pletivo-product-pricing">
          <h3>{product.name}</h3>
        </div>

        <p>{product.description}</p>

        <div className="pletivo-product-price">
          <h4>{product.price}</h4>
        </div>
      </div>

      <div className="btn-buy">
        <Link href={product.link}>
          <button>
            Koupit
            <RiShoppingCart2Line />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
