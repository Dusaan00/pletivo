import "../Sass/_proc.scss";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../functions/Env";

function Proc() {
  return (
    <section className="why">
      <div className="why-wrap">
        <div className="why-heading-wrapper">
          <h2 className="why-heading">Proč naše firma?</h2>
        </div>
        <div className="why-container">
          <div className="why-container-item">
            <div className="why-icon">
              <img src={`${basePath}/why/handshake.png`}></img>
            </div>
            <h3>Zkušenosti</h3>
            <p>
              Na trhu jsme už dlouho, takže máme potřebné zkušenosti a
              kompetence k tomu, vám správně poradit s výběrem materiálu a
              stavbou oplocení. Zároveň dokážeme předvídat a předcházet
              komplikace, které pří stavbách oplocení mohou nastat.
            </p>
          </div>

          <div className="why-container-item">
            <div className="why-icon">
              <img src={`${basePath}/why/circle.png`}></img>
            </div>
            <h3>Specializace</h3>
            <p>
              Specializujeme se výhradně na ploty z pletiva a plotových panelů.
              Díky tomuto úzkému soustředění dokážeme zajistit vysokou kvalitu
              provedení práce a odborné poradenství při výběru vhodného
              oplocení.
            </p>
          </div>

          <div className="why-container-item">
            <div className="why-icon">
              <img src={`${basePath}/why/conversation.png`}></img>
            </div>
            <h3>Komunikace</h3>
            <p>
              Během spolupráce s námi můžete vždy očekávat vstřícný, zákaznicky
              orientovaný přístup.
            </p>
          </div>

          <div className="why-container-item">
            <div className="why-icon">
              <img src={`${basePath}/why/teamwork.png`}></img>
            </div>
            <h3>B2B & B2C</h3>
            <p>
              Kompletní oplocení dodáváme jak soukromým osobám, tak i firmám.
              Pro firemní zákazníky dokážeme zajistit dodávky materiálu ve
              větších objemech potřebných pro realizace oplocení, rádi s vámi
              navážeme spolupráci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Proc;
