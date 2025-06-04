import Image from "next/image";
import "../Sass/_panely.scss";
import Link from "next/link";

function Panely() {
  return (
    <section className="panely">
      <h2 className="panely-title">Panely 3D/2D</h2>
      <p className="panely-intro">
        V případě zájmu o materiál nám odešlete poptávku přes formulář,
        zavolejte, nebo napište email. Materiál jsme schopni Vám ještě ten samý
        den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám,
        do místa určení.
      </p>
      <div className="panely-container">
        <div className="panely-item">
          <Image
            src="/pletivaa/panelgreen.png"
            alt="Pletivo zelené"
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
            src="/pletivaa/gg.webp"
            alt="Pletivo antracit"
            width={300}
            height={500}
            className="panely-img"
          />
          <p className="panely-text">Panely 3D - antracit</p>
          <Link href="/form">
            <button className="panely-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="panely-item">
          <Image
            src="/pletivaa/zinc.png"
            alt="Pletivo Alugreen"
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
            src="/pletivaa/dvad.png"
            alt="Pletivo Bezinal"
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
            src="/sloupky/jeklantracit.webp"
            alt="Pletivo Bezinal"
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
            src="/sloupky/jeklzinc.webp"
            alt="Pletivo Bezinal"
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
            src="/sloupky/jeklgreen.webp"
            alt="Pletivo Bezinal"
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
              src="/pletivaa/panelgreen.png"
              alt="Pletivo zelené"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Panely 3D - zelené</h3>
            <p>
              Odolné a estetické pletivo s plastovou vrstvou v tmavě zelené
              barvě, ideální pro zahrady a parky.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src="/pletivaa/gg.webp"
              alt="Pletivo antracit"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 3D - antracit</h3>
            <p>
              Moderní vzhled s antracitovou barvou, vhodné pro rezidenční i
              komerční použití.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src="/pletivaa/zinc.png"
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 3D - zinkové</h3>
            <p>
              Kombinace hliníkového vzhledu a zeleného povrchu pro odolnost a
              přírodní integraci.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src="/pletivaa/dvad.png"
              alt="Pletivo Bezinal"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Panely 2D - zinkové</h3>
            <p>
              Pletivo s vrstvou zinku a hliníku poskytující dlouhodobou ochranu
              proti korozi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Panely;
