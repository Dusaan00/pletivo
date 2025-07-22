import Link from "next/link";
import "../Sass/_header.scss";
import Dropdown from "../functions/Dropdown";
import { basePath } from "../functions/Env";
import NavbarScroll from "../functions/NavbarScroll";

function Header() {
  return (
    <>
      <NavbarScroll />
      <header className="header" id="hdr">
        <div className="container-ploty">
          <p className="heeding">
            <Link href="/" className="heeding-link">
              <span className="plot-title">Pletivo</span>Grygov
            </Link>
          </p>
          <Link href="/form" className="heeder__link">
            <svg className="heeder__icon">
              <use href={`${basePath}/sprite.svg#icon-call`}></use>
            </svg>
            <p className="phone"> +420 608 705 547</p>
          </Link>
          <Link href="/" className="home">
            <svg className="home-icon">
              <use href={`${basePath}/sprite2.svg#icon-home`}></use>
            </svg>
            <p className="domuu">DOMŮ</p>
          </Link>
        </div>

        <nav className="user-nav">
          <ul className="user-nav__box">
            <Dropdown
              triggerText="Sortiment"
              defaultHref="/Prehled"
              items={[
                { href: "/Cenik", label: "Ceník" },
                { href: "/Pletivo", label: "Pletiva" },
                { href: "/Panely3D2D", label: "Panely 3D/2D" },
                { href: "/Brany", label: "Brány & Branky" },
                { href: "/PodhraboveDesky", label: "Podhrabové desky" },
                {
                  href: "/SloupkyPrislusenstvi",
                  label: "Sloupky & příslušenství",
                },
                { href: "/MobilniOploceni", label: "Mobilní oplocení" },
              ]}
            />
            <li className="user-nav__box--item">
              <Link href="/About" className="user-nav__box--link">
                O firmě
              </Link>
            </li>
            <li className="user-nav__box--item">
              <Link href="/form" className="user-nav__box--link">
                Kontakty
              </Link>
            </li>
            <li className="user-nav__box--item">
              <Link href="/form" className="user-nav__box--link">
                <span className="inquiry-bold">Odeslat poptávku</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
