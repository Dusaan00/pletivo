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
          1 balík pletiva je dlouhý 25 m.
        </p>
      </div>
      <div className="table-wrapper">
        <div className="table-header">
          <span>Pletiva</span>
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
    </div>
  );
};

export default Cenik;
