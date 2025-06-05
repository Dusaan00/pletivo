import "../Sass/_overview.scss";
import Image from "next/image";
import Link from "next/link";

function Overview() {
  return (
    <div className="over-container">
      <h1 className="over-title">Naše produkty</h1>
      <div className="over-grid">
        <div className="over-item">
          <Link href="/PletivaPage">
            <Image
              src="./pletivo-grygov.jpg"
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej pletiva"
            />
          </Link>
          <h2 className="over-subtitle">Pletiva</h2>
        </div>

        <div className="over-item">
          <Link href="/PanelyPage">
            <Image
              src="./panely-pletivo-grygov.png"
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej panelů 3D/2D"
            />
          </Link>
          <h2 className="over-subtitle">Panely 3D/2D</h2>
        </div>

        <div className="over-item">
          <Link href="/GatesPage">
            <Image
              src="./gates/ggate.webp"
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej brán a branek"
            />
          </Link>
          <h2 className="over-subtitle">Brány & Branky</h2>
        </div>

        <div className="over-item">
          <Link href="/DeskyPage">
            <Image
              src="./podhrabove-desky-pletivo-grygov.jpg"
              width={350}
              height={350}
              className="over-photo"
              alt="Prodej podhrabových desek"
            />
          </Link>
          <h2 className="over-subtitle">Podhrabové desky</h2>
        </div>

        <div className="over-item">
          <Link href="/SloupkyPage">
            <Image
              src="./sloupky-pletivo-grygov.jpg"
              width={350}
              height={350}
              className="over-photo"
              alt="Sloupky k oplocení na prodej"
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
              src="./stavby-pletivo-grygov.png"
              width={350}
              height={350}
              className="over-photo"
              alt="Stavby plotů na klíč"
            />
          </Link>
          <h2 className="over-subtitle">Stavby plotů na klíč</h2>
        </div>
      </div>
    </div>
  );
}

export default Overview;
