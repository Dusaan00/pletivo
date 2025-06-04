import "../Sass/_pletiva.scss";
import Image from "next/image";
import Link from "next/link";

function Pletiva() {
  return (
    <section className="pletivaa">
      <h2 className="pletivaa-title">Pletiva</h2>
      <p className="pletivaa-intro">
        V případě zájmu o materiál nám odešlete poptávku přes formulář,
        zavolejte, nebo napište email. Materiál jsme schopni Vám ještě ten samý
        den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám,
        do místa určení. Minimální délka pletiva, co se u nás dá zakoupit, je X
        m.
      </p>
      <div className="pletivaa-container">
        <div className="pletivaa-item">
          <Image
            src="/pletivaa/green.jpg"
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
            src="/pletivaa/antracit.jpg"
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
            src="/pletivaa/alugreen.jpg"
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
            src="/pletivaa/bezinal.jpg"
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
            src="/pletivaa/zeberkove.webp"
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
              src="/pletivaa/zelenev.jpg"
              alt="Pletivo zelené"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Poplastované pletivo zelené</h3>
            <p>
              Odolné a estetické pletivo s plastovou vrstvou v tmavě zelené
              barvě, ideální pro zahrady a parky.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src="/pletivaa/antracitv.jpg"
              alt="Pletivo antracit"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Poplastované pletivo antracit</h3>
            <p>
              Moderní vzhled s antracitovou barvou, vhodné pro rezidenční i
              komerční použití.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src="/pletivaa/alugreenv.jpg"
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="green">Pletivo Alugreen</h3>
            <p>
              Kombinace hliníkového vzhledu a zeleného povrchu pro odolnost a
              přírodní integraci.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src="/pletivaa/bezinalv.jpg"
              alt="Pletivo Bezinal"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Pletivo Bezinal</h3>
            <p>
              Pletivo s vrstvou zinku a hliníku poskytující dlouhodobou ochranu
              proti korozi.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src="/pletivaa/zeberkove.webp"
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Žebérkové ploty</h3>
            <p>
              Kombinace hliníkového vzhledu a zeleného povrchu pro odolnost a
              přírodní integraci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pletiva;
