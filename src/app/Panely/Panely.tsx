import Image from "next/image";
import "../Sass/_panely.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Panely() {
  return (
    <section className="panely">
      <h1 className="panely-title">Panely 3D/2D</h1>
      <p className="panely-intro">
        V případě zájmu o panely 3D/2D nám odešlete poptávku přes formulář,
        zavolejte, nebo napište email. Panely jsme schopni Vám ještě ten samý
        den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám,
        do místa určení.
      </p>
      <div className="panely-container">
        <div className="panely-item">
          <Image
            src={`${basePath}/pletivaa/panelgreen.png`}
            alt="3D panely v zelené barvě"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Panely 3D - zelené</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/pletivaa/ant.png`}
            alt="Panely 3D antracit"
            width={300}
            height={500}
            className="panely-img gg"
          />
          <p className="panely-text">Panely 3D - antracit</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/pletivaa/zinc.png`}
            alt="Panely 3D zinkové"
            width={300}
            height={500}
            objectFit="cover"
            className="panely-img"
          />
          <p className="panely-text">Panely 3D - zinkové</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/pletivaa/dvad.png`}
            alt="Panely 2D zinkové"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Panely 2D - zinkové</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/sloupky/jeklantracit.webp`}
            alt="Sloupky antracit"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Sloupek JEKL - antracit</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/sloupky/jeklzinc.webp`}
            alt="Sloupky zinkové"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Sloupek JEKL - zinkový</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src={`${basePath}/sloupky/jeklgreen.webp`}
            alt="Sloupky zelené"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Sloupek JEKL - zelený</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>

      <div className="panely-xplain">
        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/panelgreen.png`}
              alt="3D panely v zelené barvě"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Panely 3D - zelené</h3>
            <p>
              3D plotové panely v zelené barvě představují moderní, pevné a
              estetické řešení oplocení. Ideální pro rodinné domy, zahrady i
              firemní areály.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/gg.webp`}
              alt="Panely 3D antracit"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 3D - antracit</h3>
            <p>
              3D plotové panely v antracitové barvě představují moderní, pevné a
              estetické řešení oplocení. Ideální pro rodinné domy, zahrady i
              firemní areály.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/zinc.png`}
              alt="Panely 3D zinkové"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 3D zinkové</h3>
            <p>
              3D panely v zinkovém provedení se vyznačují skvělou odolností vůži
              korozi a dlouhou životností, zároveň je to elegantní a funkční
              řešení pro moderní oplocení rodinných domů, firemních objektů i
              veřejných prostor.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src={`${basePath}/pletivaa/dvad.png`}
              alt="Panely 2D zinkové"
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 2D zinkové</h3>
            <p>
              Tyto 2D zinkové panely mají díky dvojitým vodorovným drátům
              skvělou pevnost, tuhost a odolnost. Tento typ panelu využiteje
              hlavně tam, kde se klade důráz na bezpečnost, jsou tedy vhodné do
              průmyslových areálů, kolem sportovišť a kolem veřejných objektů.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Panely;
