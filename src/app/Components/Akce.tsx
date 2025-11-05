import Link from "next/link";
import "../Sass/_akce.scss";

function Akce() {
  return (
    <div className="akce">
      <h2 className="akce-heading">MOMENTÁLNĚ MÁME PANELY A SLOUPKY V AKCI!</h2>
      <Link href="/AkcePanely">
        <p className="akce-cenik">Zobrazit ceník</p>
      </Link>
    </div>
  );
}

export default Akce;
