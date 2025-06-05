import Image from "next/image";
import "../Sass/_gates.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Gates() {
  return (
    <section className="gates">
      <h2 className="gates-title">Brány & branky</h2>
      <p className="gates-intro">
        Brány a branky vyrábíme převážně na zakázku dle konkretních potřeb
        zákazníka. Níže můžete vidět příklady bran a branek, které pro Vás
        můžeme realizovat i společně s montáží.
      </p>
      <div className="gates-container">
        <div className="gates-item">
          <Image
            src={`${basePath}/gates/gatentracit.webp`}
            alt="Pletivo zelené"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">
            Brána dvoukřídlá - Antracit - svařované pletivo
          </p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/gatezn.webp`}
            alt="Pletivo antracit"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Branka Zinková</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/brankavypln.webp`}
            alt="Pletivo Alugreen"
            width={300}
            height={500}
            objectFit="cover"
            className="gates-img"
          />
          <p className="gates-text">Branka – výplň svařované pletivo</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/jekl.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Jeklová branka/brána – laťka</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/ggate.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Jeklová brána/branka – výplň panel</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/jeklgate.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Jeklová brána/branka</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/jeklgateii.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Jeklová brána/branka</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="gates-item">
          <Image
            src={`${basePath}/gates/jeklgg.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="gates-img"
          />
          <p className="gates-text">Jeklová brána</p>
          <Link href="/form">
            <button className="gates-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gates;
