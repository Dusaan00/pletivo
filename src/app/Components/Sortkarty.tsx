import Link from "next/link";
import { basePath } from "../functions/Env";
import "../Sass/_sortkarty.scss";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri"; // Import šipky

const categories = [
  {
    label: "Pletiva",
    href: "/Pletivo",
    icon: `${basePath}/sorty/sortpletivo.png`,
    subItems: [
      { label: "Pletiva PVC", href: "/PletivaPVC" },
      { label: "Pletiva Bezinal (Zinková)", href: "/PletivaBezinal" },
    ],
  },
  {
    label: "Panely 3D / 2D",
    href: "/Panely3D2D",
    icon: `${basePath}/sorty/sortpanely.png`,
    subItems: [
      { label: "Panely PVC 3D", href: "/PanelyProduct" },
      { label: "Panely Zinkové 3D", href: "/PanelyZinkove" },
      { label: "Panely Zinkové 2D", href: "/PanelyZinkove" },
    ],
  },
  {
    label: "Sloupky",
    href: "/SloupkyPrislusenstvi",
    icon: `${basePath}/sorty/sortsloupky.png`,
    subItems: [
      { label: "Sloupky - ploty z pletiva", href: "/PlotoveSloupky" },
      { label: "Sloupky Jekl PVC", href: "/SloupkyProduct" },
      { label: "Sloupky Jekl Zinkové", href: "/SloupkyZinkoveJekl" },
    ],
  },
  {
    label: "Plotová Příslušenství",
    href: "/SloupkyPrislusenstvi",
    icon: `${basePath}/sorty/wire-rod.png`,
    subItems: [
      { label: "Objímky", href: "/Objimky" },
      { label: "Napínací drát PVC", href: "/NapinaciDraty" },
      { label: "Napínací drát zinkový", href: "/NapinaciDratyZinkove" },
      { label: "Vázací dráty", href: "/VazaciDraty" },
      { label: "Napínací kladky", href: "/Kladky" },
      { label: "Příchtky, šroubky", href: "/NapinaciDratyZinkove" },
    ],
  },
  {
    href: "/Brany",
    label: "Brány & Branky",
    icon: `${basePath}/sorty/sortgates.png`,
  },
  {
    href: "/PodhraboveDesky",
    label: "Podhrabové Desky",
    icon: `${basePath}/sorty/gravel.png`,
  },
  {
    href: "/MobilniOploceni",
    label: "Mobilní Oplocení",
    icon: `${basePath}/sorty/sortmobile.png`,
  },
];

function Sortkarty() {
  return (
    <section className="section-sortkarty">
      <div className="sortkarty-container">
        <h2 className="sortkarty-title">
          Přehled sortimentu <span className="title-gradient">Pletivo</span>{" "}
          Grygov
        </h2>

        <div className="sortkarty-grid">
          {categories.map((item) => {
            if (item.subItems) {
              return (
                <div
                  key={item.label}
                  className="sortkarta-wrapper"
                  tabIndex={0}
                >
                  <Link href={item.href || "#"} className="sortkarta">
                    <div className="sortkarta-icon">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={30}
                        height={30}
                      />
                    </div>
                    <span className="sortkarta-text">{item.label}</span>
                    <RiArrowDownSLine className="sortkarta-arrow" />
                  </Link>
                  <div className="sortkarta-dropdown">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="dropdown-item"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="sortkarta"
              >
                <div className="sortkarta-icon">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                </div>
                <span className="sortkarta-text">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sortkarty;
