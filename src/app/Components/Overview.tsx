import "../Sass/_overview.scss";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Overview() {
  return (
    <div className="over-container">
      <h1 className="over-title">Naše produkty</h1>
      <div className="over-grid">
        <div className="over-item">
          <Link href="/Pletivo">
            <Image
              src={`${basePath}/pletivaa/pletvo.webp`}
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej pletiva"
            />
          </Link>
          <h2 className="over-subtitle">Pletiva</h2>
        </div>

        <div className="over-item">
          <Link href="/Panely3D2D">
            <Image
              src={`${basePath}/panely-pletivo-grygov.png`}
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej panelů 3D/2D"
            />
          </Link>
          <h2 className="over-subtitle">
            Panely 3D/2D -{" "}
            <Link href="/AkcePanely" className="akce-red">
              nyní v akci
            </Link>
          </h2>
        </div>

        <div className="over-item">
          <Link href="/Brany">
            <Image
              src={`${basePath}/gates/ggate.webp`}
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej brán a branek"
            />
          </Link>
          <h2 className="over-subtitle">Brány & Branky</h2>
        </div>

        <div className="over-item">
          <Link href="/PodhraboveDesky">
            <Image
              src={`${basePath}/podhrabove-desky-pletivo-grygov.jpg`}
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej podhrabových desek"
              loading="lazy"
            />
          </Link>
          <h2 className="over-subtitle">Podhrabové desky</h2>
        </div>

        <div className="over-item">
          <Link href="/SloupkyPrislusenstvi">
            <Image
              src={`${basePath}/sloupky-pletivo-grygov.jpg`}
              width={350}
              height={350}
              className="over-photo"
              alt="Sloupky k oplocení na prodej"
              loading="lazy"
            />
          </Link>
          <h2 className="over-subtitle">Sloupky & příslušenství</h2>
        </div>

        <div className="over-item">
          <Link
            href="https://ploty-grygov.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${basePath}/stavby-pletivo-grygov.png`}
              width={350}
              height={350}
              className="over-photo"
              alt="Stavby plotů na klíč"
              loading="lazy"
            />
          </Link>
          <h2 className="over-subtitle">Stavby plotů na klíč</h2>
        </div>

        <div className="over-item">
          <Link href="/MobilniOploceni">
            <Image
              src={`${basePath}/mobile/mobile.png`}
              width={350}
              height={350}
              className="over-photo"
              alt="Mobilní oplocení"
              loading="lazy"
            />
          </Link>
          <h2 className="over-subtitle">Mobilní oplocení</h2>
        </div>
      </div>
    </div>
  );
}

export default Overview;
