import "../Sass/_cenik.scss";

const Cenik = () => {
  const pletivaData = [
    {
      name: "Pletivo zelené PVC 1.00m-2,5-55",
      unitPrice: 53.0,
      m2: 25.0,
      totalDPH: 1325.0,
      dph: "21%",
    },
    {
      name: "Pletivo zelené PVC 1.25m-2,5-55",
      unitPrice: 66.0,
      m2: 25.0,
      totalDPH: 1650.0,
      dph: "21%",
    },
    {
      name: "Pletivo zelené PVC 1.50m-2,5-55",
      unitPrice: 79.0,
      m2: 25.0,
      totalDPH: 1975.0,
      dph: "21%",
    },
    {
      name: "Pletivo zelené PVC 1.60m-2,5-55",
      unitPrice: 84.0,
      m2: 25.0,
      totalDPH: 2100.0,
      dph: "21%",
    },
    {
      name: "Pletivo zelené PVC 1.80m-2,5-55",
      unitPrice: 94.0,
      m2: 25.0,
      totalDPH: 2350.0,
      dph: "21%",
    },
    {
      name: "Pletivo zelené PVC 2.00m-2,5-55",
      unitPrice: 105.0,
      m2: 25.0,
      totalDPH: 2625.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 1.00m-2,7-55",
      unitPrice: 53.0,
      m2: 25.0,
      totalDPH: 1325.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 1.25m-2,7-55",
      unitPrice: 66.0,
      m2: 25.0,
      totalDPH: 1650.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 1.50m-2,7-55",
      unitPrice: 79.0,
      m2: 25.0,
      totalDPH: 1975.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 1.60m-2,5-55",
      unitPrice: 84.0,
      m2: 25.0,
      totalDPH: 2100.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 1.80m-2,5-55",
      unitPrice: 94.0,
      m2: 25.0,
      totalDPH: 2350.0,
      dph: "21%",
    },
    {
      name: "Pletivo antracit 2.00m-2,5-55",
      unitPrice: 105.0,
      m2: 25.0,
      totalDPH: 2625.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.00m-2,0-55",
      unitPrice: 62.0,
      m2: 1,
      totalDPH: 62.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.25m-2,0-55",
      unitPrice: 78.0,
      m2: 1,
      totalDPH: 78.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.50m-2,0-55",
      unitPrice: 93.0,
      m2: 1,
      totalDPH: 93.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.60m-2,0-55",
      unitPrice: 99.0,
      m2: 1,
      totalDPH: 99.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.80m-2,0-55",
      unitPrice: 112.0,
      m2: 1,
      totalDPH: 112.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 2.00m-2,0-55",
      unitPrice: 124.0,
      m2: 1,
      totalDPH: 124.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.00m-2,2-55",
      unitPrice: 80.0,
      m2: 1,
      totalDPH: 80.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.25m-2,2-55",
      unitPrice: 100.0,
      m2: 1,
      totalDPH: 100.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.50m-2,2-55",
      unitPrice: 120.0,
      m2: 1,
      totalDPH: 120.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.60m-2,2-55",
      unitPrice: 128.0,
      m2: 1,
      totalDPH: 128.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 1.80m-2,2-55",
      unitPrice: 144.0,
      m2: 1,
      totalDPH: 144.0,
      dph: "21%",
    },
    {
      name: "Pletivo bezinal 2.00m-2,2-55",
      unitPrice: 160.0,
      m2: 1,
      totalDPH: 160.0,
      dph: "21%",
    },
  ];

  const panelyData = [
    {
      name: "Panely 3D zelené 1030/2500",
      unitPrice: 490.0,
      totalDPH: 490.0,
      dph: "21%",
    },
    {
      name: "Panely 3D zelené 1230/2500",
      unitPrice: 530.0,
      totalDPH: 530.0,
      dph: "21%",
    },
    {
      name: "Panely 3D zelené 1530/2500",
      unitPrice: 580.0,
      totalDPH: 580.0,
      dph: "21%",
    },
    {
      name: "Panely 3D zelené 1730/2500",
      unitPrice: 620.0,
      totalDPH: 620.0,
      dph: "21%",
    },
    {
      name: "Panely 3D zelené 2030/2500",
      unitPrice: 690.0,
      totalDPH: 690.0,
      dph: "21%",
    },
    {
      name: "Panely 3D antracit 1030/2500",
      unitPrice: 490.0,
      totalDPH: 490.0,
      dph: "21%",
    },
    {
      name: "Panely 3D antracit 1230/2500",
      unitPrice: 530.0,
      totalDPH: 530.0,
      dph: "21%",
    },
    {
      name: "Panely 3D antracit 1530/2500",
      unitPrice: 580.0,
      totalDPH: 580.0,
      dph: "21%",
    },
    {
      name: "Panely 3D antracit 1730/2500",
      unitPrice: 620.0,
      totalDPH: 620.0,
      dph: "21%",
    },
    {
      name: "Panely 3D antracit 2030/2500",
      unitPrice: 690.0,
      totalDPH: 690.0,
      dph: "21%",
    },
  ];

  const sloupkyData = [
    {
      name: "Sloupek PVC 48/1500 zelený + ucpávka",
      unitPrice: 170.0,
      totalDPH: 170.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/1750 zelený + ucpávka",
      unitPrice: 195.0,
      totalDPH: 195.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2000 zelený + ucpávka",
      unitPrice: 215.0,
      totalDPH: 215.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2300 zelený + ucpávka",
      unitPrice: 250.0,
      totalDPH: 250.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2500 zelený + ucpávka",
      unitPrice: 285.0,
      totalDPH: 285.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/1500 antracit + ucpávka",
      unitPrice: 180.0,
      totalDPH: 180.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/1750 antracit + ucpávka",
      unitPrice: 205.0,
      totalDPH: 205.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2000 antracit + ucpávka",
      unitPrice: 225.0,
      totalDPH: 225.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2300 antracit + ucpávka",
      unitPrice: 260.0,
      totalDPH: 260.0,
      dph: "21%",
    },
    {
      name: "Sloupek PVC 48/2500 antracit + ucpávka",
      unitPrice: 295.0,
      totalDPH: 295.0,
      dph: "21%",
    },
    {
      name: "Sloupek zelený PVC 60x40/2000",
      unitPrice: 280.0,
      totalDPH: 280.0,
      dph: "21%",
    },
    {
      name: "Sloupek zelený PVC 60x40/2300",
      unitPrice: 315.0,
      totalDPH: 315.0,
      dph: "21%",
    },
    {
      name: "Sloupek zelený PVC 60x40/2600",
      unitPrice: 360.0,
      totalDPH: 360.0,
      dph: "21%",
    },
    {
      name: "Sloupek antracit PVC 60x40/2000",
      unitPrice: 280.0,
      totalDPH: 280.0,
      dph: "21%",
    },
    {
      name: "Sloupek antracit PVC 60x40/2300",
      unitPrice: 315.0,
      totalDPH: 315.0,
      dph: "21%",
    },
    {
      name: "Sloupek antracit PVC 60x40/2600",
      unitPrice: 360.0,
      totalDPH: 360.0,
      dph: "21%",
    },
    {
      name: "Objímka zelená PVC 60x40 mm průběžná",
      unitPrice: 55.0,
      totalDPH: 55.0,
      dph: "21%",
    },
    {
      name: "Objímka antracit PVC 60x40 mm průběžná",
      unitPrice: 55.0,
      totalDPH: 55.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/1750 zelená + krytka + objímka",
      unitPrice: 185.0,
      totalDPH: 185.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2000 zelená + krytka + objímka",
      unitPrice: 205.0,
      totalDPH: 205.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2300 zelená + krytka + objímka",
      unitPrice: 230.0,
      totalDPH: 230.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2500 zelená + krytka + objímka",
      unitPrice: 250.0,
      totalDPH: 250.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/1750 antracit + krytka + objímka",
      unitPrice: 195.0,
      totalDPH: 195.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2000 antracit + krytka + objímka",
      unitPrice: 205.0,
      totalDPH: 205.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2300 antracit + krytka + objímka",
      unitPrice: 250.0,
      totalDPH: 250.0,
      dph: "21%",
    },
    {
      name: "Vzpěra PVC 38/2500 antracit + krytka + objímka",
      unitPrice: 250.0,
      totalDPH: 250.0,
      dph: "21%",
    },
    {
      name: "Napínací drát PVC 26 m",
      unitPrice: 140.0,
      totalDPH: 140.0,
      dph: "21%",
    },
    {
      name: "Napínací drát PVC 52 m",
      unitPrice: 250.0,
      totalDPH: 250.0,
      dph: "21%",
    },
    {
      name: "Napínací drát PVC 78 m",
      unitPrice: 340.0,
      totalDPH: 340.0,
      dph: "21%",
    },
    {
      name: "Napínací drát PVC 52 m antracit",
      unitPrice: 260.0,
      totalDPH: 260.0,
      dph: "21%",
    },
    {
      name: "Napínací drát PVC 78 m antracit",
      unitPrice: 350.0,
      totalDPH: 350.0,
      dph: "21%",
    },
    {
      name: "Napínací šroub PVC",
      unitPrice: 22.0,
      totalDPH: 22.0,
      dph: "21%",
    },
    {
      name: "Napínací šroub PVC antracit",
      unitPrice: 29.0,
      totalDPH: 29.0,
      dph: "21%",
    },
    {
      name: "Vázací drát PVC 50 m",
      unitPrice: 140.0,
      totalDPH: 140.0,
      dph: "21%",
    },
    {
      name: "Příchytka nap. drátu+šroubek",
      unitPrice: 7.0,
      totalDPH: 7.0,
      dph: "21%",
    },
    {
      name: "Objímka PVC 48 mm plechová",
      unitPrice: 22.0,
      totalDPH: 22.0,
      dph: "21%",
    },
    {
      name: "Krytka vzpěry al+pvc 38 mm",
      unitPrice: 45.0,
      totalDPH: 45.0,
      dph: "21%",
    },
    {
      name: "Krytka vzpěry 38 mm",
      unitPrice: 18.0,
      totalDPH: 18.0,
      dph: "21%",
    },
    {
      name: "Ucpávka PVC",
      unitPrice: 20.0,
      totalDPH: 20.0,
      dph: "21%",
    },
  ];

  return (
    <div className="cenik-container">
      <h2 className="title">Pletivo Grygov Ceník</h2>
      <div className="vysvetlivky">
        <h3 className="cenik-container-xplain">Poznámky:</h3>
        <p className="cenik-container-xplain-txt">
          Např. Pletivo zelené PVC 2.00m-2,5-55 má výšku 2 m, průměr drátu 2.5
          mm a velikost oka 55 mm.
        </p>
        <p className="cenik-container-xplain-txt">
          Pletivo zelené a pletivo antracit jsou pletiva poplastovaná.
        </p>
        <p className="cenik-container-xplain-txt">
          1 balík pletiva je dlouhý 25 m (např. 2 balíky = 50 m), pokud však
          budete potřebovat např. 30 m pletiva, kontaktujte nás, a my pro vás
          pletivo o takové délce vyrobíme.
        </p>
      </div>

      <details className="dropdown-section">
        <summary className="dropdown-summary">Pletiva</summary>
        <div className="table-wrapper">
          <div className="table-header">
            <span>Pletivo</span>
            <span>Cena za metr</span>
            <span>Množství</span>
            <span>Celkem s DPH</span>
            <span>DPH</span>
          </div>
          <div className="table-body">
            {pletivaData.map((item, index) => (
              <div key={index} className="table-row">
                <span className="cell nazev">{item.name}</span>
                <span className="cell">{item.unitPrice} Kč</span>
                <span className="cell">{item.m2} m</span>
                <span className="cell">{item.totalDPH} Kč</span>
                <span className="cell">{item.dph}</span>
              </div>
            ))}
          </div>
        </div>
      </details>

      <details className="dropdown-section">
        <summary className="dropdown-summary">Panely 3D/2D</summary>
        <div className="table-wrapper">
          <div className="table-header">
            <span>Panely 3D/2D</span>
            <span>Cena za kus</span>

            <span>Celkem s DPH</span>
            <span>DPH</span>
          </div>
          <div className="table-body">
            {panelyData.map((item, index) => (
              <div key={index} className="table-row">
                <span className="cell nazev">{item.name}</span>
                <span className="cell">{item.unitPrice} Kč</span>
                <span className="cell">{item.totalDPH} Kč</span>
                <span className="cell">{item.dph}</span>
              </div>
            ))}
          </div>
        </div>
      </details>

      <details className="dropdown-section">
        <summary className="dropdown-summary">
          Sloupky, vzpěry, příslušenství
        </summary>
        <div className="table-wrapper">
          <div className="table-header">
            <span>Sloupky, vzpěry, příslušenství</span>
            <span>Cena za kus</span>

            <span>Celkem s DPH</span>
            <span>DPH</span>
          </div>
          <div className="table-body">
            {sloupkyData.map((item, index) => (
              <div key={index} className="table-row">
                <span className="cell nazev">{item.name}</span>
                <span className="cell">{item.unitPrice} Kč</span>
                <span className="cell">{item.totalDPH} Kč</span>
                <span className="cell">{item.dph}</span>
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
};

export default Cenik;
