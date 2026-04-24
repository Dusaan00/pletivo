import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import { basePath } from "../functions/Env";
import "../Sass/_pletiva.scss";

function ProductCard({ product }) {
  const primaryBadge = product.badges?.[0];
  const inventoryLabel = product.inventory?.label;
  const inventoryClassName =
    product.inventory?.status === "in_stock"
      ? "pletivo-product-stock pletivo-product-stock--in-stock"
      : product.inventory?.status === "available_from"
        ? "pletivo-product-stock pletivo-product-stock--available-from"
      : "pletivo-product-stock pletivo-product-stock--inquiry";
  const ctaLabel = product.purchase?.ctaLabel || "Koupit";
  const productHref = product.purchase?.href || product.link;
  const imageAlt = product.media?.[0]?.alt || product.name;
  const priceLabel = product.pricing?.display || product.price;

  return (
    <article className="pletivo-product">
      <Link
        href={productHref}
        className="pletivo-product-image-link"
        aria-label={`Detail produktu ${product.name}`}
      >
        <div className="pletivo-product-image">
          <img src={`${basePath}${product.image}`} alt={imageAlt} />
        </div>
      </Link>

      <div className="pletivo-product-text">
        <div className="pletivo-product-pricing">
          <h3>
            <Link href={productHref} className="pletivo-product-title-link">
              {product.name}
            </Link>
          </h3>
        </div>

        <p>{product.description}</p>

        <div className="pletivo-product-price">
          <h4>{priceLabel}</h4>
          {inventoryLabel && (
            <p className={inventoryClassName}>{inventoryLabel}</p>
          )}
          {primaryBadge && <p>{primaryBadge}</p>}
        </div>
      </div>

      <div className="btn-buy">
        <Link href={productHref}>
          <button>
            {ctaLabel}
            <RiShoppingCart2Line />
          </button>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
