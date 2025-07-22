import "../Sass/_cenik.scss";

const Cenik = () => {
  const pricingData = [
    {
      code: "plpvc0001",
      name: "Pletivo zelené PVC 1.00m-2,5-55",
      unitPrice: 53.0,
      m2: 25.0,
      totalDPH: 1325.0,
      dph: "21%",
    },
    {
      code: "plpvc0002",
      name: "Pletivo zelené PVC 1.25m-2,5-55",
      unitPrice: 66.0,
      m2: 25.0,
      totalDPH: 1650.0,
      dph: "21%",
    },
    {
      code: "plpvc0003",
      name: "Pletivo zelené PVC 1.50m-2,5-55",
      unitPrice: 79.0,
      m2: 25.0,
      totalDPH: 1975.0,
      dph: "21%",
    },
    {
      code: "plpvc0004",
      name: "Pletivo zelené PVC 1.60m-2,5-55",
      unitPrice: 84.0,
      m2: 25.0,
      totalDPH: 2100.0,
      dph: "21%",
    },
    {
      code: "plpvc0005",
      name: "Pletivo zelené PVC 1.80m-2,5-55",
      unitPrice: 94.0,
      m2: 25.0,
      totalDPH: 2350.0,
      dph: "21%",
    },
    {
      code: "plpvc0006",
      name: "Pletivo zelené PVC 2.00m-2,5-55",
      unitPrice: 105.0,
      m2: 25.0,
      totalDPH: 2625.0,
      dph: "21%",
    },
    {
      code: "antractc01",
      name: "Pletivo antracit 1.00m-2,7-55",
      unitPrice: 79.0,
      m2: 25.0,
      totalDPH: 1975.0,
      dph: "21%",
    },
    {
      code: "antractc02",
      name: "Pletivo antracit 1.25m-2,7-55",
      unitPrice: 84.0,
      m2: 25.0,
      totalDPH: 2100.0,
      dph: "21%",
    },
    {
      code: "antractc03",
      name: "Pletivo antracit 1.50m-2,7-55",
      unitPrice: 94.0,
      m2: 25.0,
      totalDPH: 2350.0,
      dph: "21%",
    },
    {
      code: "antractc04",
      name: "Pletivo antracit 1.60m-2,5-55",
      unitPrice: 53.0,
      m2: 25.0,
      totalDPH: 1325.0,
      dph: "21%",
    },
    {
      code: "antractc05",
      name: "Pletivo antracit 1.80m-2,5-55",
      unitPrice: 66.0,
      m2: 25.0,
      totalDPH: 1650.0,
      dph: "21%",
    },
    {
      code: "antractc05",
      name: "Pletivo antracit 2.00m-2,5-55",
      unitPrice: 108.0,
      m2: 25.0,
      totalDPH: 2700.0,
      dph: "21%",
    },
  ];

  return (
    <div className="cenik-container">
      <h2 className="title">Pletivo Grygov Ceník</h2>
      <div className="table-wrapper">
        <div className="table-header">
          <span>Označení</span>
          <span>Produkt</span>
          <span>Cena za metr</span>
          <span>Množství</span>
          <span>Celkem s DPH</span>
          <span>DPH</span>
        </div>
        <div className="table-body">
          {pricingData.map((item, index) => (
            <div key={index} className="table-row">
              <span className="cell">{item.code}</span>
              <span className="cell nazev">{item.name}</span>
              <span className="cell">{item.unitPrice} Kč</span>
              <span className="cell">{item.m2} m</span>
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
