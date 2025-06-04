import "../Sass/_about.scss";
import Image from "next/image";

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
              Vyrábíme různé druhy pletiv, bran, branek a doplňků nezbytných k
              oplocení – napínací dráty, vázací dráty, napínací kladky,
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
                src="/pletivomore.png"
                alt="Logo firmy Výroba Pletiva Grygov"
                width={300}
                height={135}
                className="section-about-para-ii-pic"
              />
            </div>
          </div>
          <div className="section-about-right">
            <Image
              src="/pletivogrygov.jpg"
              alt="Title image for Výroba Pletiva Grygov"
              width={750}
              height={450}
              className="intro-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
