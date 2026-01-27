import "../Sass/_pletiva.scss";
import { basePath } from "../functions/Env";
import { RiCheckboxCircleLine } from "react-icons/ri";

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
            pozemku, plot z pletiva se zároveň jednoduše instaluje. Pletivo
            můžete využít k oplocení svého domu, zahrady, chaty, firemních
            objektů i např. sportovišť.
          </p>
          <p className="pletiva-description">
            Máme k dispozici pletiva pvc i zinkové - bezinal.
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
        <h2 className="pletivo-needed-h2">
          Co potřebujete k pletivu dokoupit pro úspěšnou stavbu plotu?
        </h2>
      </div>
    </section>
  );
}

export default Pletiva;
