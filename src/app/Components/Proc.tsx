import "../Sass/_proc.scss";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Proc() {
  return (
    <>
      {" "}
      <section className="proc-section">
        {" "}
        <div className="proc-title-wrapper">
          {" "}
          <h2 className="proc-title">Proč si vybrat naši firmu?</h2>{" "}
        </div>{" "}
        <div className="proc-div">
          {" "}
          <div className="proc-left">
            {" "}
            <div className="proc-photo-wrapper">
              {" "}
              <div className="proc-photo-grid">
                {" "}
                <Image
                  src={`${basePath}/vyroba-pletiva.jpg`}
                  width={500}
                  height={300}
                  className="proc-photo"
                  alt="Výroba Pletiva Grygov"
                />{" "}
                <Image
                  src={`${basePath}/vyroba-pletiva2.jpg`}
                  width={500}
                  height={300}
                  className="proc-photo"
                  alt="Výroba Pletiva Grygov"
                />{" "}
                <Image
                  src={`${basePath}/vyroba-pletiva3.jpg`}
                  width={500}
                  height={300}
                  className="proc-photo"
                  alt="Výroba Pletiva Grygov"
                />{" "}
                <Image
                  src={`${basePath}/vyroba-pletiva4.jpg`}
                  width={500}
                  height={300}
                  className="proc-photo"
                  alt="Výroba Pletiva Grygov"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="proc-right">
            {" "}
            <div className="proc-right-i">
              {" "}
              <h3 className="proc-right-h">
                {" "}
                Jak pletivo vyrábíme a jaké typy pletiva nabízíme{" "}
              </h3>{" "}
              <p className="proc-right-p">
                {" "}
                Pletivo vyrábíme v našich prostorách v Grygově. Naše stroje na
                výrobu pletiva zaručují maximální tuhost drátu a vyslédkem je
                kvalitní a odolné pletivo pro oplocení Vašeho pozemku.
                Nejčastěji zajišťujeme výrobu poplastovaných pletiv v
                antracitové a zelené barvě, dále například pletivo bezinal a
                alugreen.{" "}
              </p>{" "}
              <Link href="/Prehled" className="btn--text btn--gallery">
                {" "}
                Sortiment &rarr;{" "}
              </Link>{" "}
            </div>{" "}
            <div className="proc-right-ii">
              {" "}
              <h3 className="proc-right-h hh">Zakázková výroba</h3>{" "}
              <p className="proc-right-p">
                {" "}
                Velice často, jak pro soukromé osoby, tak pro firmy, vyrábíme na
                zakázku. Můžeme pro Vás zajistit dodání pletiv, panelů 3D/2D,
                bran, branek a dalšího příslušenství spojeného s montážemi
                oplocení.{" "}
              </p>{" "}
              <Link href="/form" className="btn--text btn--gallery">
                {" "}
                Výroba na zakázku &rarr;{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <div className="contacts">
        <p className="contacts__item">plotygrygov@gmail.com</p>
        <p className="contacts__item">+420 608 705 547</p>
        <Link href="/form" className="contacts__item contacts__button">
          Odeslat poptávku
        </Link>
      </div>
    </>
  );
}
export default Proc;
