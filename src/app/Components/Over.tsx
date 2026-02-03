import "../Sass/_over.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";
import { RiArrowRightLine } from "react-icons/ri";
import SliderPrehled from "../functions/SliderPrehled";

function Over() {
  return (
    <section className="section-prehled">
      <div className="prehled-container">
        <div className="prehled-title-wrap">
          <h1 className="prehled-title">Jaký sortiment hledáte?</h1>
        </div>
        <div className="prehled-card-wrapper">
          <SliderPrehled>
            <div className="prehled-card-item">
              {" "}
              <Link href="/PletivaPVC" className="prehled-card-link">
                <img
                  src={`${basePath}/land/pletvo.webp`}
                  alt="Pletiva poplastovaná pvc"
                  className="prehled-card-img"
                />
                <p className="badge">Poplastovaná pletiva</p>
                <h2 className="prehled-card-h2-title">
                  Oplocení z poplastovaného pletiva
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/PletivaBezinal" className="prehled-card-link">
                <img
                  src={`${basePath}/pletivaa/bezinalv.webp`}
                  alt="Pletivo zinkové bezinal"
                  className="prehled-card-img"
                />
                <p className="badge">Zinkové pletivo</p>
                <h2 className="prehled-card-h2-title">
                  Oplocení z pletiva bezinal
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/PanelyProduct" className="prehled-card-link">
                <img
                  src={`${basePath}/panely-pletivo-grygov.png`}
                  alt="Panely 3D zelené"
                  className="prehled-card-img"
                />
                <p className="badge">Panely pvc 3D/2D</p>
                <h2 className="prehled-card-h2-title">
                  Oplocení z pvc panelů 3D/2D
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/Panely3D2D" className="prehled-card-link">
                <img
                  src={`${basePath}/pletivaa/zinc.webp`}
                  alt="Panely 3D/2D zinkové"
                  className="prehled-card-img"
                />
                <p className="badge">Zinkové panely 3D/2D</p>
                <h2 className="prehled-card-h2-title">
                  Oplocení ze zinkových panelů 3D/2D
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/SloupkyPrislusenstvi" className="prehled-card-link">
                <img
                  src={`${basePath}/land/sloupkyland.webp`}
                  alt="Sloupky jeklové"
                  className="prehled-card-img"
                />
                <p className="badge">Sloupky a příslušenství</p>
                <h2 className="prehled-card-h2-title">
                  Kompletní příslušenství ke stavbě plotu
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/Brany" className="prehled-card-link">
                <img
                  src={`${basePath}/land/gateland.webp`}
                  alt="Brána"
                  className="prehled-card-img"
                />
                <p className="badge">Brány a branky</p>
                <h2 className="prehled-card-h2-title">
                  Brány a branky pro oplocení
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/PodhraboveDesky" className="prehled-card-link">
                <img
                  src={`${basePath}/deskyy/deskybeton.webp`}
                  alt="Brána"
                  className="prehled-card-img"
                />
                <p className="badge">Podhrabové desky</p>
                <h2 className="prehled-card-h2-title">
                  Betonové podhrabové desky a držáky
                </h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>

            <div className="prehled-card-item">
              <Link href="/MobilniOploceni" className="prehled-card-link">
                <img
                  src={`${basePath}/land/mobile.webp`}
                  alt="Brána"
                  className="prehled-card-img"
                />
                <p className="badge">Mobilní oplocení</p>
                <h2 className="prehled-card-h2-title">Mobilní oplocení</h2>
                <button className="prehled-card-button">
                  <RiArrowRightLine />
                </button>
              </Link>
            </div>
          </SliderPrehled>
        </div>
      </div>
    </section>
  );
}

export default Over;
