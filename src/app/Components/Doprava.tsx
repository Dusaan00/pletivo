import "../Sass/_doprava.scss";
import { RiMapPinLine, RiRoadsterLine, RiRoadsterFill } from "react-icons/ri";

function Doprava() {
  return (
    <section className="section-doprava">
      <div className="doprava-container">
        <h2 className="doprava-h2">Jaké možnosti dopravy můžete zvolit?</h2>
        <ul className="doprava-list">
          <li>
            <div className="doprava-card">
              <div className="doprava-card-icon">
                <RiMapPinLine />
              </div>
              <h3 className="doprava-card-title">
                Osobní odběr na naší adrese
              </h3>
              <p className="doprava-card-text">
                Zakoupený materiál si můžete osobně vyzvednout na adrese naší
                firmy - Grygov, Za Tratí 255, 783 73, vše všední dny od 7:00 do
                16:00, nebo po osobní domluvě.
              </p>
            </div>
          </li>

          <li>
            <div className="doprava-card">
              <div className="doprava-card-icon">
                <RiRoadsterLine />
              </div>
              <h3 className="doprava-card-title">
                Zboží dopravíme na vaši adresu my
              </h3>
              <p className="doprava-card-text">
                Vaše zakoupené zboží doručíme na vaši adresu. Dopravu našimi
                vozidly zajišťujeme do cca 70km od Olomouce.
              </p>
            </div>
          </li>

          <li>
            <div className="doprava-card">
              <div className="doprava-card-icon">
                <RiRoadsterFill />
              </div>
              <h3 className="doprava-card-title">
                Zboží na vaši adresu dopraví přepravní služba
              </h3>
              <p className="doprava-card-text">
                Vaše zakoupené zboží na vaši adresu doručí přepravní služba, po
                celé ČR.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Doprava;
