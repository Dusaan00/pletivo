import Image from "next/image";
import "../Sass/_sloupky.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Sloupky() {
  return (
    <section className="sloupky">
      <h2 className="sloupky-title">Sloupky & příslušenství</h2>
      <p className="sloupky-intro">
        K oplocení (pletivo, panely 3D/2D) samozřejmě dodáváme i veškerá
        potřebná příslušenství, jako jsou sloupky, vzpěry, vázací dráty, ostnaté
        dráty, atd. V případě zájmu o materiál nám odešlete poptávku přes
        formulář, zavolejte, nebo napište email. Materiál jsme schopni Vám ještě
        ten samý den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě
        k Vám, do místa určení.
      </p>
      <div className="sloupky-container">
        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/sloupekantracit.webp`}
            alt="Pletivo zelené"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek antracit – ⌀48mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/sloupekpvp.webp`}
            alt="Pletivo Alugreen"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek PVC – ⌀42</p>
          <button className="sloupky-button">Odeslat poptávku</button>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/vzperantracit.webp`}
            alt="Pletivo antracit"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Vzpěra antracit – ⌀38mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/vzperapvp.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Vzpěra PVC – ⌀42mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/sloupekzinc.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek zinkový – ⌀48mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/sloupekgreen.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek zelený ⌀48mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/vzperagreen.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Vzpěra zelená – ⌀38mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/vzperazn.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Vzpěra zinková – ⌀38mm</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/jeklantracit.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek JEKL - antracit</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/jeklzinc.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek JEKL - zinkový</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/jeklgreen.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Sloupek JEKL - zelený</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/dratantra.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Napínací drát – antracit</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/dratgreen.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Napínací drát – zelený</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="sloupky-item">
          <Image
            src={`${basePath}/sloupky/dratzink.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="sloupky-img"
          />
          <p className="sloupky-text">Napínací drát – Zinkový</p>
          <Link href="/form">
            <button className="sloupky-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sloupky;
