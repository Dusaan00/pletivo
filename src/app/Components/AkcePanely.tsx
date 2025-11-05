import "../Sass/_akcepanely.scss";
import Image from "next/image";
import { basePath } from "../functions/Env";

function AkcePanely() {
  return (
    <div className="akce-panely-container">
      <div className="akce-panely-container-titles">
        <h2 className="akce-panely-title">Panely a sloupky nyní v akci</h2>
        <p className="akce-panely-text">
          Momentálně máme následující panely a sloupky za akční ceny, ihned k
          odběru
        </p>
      </div>
      <div className="list-container">
        <h3 className="list-container-nadpisy">Panely</h3>
        <ul className="akce-panely-list">
          <li>
            <span>
              Panel pvc 1530/2500 drát 4,0 mm, barva{" "}
              <span className="zelena">tmavá zelená</span>, cena 495,- Kč
            </span>
          </li>
          <li>
            <span>
              Panel pvc 1730/2500 drát 4,0 mm, barva{" "}
              <span className="zelena">tmavá zelená</span>, cena 525,- Kč
            </span>
          </li>
          <li>
            <span>
              Panel pvc 1530/2500 drát 4,0 mm, barva{" "}
              <span className="ntracit">antracit</span>, cena 495,- Kč
            </span>
          </li>
          <li>
            <span>
              Panel pvc 1730/2500 drát 4,0 mm, barva{" "}
              <span className="ntracit">antracit</span>, cena 525,- Kč
            </span>
          </li>
        </ul>
        <h3 className="list-container-nadpisy">
          Sloupky - <span className="zelena">tmavě zelené</span> a{" "}
          <span className="ntracit">antracitové</span>
        </h3>
        <ul className="akce-panely-list">
          <li>
            <span>Sloupek pvc 60x40/2000 cena od 255,- Kč</span>
          </li>
          <li>
            <span>Sloupek pvc 60x40/2300 cena od 285,- Kč</span>
          </li>
          <li>
            <span>Sloupek pvc 60x40/2600 cena od 335,- Kč</span>
          </li>
        </ul>
      </div>
      <p className="akce-panely-contact">
        V případě zájmu volejte na tel. +420 608 474 760
      </p>
      <div className="images-grid">
        <Image
          src={`${basePath}/panely/panely3.jpg`}
          alt="Panel tmavě zelený"
          width={500} // Optimální šířka pro Next.js Image (uprav podle potřeby)
          height={300} // Zachovej aspect ratio
          className="grid-image"
        />
        <Image
          src={`${basePath}/panely/panelyy2.jpg`}
          alt="Panel antracit"
          width={500}
          height={300}
          className="grid-image"
        />
        <Image
          src={`${basePath}/panely/panely4.jpg`}
          alt="Sloupek tmavě zelený"
          width={500}
          height={300}
          className="grid-image"
        />
        <Image
          src={`${basePath}/panely/panelyy.jpg`}
          alt="Sloupek antracit"
          width={500}
          height={300}
          className="grid-image"
        />
      </div>
    </div>
  );
}

export default AkcePanely;
