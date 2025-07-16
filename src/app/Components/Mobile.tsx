import "../Sass/_mobile.scss";
import Image from "next/image";
import { basePath } from "../functions/Env";

function Mobile() {
  return (
    <section className="mobile">
      <div className="mobile-container">
        <div className="mobile-text">
          <h2 className="mobile-title">Mobilní oplocení</h2>
          <p className="mobile-intro">
            Můžeme vám poskytnout i mobilní oplocení. Vyzvednutí je možné
            kdykoliv během našich pracovních hodin, stačí nás kontaktovat.
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
