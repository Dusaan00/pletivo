import Image from "next/image";
import "../Sass/_desky.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";
import ProductSearch from "../functions/ProductSearch";
import { deskyProducts } from "../../data/products/collections";
import "../Sass/_pletiva.scss";
import Sortkarty from "../Components/Sortkarty";

function Desky() {
  return (
    <section className="desky">
      <div className="container-desky">
        <h2 className="desky-title">Podhrabové desky</h2>

        <ProductSearch products={deskyProducts} />
        <Sortkarty />

        <div className="desky-xplain">
          <div className="xplain-item">
            <div className="xplain-img">
              <Image
                src={`${basePath}/deskyy/deskybeton.webp`}
                alt="Betonové podhrabové desky"
                width={300}
                height={400}
              />
            </div>
            <div className="xplain-text">
              <h3 className="antra">Podhrabové desky - betonové</h3>
              <p>
                K oplocení Vašeho pozemku vám můžeme dodat i podhrabové betonové
                desky, což přidává plotu odolnost a ochranu navíc, zároveň
                dodají vašemu plotu i estetiku a upravený vzhled. Na usazování
                desek jsou většinou potřeba 2 lidi. Podívej se i na{" "}
                <Link href="/DeskyPodhrabove" className="category-inline-link">
                  detail betonových podhrabových desek
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="xplain-item">
            <div className="xplain-img">
              <Image
                src={`${basePath}/deskyy/drzaky.webp`}
                alt="Držáky podhrabových desek"
                width={300}
                height={400}
              />
            </div>
            <div className="xplain-text">
              <h3 className="antra">Držáky podhrabových desek</h3>
              <p>
                Držáky na podhrabové desky se dávají mezi sloupky a do těchto
                držáků se následně jednoduše vloží podhrabové desky. Pokud
                potřebujete sestavit celé oplocení, navazuje na ně i{" "}
                <Link href="/SloupkyPrislusenstvi" className="category-inline-link">
                  příslušenství ke sloupkům a montáži
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Desky;
