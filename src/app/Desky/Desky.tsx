import Image from "next/image";
import "../Sass/_desky.scss";
import Link from "next/link";

function Desky() {
  return (
    <section className="desky">
      <h2 className="desky-title">Podhrabové desky</h2>
      <p className="desky-intro">
        V případě zájmu o materiál nám odešlete poptávku přes formulář,
        zavolejte, nebo napište email. Materiál jsme schopni Vám ještě ten samý
        den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám,
        do místa určení.
      </p>
      <div className="desky-container">
        <div className="desky-item">
          <Image
            src="/deskyy/deskybeton.webp"
            alt="Pletivo zelené"
            width={300}
            height={500}
            className="desky-img"
          />
          <p className="desky-text">Podhrabové desky - betonové</p>
          <Link href="/form">
            <button className="desky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="desky-item">
          <Image
            src="/deskyy/plast.webp"
            alt="Pletivo antracit"
            width={300}
            height={500}
            className="desky-img"
          />
          <p className="desky-text">Podhrabové desky – plastové</p>
          <Link href="/form">
            <button className="desky-button">Odeslat poptávku</button>
          </Link>
        </div>

        <div className="desky-item">
          <Image
            src="/deskyy/drzaky.webp"
            alt="Pletivo Alugreen"
            width={300}
            height={500}
            className="desky-img"
          />
          <p className="desky-text">Držáky podhrabových desek</p>
          <Link href="/form">
            <button className="desky-button">Odeslat poptávku</button>
          </Link>
        </div>
      </div>

      <div className="desky-xplain">
        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src="/deskyy/deskybeton.webp"
              alt="Pletivo zelené"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Podhrabové desky - betonové</h3>
            <p>
              Odolné a estetické pletivo s plastovou vrstvou v tmavě zelené
              barvě, ideální pro zahrady a parky.
            </p>
          </div>
        </div>

        <div className="xplain-item reverse">
          <div className="xplain-img">
            <Image
              src="/deskyy/plast.webp"
              alt="Pletivo antracit"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Podhrabové desky – plastové</h3>
            <p>
              Moderní vzhled s antracitovou barvou, vhodné pro rezidenční i
              komerční použití.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src="/deskyy/drzaky.webp"
              alt="Pletivo Alugreen"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Držáky podhrabových desek</h3>
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

export default Desky;
