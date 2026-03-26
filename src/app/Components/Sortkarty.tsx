import Link from "next/link";
import { basePath } from "../functions/Env";
import "../Sass/_sortkarty.scss";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri"; // Import šipky

const categories = [
  {
    href: "/Pletivo",
    label: "Pletiva",
    icon: `${basePath}/sorty/sortpletivo.png`,
  },
  {
    href: "/Panely3D2D",
    label: "Panely 3D / 2D",
    icon: `${basePath}/sorty/sortpanely.png`,
  },
  {
    href: "/SloupkyPrislusenstvi",
    label: "Sloupky",
    icon: `${basePath}/sorty/sortsloupky.png`,
  },
  {
    label: "Napínací dráty",
    icon: `${basePath}/sorty/sortnapinaky.png`,
    subItems: [
      { label: "PVC dráty", href: "/NapinaciDraty" },
      { label: "Zinkové dráty", href: "/NapinaciDratyZinkove" },
    ],
  },
  {
    href: "/Brany",
    label: "Brány & Branky",
    icon: `${basePath}/sorty/sortgates.png`,
  },
  {
    href: "/MobilniOploceni",
    label: "Mobilní oplocení",
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
                  <div className="sortkarta">
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
                  </div>
                  <div className="sortkarta-dropdown">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
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
