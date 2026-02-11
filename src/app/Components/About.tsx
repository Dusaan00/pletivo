import "../Sass/_about.scss";
import Image from "next/image";
import { basePath } from "../functions/Env";

function About() {
  return (
    <section className="section-about">
      <div className="section-about-content">
        <div className="section-about-header">
          <h2 className="section-about-title">
            <strong>O firmě Výroba Pletiva Grygov</strong>
          </h2>
        </div>
        <div className="section-about-grid">
          <div className="section-about-left">
            <p className="section-about-para-ii">
              Jsme rodinná firma z Grygova. Firma byla založena v roce 1930 a
              zajišťovala výrobu pletiva a zámečnickou výrobu. V roce 1948 došlo
              k jejímu znárodnění. Od roku 1991 mohla firma opět navázat na
              výrobu pletiva a zámečnictví, a to trvá dodnes.
            </p>
            <p className="section-about-para-ii">
              Vyrábíme a dodáváme pletiva poplastovaná a pletiva zinková -
              bezinal, panely 3D/2D pvc i zinkové, sloupky pvc/zinkové, dále
              brány, branky a všechny ostatní nezbytné doplňky pro kompletní
              montáže oplocení – napínací dráty, vázací dráty, napínací kladky,
              kloboučky na plotové sloupky – pozinkované i PVC. Zároveň
              provádíme stavby plotů na klíč. Zakládáme si na kvalitě materiálu
              a na vstřícném a profesionálním přístupu k zákazníkům. Zakázky
              realizujeme pro soukromé osoby (např. rodinné domy, chatové
              oblasti, zahrady), firmy (zajištění materiálu a oplocení pro
              firemní objekty a průmyslové oblasti) i pro veřejný sektor (obce,
              školy atd.).
            </p>
            <div className="section-about-logo-container">
              <Image
                src={`${basePath}/pletivomore.png`}
                alt="Logo firmy Výroba Pletiva Grygov"
                width={300}
                height={135}
                className="section-about-para-ii-pic"
                loading="lazy"
              />
            </div>
          </div>
          <div className="section-about-right">
            <Image
              src={`${basePath}/pletivogrygov.jpg`}
              alt="Výroba Pletiva - historie firmy"
              width={750}
              height={450}
              className="intro-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
