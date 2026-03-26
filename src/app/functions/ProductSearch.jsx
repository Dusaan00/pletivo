"use client";

import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { RiSearchLine } from "react-icons/ri";
import "../Sass/_search.scss";

function ProductSearch({ products }) {
  const [search, setSearch] = useState("");

  const searchTerm = search.toLowerCase();

  const filteredProducts = products
    .filter((product) =>
      (product.name + " " + product.description)
        .toLowerCase()
        .includes(searchTerm),
    )
    .sort((a, b) => {
      const aName = a.name.toLowerCase().includes(searchTerm);
      const bName = b.name.toLowerCase().includes(searchTerm);

      const aDesc = a.description.toLowerCase().includes(searchTerm);
      const bDesc = b.description.toLowerCase().includes(searchTerm);

      if (aName && !bName) return -1;
      if (!aName && bName) return 1;

      if (aDesc && !bDesc) return -1;
      if (!aDesc && bDesc) return 1;

      return 0;
    });

  return (
    <>
      <div className="pletivo-products-wrapper">
        <div className="product-search">
          <RiSearchLine className="search-icon" />
          <input
            type="text"
            placeholder="Vyhledat produkt..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="pletivo-products">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {filteredProducts.length === 0 && (
            <p className="no-results">Produkt nebyl nalezen</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
