import "../Sass/_pletiva.scss";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Pletiva() {
  return (
    <section className="pletivaa">
      <h2 className="pletivaa-title">Pletiva</h2>
      <p className="pletivaa-intro">
        Pletivo si sami vyrábíme v naší firmě. Mám k dispozici poplastovaná
        pletiva, pletivo alugreen (vyšší cena) a velmi odolné pletivo bezinal ze
        slitiny zinku a hliníku. Dále na zakázku vyrábíme žebérková pletiva. V
        případě zájmu o pletivo nám odešlete poptávku přes formulář, zavolejte,
        nebo napište email. Pletivo jsme schopni Vám ještě ten samý den
        nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám, do
        místa určení.
      </p>
      <div className="pletivaa-container">
        <div className="pletivaa-item">
          <Image
            src={`${basePath}/pletivaa/green.jpg`}
            alt="Pletivo zelené"
            width={300}
            height={500}
            className="pletivaa-img"
          />
          <p className="pletivaa-text">Poplastované pletivo, tmavě zelené</p>
          <Link href="/form">
            <button className="pletivaa-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="pletivaa-item">
          <Image
            src={`${basePath}/pletivaa/antracit.jpg`}
            alt="Pletivo antracit"
            width={300}
            height={500}
            className="pletivaa-img"
          />
          <p className="pletivaa-text">Poplastované pletivo antracit</p>
          <Link href="/form">
            <button className="pletivaa-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="pletivaa-item">
          <Image
            src={`${basePath}/pletivaa/alugreen.jpg`}
            alt="Pletivo Alugreen"
            width={300}
            height={500}
            className="pletivaa-img"
          />
          <p className="pletivaa-text">Pletivo Alugreen</p>
          <Link href="/form">
            <button className="pletivaa-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="pletivaa-item">
          <Image
            src={`${basePath}/pletivaa/bezinal.jpg`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="pletivaa-img"
          />
          <p className="pletivaa-text">Pletivo Bezinal</p>
          <Link href="/form">
            <button className="pletivaa-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="pletivaa-item">
          <Image
            src={`${basePath}/pletivaa/zeberkove.webp`}
            alt="Pletivo Bezinal"
            width={300}
            height={500}
            className="pletivaa-img"
          />
          <p className="pletivaa-text">Žebérkové pletivo</p>
          <Link href="/form">
            <button className="pletivaa-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>

      <div className="pletvaa-xplain">
        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/zelenev.jpg`}
              alt="Pletivo zelené"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Poplastované pletivo zelené</h3>
            <p>
              Klasické zelené pletivo. Je odolné a estetické s plastovou vrstvou
              v tmavě zelené barvě, ideální pro oplocení zahrad i firemních
              objektů.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/antracitv.jpg`}
              alt="Pletivo antracit"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Poplastované pletivo antracit</h3>
            <p>
              Tohle pletivo s moderním vzhledem a antracitovou barvou má skvělé
              využití při oplocení rezidenčních i komerčních objektů.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/alugreenv.jpg`}
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Pletivo Alugreen</h3>
            <p>
              Pletivo Alugreen v kombinaci s hliníkovým vzhledem a zeleným
              povrchem zaručuje vysokou odolnost a zároveň estetický vzhled
              oplocení.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/bezinalv.jpg`}
              alt="Pletivo Bezinal"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Pletivo Bezinal</h3>
            <p>
              Pletivo Bezinal s vrstvou zinku a hliníku poskytuje dlouhodobou
              ochranu proti korozi.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/zeberkove.webp`}
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Žebérkové ploty</h3>
            <p>
              Tento typ pletiva se hodí, jako efektivní a odolné řešení pro
              krytí a zabezpečení prostorů.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pletiva;
