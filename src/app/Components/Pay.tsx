import "../Sass/_pay.scss";
import { RiPhoneLine, RiMailLine, RiSendPlaneFill } from "react-icons/ri";

function Pay() {
  return (
    <section className="section-pay">
      <div className="pay-container">
        <h2 className="pay-h2">Další formy nákupu:</h2>
        <p className="exp">
          Vybrané skladové produkty objednáte online přes košík a jednoduchou
          pokladnu. U větších, atypických nebo montážních zakázek můžete zároveň
          využít i některou z následujících přímých cest:
        </p>
        <ul className="pay-list">
          <li>
            <div className="pay-card">
              <div className="pay-card-icon">
                <RiPhoneLine />
              </div>
              <h3 className="pay-card-title">Zavolejte nám</h3>
              <p className="pay-card-text">
                Pro objednávku/poptávku zboží nám můžete zavolat na tel. +420
                608 474 760, na telefonu jsme dostupní během pracovních dnů od
                7:00 do 16:00.
              </p>
            </div>
          </li>

          <li>
            <div className="pay-card">
              <div className="pay-card-icon">
                <RiMailLine />
              </div>
              <h3 className="pay-card-title">Napište email</h3>
              <p className="pay-card-text">
                Objednávku/poptávku můžete zaslat na náš email -
                plotygrygov@gmail.com. Během pracovních dnů na veškeré emaily
                odpovídáme do 24h.
              </p>
            </div>
          </li>

          <li>
            <div className="pay-card">
              <div className="pay-card-icon">
                <RiSendPlaneFill />
              </div>
              <h3 className="pay-card-title">Vyplňte kontaktní formulář</h3>
              <p className="pay-card-text">
                Pro objednávku/poptávku zboží můžete jednoduše vyplnit kontaktní
                formulář hned tady na našich stránkách a my se vám obratem
                ozveme zpět.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Pay;
