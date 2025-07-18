import Image from "next/image";
import "../Sass/_gates.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Gates() {
  return (
    <section className="gates">
      <h1 className="gates-title">Brány & branky</h1>
      <p className="gates-intro">
        Brány a branky vyrábíme převážně na zakázku. Níže můžete vidět příklady
        bran a branek, které pro Vás můžeme realizovat i společně s kompletní
        stavbou oplocení. Dodáváme brány dvoukřídlé i jednokřídlé.
      </p>
      <div className="gates-container">
        <div className="gates-item">
          <Image
            src={`${basePath}/gates/gatentracit.webp`}
            alt="Brána dvoukřídlá antracit"
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
            alt="Branka Zinková"
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
            alt="Branka s výplní ze svařovaného pletiva"
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
            alt="Jeklová branka"
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
            alt="Jeklová brána"
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
            alt="Jeklová brána"
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
            alt="Jeklová brána"
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
            alt="Jeklová brána"
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
