import Image from "next/image";
import "../Sass/_desky.scss";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Desky() {
  return (
    <section className="desky">
      <h1 className="desky-title">Podhrabové desky</h1>
      <p className="desky-intro">
        V případě zájmu o podhrabové desky nám odešlete poptávku přes formulář,
        zavolejte, nebo napište email. Materiál jsme schopni Vám ještě ten samý
        den nachystat k vyzvednutí, nebo se rovnou domluvíme na dopravě k Vám,
        do místa určení.
      </p>
      <div className="desky-container">
        <div className="desky-item">
          <Image
            src={`${basePath}/deskyy/deskybeton.webp`}
            alt="Betonové podhrabové desky"
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
            src={`${basePath}/deskyy/drzaky.webp`}
            alt="Držáky podhrabových desek"
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
              src={`${basePath}/deskyy/deskybeton.webp`}
              alt="Betonové podhrabové desky"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Podhrabové desky - betonové</h3>
            <p>
              K oplocení Vašeho pozemku vám můžeme dodat i podhrabové betonové
              desky, což přidává plotu odolnost a ochranu navíc, zároveň dodají
              vašemu plotu i estetiku a upravený vzhled. Na usazování desek jsou
              většinou potřeba 2 lidi.
            </p>
          </div>
        </div>

        <div className="xplain-item">
          <div className="xplain-img">
            <Image
              src={`${basePath}/deskyy/drzaky.webp`}
              alt="Držáky podhrabových desek"
              width={300}
              height={400}
            />
          </div>
          <div className="xplain-text">
            <h3 className="antra">Držáky podhrabových desek</h3>
            <p>
              Držáky na podhrabové desky se dávají mezi sloupky a do těchto
              držáků se následně jednoduše vloží podhrabové desky.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Desky;
