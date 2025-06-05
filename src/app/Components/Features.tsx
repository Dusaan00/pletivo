import "../Sass/_features.scss";
import { basePath } from "../functions/Env";

function Features() {
  return (
    <>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite.svg#icon-assignment`}></use>
          </svg>
          <h4 className="heading--4">Jsme na trhu od roku 1930</h4>
          <p className="feature__text">
            Na trhu jako firma fungujeme už dlouho, takže s výrobou pletiva,
            zámečnictvím, zakázkovou výrobou i se stavbami plotů na klíč máme
            mnoho zkušeností.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite.svg#icon-emoji_events`}></use>
          </svg>
          <h4 className="heading--4">
            Odborně poradíme s výběrem vhodného materiálu
          </h4>
          <p className="feature__text">
            Díky našim mnohaletým zkušenostem jsme schopni profesionálně poradit
            s výběrem materiálu na základě Vašich potřeb a požadavků.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite.svg#icon-handyman`}></use>
          </svg>
          <h4 className="heading--4">Materiál si sami vyrábíme</h4>
          <p className="feature__text">
            Pletivo si vyrábíme sami, stejně tak například brány, branky a další
            věci spojené se stavbami oplocení a zámečnictvím. Za kvalitu
            materiálu ručíme. Dále dodáváme veškeré doplňky a příslušenství pro
            ploty a oplocení.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite2.svg#icon-talks`}></use>
          </svg>
          <h4 className="heading--4">Osobní konzultace</h4>
          <p className="feature__text">
            Pošlete nám nezávaznou poptávku přes formulář, zavolejte nám, nebo
            nám napište email. Na zprávy přes online formulář a emaily
            odpovídáme nejpozději do 24 hodin ve všední dny. Samozřejmostí je i
            možnost vše osobně prokonzultovat.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite.svg#icon-brightness_high`}></use>
          </svg>
          <h4 className="heading--4">Zakázková výroba</h4>
          <p className="feature__text">
            Značné množství objednávek zpracováváme na zakázky. Většinou se
            jedná o pletiva, panely 3D/2D, brány, branky a další věci spojené se
            stavbami oplocení a zámečnictvím. Zakázky plníme pro soukromé osoby
            i firmy.
          </p>
        </div>

        <div className="feature">
          <svg className="feature__icon">
            <use href={`${basePath}/sprite.svg#icon-location_on`}></use>
          </svg>
          <h4 className="heading--4">
            Sídlo máme v obci Grygov (u Olomouce), doprava po celé České
            Republice
          </h4>
          <p className="feature__text">
            Dopravu objednaného materiálu Vám můžeme zajistit po celé ČR. Je
            možné si však materiál klidně osobně přijet vyzvednout do Grygova.
          </p>
        </div>
      </section>
      <div className="openings">
        <h2 className="openings__item">PROVOZNÍ HODINY:</h2>
        <p className="openings__item">Pondělí - Pátek</p>
        <p className="openings__item openings__hodiny">
          7:30 - 16:00 nebo po tel. domluvě
        </p>
      </div>
    </>
  );
}

export default Features;
