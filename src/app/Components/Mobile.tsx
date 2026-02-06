import "../Sass/_mobile.scss";
import Image from "next/image";
import { basePath } from "../functions/Env";

function Mobile() {
  return (
    <section className="mobile">
      <div className="mobile-container">
        <div className="mobile-text">
          <h1 className="mobile-title">Mobilní oplocení</h1>
          <p className="mobile-intro">
            Mímo běžná oplocení z pletiva a 3D pletiva nabízíme i dočasná řešení
            oplocení - mobilní oplocení. Vyzvednutí mobilního oplocení je možné
            na adrese naší firmy kdykoliv během našich pracovních hodin, stačí
            nás kontaktovat.
          </p>
        </div>
        <div className="mobile-image-wrapper">
          <Image
            src={`${basePath}/mobile/mobile.png`}
            alt="Mobilní oplocení"
            width={550}
            height={350}
            className="mobile-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Mobile;
