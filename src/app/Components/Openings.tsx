import "../Sass/_opens.scss";

function Openings() {
  return (
    <div className="openings">
      <h2 className="openings__item">PROVOZNÍ HODINY:</h2>
      <p className="openings__item">Pondělí - Pátek</p>
      <p className="openings__item openings__hodiny">
        8:00 - 15:30 nebo po tel. domluvě
      </p>
    </div>
  );
}

export default Openings;
