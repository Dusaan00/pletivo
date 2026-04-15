import "../Sass/_doporucene.scss";
import ProductSearch from "../functions/ProductSearch";

function DoporuceneProdukty({
  title,
  products,
}: {
  title: string;
  products: any[];
}) {
  return (
    <section className="section-reccomended">
      <h2 className="title-rec">{title}</h2>
      <ProductSearch products={products} />
    </section>
  );
}

export default DoporuceneProdukty;
