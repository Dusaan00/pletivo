import "../Sass/_features.scss";
import { basePath } from "../functions/Env";

function Features() {
  return (
    <>
      <section className="features">
        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/wire.png`}></img>
          </div>
          <h4 className="heading--4">Český výrobce pletiva</h4>
          <p className="feature__text">
            Pletiva PVC a Bezinal vyrábíme v našich dilnách. Pletiva pleteme na
            spolehlivých strojích z Německa, které zaručují maximální tuhost
            drátu.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/trophy.png`}></img>
          </div>

          <h4 className="heading--4">Pomůžeme vám vybrat vhodné oplocení</h4>
          <p className="feature__text">
            Díky dlouholetým zkušenostem jsme se setkali s různými problémy a
            situacemi, proto vám odborně poradíme s konkrétním řešením vašeho
            problemu.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/in-stock.png`}></img>
          </div>

          <h4 className="heading--4">Kompletní materiál pro stavbu plotu</h4>
          <p className="feature__text">
            Velkou část sortimentu udržujeme skladem, takže je materiál možno
            odebrat ihned. Můžete u nás zakoupit všechna nezbytná příslušenství
            pro kompletní stavbu oplocení.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/calculator.png`}></img>
          </div>
          <h4 className="heading--4">Kalkulace ceny na míru</h4>
          <p className="feature__text">
            Na základě vašich požadavků připravíme přesnou kalkulaci dodávky
            oplocení i stavby plotu. Zašlete nám poptávku a my pro vás obratem
            přípravíme nabídku na míru.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/order-delivery.png`}></img>
          </div>
          <h4 className="heading--4">Zakázková výroba</h4>
          <p className="feature__text">
            Některé objednávky zpracováváme na zakázku. Může se jednat např. o
            brány, branky, žebérková pletiva a další věci spojené se
            zámečnictvím. Zakázky plníme pro soukromé osoby i firmy.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon">
            <img src={`${basePath}/features/location.png`}></img>
          </div>
          <h4 className="heading--4">Jsme z obce Grygov (u Olomouce)</h4>
          <p className="feature__text">
            Objednaný materiál si můžete vyzvednout na adrese naší firmy nebo
            zajistímě dopravu k vám. Dopravu objednaného materiálu Vám můžeme
            zajistit po celé ČR.
          </p>
        </div>
      </section>
      <div className="openings">
        <h2 className="openings__item">PROVOZNÍ HODINY:</h2>
        <p className="openings__item">Pondělí - Pátek</p>
        <p className="openings__item openings__hodiny">
          8:00 - 15:30 nebo po tel. domluvě
        </p>
      </div>
    </>
  );
}

export default Features;
