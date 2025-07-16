import Image from "next/image";
import Link from "next/link";
import "../Sass/_intro.scss";
import { basePath } from "../functions/Env";

function Intro() {
  return (
    <>
      <section className="intro-section">
        <div className="intro-loga-div">
          <Image
            src={`${basePath}/loga/logou.png`}
            width={375}
            height={150}
            className="intro-loga-img"
            alt="Výroba Pletiva Grygov Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1 className="intro-title">VÝROBA PLETIVA GRYGOV</h1>
        <h2 className="intro-popis">Kvalitní pletivo od Českého výrobce</h2>
        <div className="intro-content right">
          <hr className="intro-divider" />
          <ul className="intro-list">
            <li>
              <span>
                Výroba pletiva, panely 3D/2D, brány, branky, mobilní oplocení,
                sloupky, vzpěry
              </span>
            </li>
            <li>
              <span>Stavby plotů na klíč a zámečnické práce</span>
            </li>
            <li>
              <span>Desítky let praxe v oboru</span>
            </li>
          </ul>
          <Link href="/form" className="btn btn--cta btn--animated">
            <span className="btn--bold">Odeslat poptávku</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Intro;
