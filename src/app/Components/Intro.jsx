import Image from "next/image";
import Link from "next/link";
import "../Sass/_intro.scss";
import { basePath } from "../functions/Env";

function Intro() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="intro-title">
              <span className="intro-title--bold">Pletivo</span>{" "}
              <span className="intro-title--space">Grygov</span>
            </h1>
            <h2 className="intro-titleii">
              Jsme dodavatelem kompletního oplocení pro soukromé osoby i firmy
            </h2>
            <p className="intro-description">
              Dodáváme pletiva PVC, panely 3D/2D, sloupky, brány, branky,
              vzpěry, podhrabové desky, napínací dráty, mobilní oplocení a
              všechna ostatní příslušenství nezbytná pro kompletní montáže plotů
              na klíč, vše za rozumné ceny. Pomůžeme vám s výběrem materiálu a
              vhodným řešením oplocení.
            </p>
            <div className="actn-btns">
              <Link href="/Prehled">
                <button href="/Prehled" className="actnbtn">
                  Prohlédnout sortiment
                </button>
              </Link>
            </div>
          </div>
          <div className="intro-img">
            <img src="panelyintroo.png" alt="Plot z 3D pletiva" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
