import Link from "next/link";
import { basePath } from "../functions/Env";
import "../Sass/_sortkarty.scss";
import Image from "next/image";

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
    href: "/SloupkyPrislusenstvi",
    label: "Napínací dráty",
    icon: `${basePath}/sorty/sortnapinaky.png`,
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
        <h2 className="sortkarty-title">Přehled sortimentu Pletivo Grygov</h2>

        <div className="sortkarty-grid">
          {categories.map((item) => (
            <Link key={item.label} href={item.href} className="sortkarta">
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
          ))}
        </div>
      </div>
    </section>
  );
}
export default Sortkarty;
