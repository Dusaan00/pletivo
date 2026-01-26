import "../Sass/_overview.scss";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Overview() {
  return (
    <section className="over-wrapper">
      <div className="over-title">
        <h1 className="over-title-h1">Jaké oplocení hledáte?</h1>
      </div>

      <div className="over-grid">
        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img src={`${basePath}/land/pletvo.webp`} alt="Pletivo PVC" />
          </div>
          <div className="product-details">
            <h2>Pletiva PVC</h2>
            <ul className="product-features">
              <li>Poplastované pletivo</li>
              <li>Efektivní, cenově dostupné oplocení</li>
              <li>Dostupné výšky od 1 m do 2 m</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img
              src={`${basePath}/land/bezinalv.webp`}
              alt="Pletivo zinkové bezinal"
            />
          </div>
          <div className="product-details">
            <h2>Pletiva Bezinal</h2>
            <ul className="product-features">
              <li>Velice odolné, ideální pro průmyslové oblasti</li>
              <li>Efektivní, cenově dostupné oplocení</li>
              <li>Dostupné výšky od 1 m do 2 m</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img src={`${basePath}/panelyintroo.png`} alt="Panely 3D" />
          </div>
          <div className="product-details">
            <h2>Panely 3D/2D</h2>
            <ul className="product-features">
              <li>Panely PVC a zinkové</li>
              <li>Estetické a moderní oplocení</li>
              <li>Možnost postavit i s podhrabovými deskami</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img
              src={`${basePath}/land/zeberkove.webp`}
              alt="Žebérkové pletivo"
            />
          </div>
          <div className="product-details">
            <h2>Žeberkové oplocení</h2>
            <ul className="product-features">
              <li>
                Efektivní řešení zabezpečení různých prostor vašeho pozemku
              </li>
              <li>Vyrábíme a dodáváme na objednávku</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img src={`${basePath}/land/mobile.webp`} alt="Mobilní oplocení" />
          </div>
          <div className="product-details">
            <h2>Mobilní oplocení</h2>
            <ul className="product-features">
              <li>Rychlé řešení zabezpečení a ohrazení prostor</li>
              <li>Vhodné pro stavby, akce i soukromé účely</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="over-product">
          <div className="over-overlay"></div>
          <div className="product-img">
            <img
              src={`${basePath}/land/sloupkyland.webp`}
              alt="Mobilní oplocení"
            />
          </div>
          <div className="product-details">
            <h2>Sloupky a příslušenství</h2>
            <ul className="product-features">
              <li>Vše nezbytné pro kompletní montáž plotu</li>
              <li>Sloupky, podhrabové desky, vázací dráty, atd.</li>
            </ul>
            <div className="product-btn">
              <Link href="/Prehled">
                <button className="product-btnbtn">Detaily produktu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
