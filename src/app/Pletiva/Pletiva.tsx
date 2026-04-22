import "../Sass/_pletiva.scss";
import { basePath } from "../functions/Env";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Slider from "../functions/Slider";
import Link from "next/link";
import { pletivaProducts } from "../../data/products/collections";
import ProductSearch from "../functions/ProductSearch";

const sliderItems = [
  { src: "/land/sloupkyland.webp", label: "Sloupky" },
  { src: "/land/vzperagreen.webp", label: "Vzpěry" },
  { src: "/land/dratgreen.webp", label: "Napínací dráty" },
  { src: "/sloupky/vazacidrat.jpeg", label: "Vázací dráty" },
];

function Pletiva() {
  return (
    <section className="pletiva-section" id="pletiva-about">
      <div className="pletiva-container pletiva-gird">
        <div className="pletiva-about-data">
          <h1 className="pletiva-title-h1">Oplocení z pletiva</h1>
          <h2 className="pletiva-title-h2">
            Pletivový plot jako oplocení pozemku
          </h2>
          <p className="pletiva-description">
            Plot z pletiva je efektivní a cenově dostupné řešení oplocení
            pozemku, zároveň se plot z pletiva jednoduše instaluje. Pletivo
            můžete využít k oplocení svého domu, zahrady, chaty, firemních
            objektů i např. sportovišť. Pletivo zakoupené u nás je pleteno v
            našich dílnách. V nabídce najdete{" "}
            <Link href="/PletivaPVC" className="category-inline-link">
              pletivo PVC
            </Link>{" "}
            i{" "}
            <Link href="/PletivaBezinal" className="category-inline-link">
              pletivo Bezinal
            </Link>
            .
          </p>
          <p className="pletiva-description">
            Máme k dispozici pletiva pvc i zinková - bezinal. K oplocení můžete
            rovnou doplnit také{" "}
            <Link href="/PodhraboveDesky" className="category-inline-link">
              podhrabové desky
            </Link>
            .
            <br />
            Výšky pletiva 1m - 2m.
          </p>
          <ul className="pletiva-advantages">
            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Čistý a upravený vzhled</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Cenově dostupný plot</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Jednoduchá instalace</span>
            </li>

            <li className="pletiva-advantages-item">
              <RiCheckboxCircleLine />
              <span>Možnost instalace s podhrabovými deskami</span>
            </li>
          </ul>
        </div>
        <div className="pletiva-about-image">
          <img
            src={`${basePath}/land/pletvo.webp`}
            alt="Pletiva PVC a zinková"
            className="pletiva-about-image-i"
          />
        </div>
      </div>
      <div className="pletivo-needed">
        <div className="pletivo-needed-text">
          <h2 className="pletivo-needed-h2">
            Co potřebujete k pletivu dokoupit pro úspěšnou stavbu plotu?
          </h2>
          <ul className="pletivo-needed-ul">
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <Link href="/SloupkyPrislusenstvi" className="category-inline-link">
                Sloupky zelené/antracit
              </Link>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <Link href="/SloupkyPrislusenstvi" className="category-inline-link">
                Vzpěry zelené/antracit
              </Link>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <Link href="/NapinaciDraty" className="category-inline-link">
                Napínací drát
              </Link>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <Link href="/VazaciDraty" className="category-inline-link">
                Vázací drát
              </Link>
            </li>
            <li className="pletivo-needed-item">
              <RiCheckboxCircleLine />
              <Link href="/Kladky" className="category-inline-link">
                Napínáky
              </Link>
            </li>
          </ul>
        </div>
        <div className="pletivo-slider">
          <Slider items={sliderItems} />
        </div>
      </div>

      <ProductSearch products={pletivaProducts} />
    </section>
  );
}

export default Pletiva;
