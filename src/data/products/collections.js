import { allProducts, selectFamilyProducts, selectProducts } from "./model";

const plotoveSloupkyOverviewProducts = selectProducts([
  {
    id: "sloupek-pvc-48-1500-zeleny",
    name: "Sloupek PVC ⌀48 zelený + ucpávka",
    description:
      "Plotový sloupek PVC ⌀48 mm, zelený. Tyto sloupky se používají při stavbě plotu z pletiva.",
    price: "od 170,-",
    pricing: {
      type: "fixed",
      amount: 170,
      currency: "CZK",
      display: "od 170,-",
      priceWithVatLabel: "od 170,- s DPH",
    },
    searchText:
      "sloupek pvc 48 zelený ucpávka plotový sloupek pletivo 1500 1750 2000 2300 2500",
  },
  {
    id: "sloupek-pvc-48-1500-antracit",
    name: "Sloupek PVC ⌀48 antracit + ucpávka",
    description:
      "Plotový sloupek PVC ⌀48 mm, antracit. Tyto sloupky se používají při stavbě plotu z pletiva.",
    price: "od 180,-",
    pricing: {
      type: "fixed",
      amount: 180,
      currency: "CZK",
      display: "od 180,-",
      priceWithVatLabel: "od 180,- s DPH",
    },
    searchText:
      "sloupek pvc 48 antracit ucpávka plotový sloupek pletivo 1500 1750 2000 2300 2500",
  },
  {
    id: "vzpera-pvc-38-1750-zelena",
    name: "Vzpěra PVC ⌀38 zelená + krytka + objímka",
    description:
      "Plotová vzpěra PVC ⌀38 mm, zelená, s krytkou a objímkou. Tyto vzpěry se používají při stavbě plotu z pletiva.",
    price: "od 185,-",
    pricing: {
      type: "fixed",
      amount: 185,
      currency: "CZK",
      display: "od 185,-",
      priceWithVatLabel: "od 185,- s DPH",
    },
    searchText:
      "vzpěra pvc 38 zelená krytka objímka pletivo 1750 2000 2300 2500",
  },
  {
    id: "vzpera-pvc-38-1750-antracit",
    name: "Vzpěra PVC ⌀38 antracit + krytka + objímka",
    description:
      "Plotová vzpěra PVC ⌀38 mm, antracit, s krytkou a objímkou. Tyto vzpěry se používají při stavbě plotu z pletiva.",
    price: "od 195,-",
    pricing: {
      type: "fixed",
      amount: 195,
      currency: "CZK",
      display: "od 195,-",
      priceWithVatLabel: "od 195,- s DPH",
    },
    searchText:
      "vzpěra pvc 38 antracit krytka objímka pletivo 1750 2000 2300 2500",
  },
]);

export const pletivaProducts = [
  ...selectFamilyProducts(["pletivo-pvc", "pletivo-bezinal", "pletivo-zeberkove"]),
  ...plotoveSloupkyOverviewProducts,
  ...selectFamilyProducts([
    "vazaci-drat",
    "napinaci-drat-pvc",
    "napinaci-drat-zinkovy",
    "napinaci-kladka-pvc",
    "napinaci-kladka-zinkova",
    "prichytky-sroubky",
  ]),
];

export const panelyProducts = [
  ...selectFamilyProducts(["panely-pvc-3d", "panely-zinkove"]),
  ...selectFamilyProducts(["sloupky-jekl", "objimky-panelove"]),
];

export const deskyProducts = [
  ...selectFamilyProducts(["podhrabove-desky", "drzaky-desek"]),
];

export const sloupkyProducts = [
  ...selectFamilyProducts(["sloupky-jekl"]),
  ...plotoveSloupkyOverviewProducts,
  ...selectFamilyProducts([
    "vazaci-drat",
    "napinaci-drat-pvc",
    "napinaci-drat-zinkovy",
    "napinaci-kladka-pvc",
    "napinaci-kladka-zinkova",
    "prichytky-sroubky",
  ]),
];

export const kladkyProducts = [
  ...selectFamilyProducts(["pletivo-pvc"]),
  ...selectProducts([
    ...plotoveSloupkyOverviewProducts,
  ]),
  ...selectFamilyProducts(["podhrabove-desky", "drzaky-desek"]),
  ...selectFamilyProducts(["vazaci-drat", "napinaci-drat-pvc", "prichytky-sroubky"]),
];

export const kladkyznProducts = [
  ...selectFamilyProducts(["pletivo-bezinal"]),
  ...selectFamilyProducts(["napinaci-drat-zinkovy"]),
  ...selectProducts(["Sloupek Zink 48", "Vzpera Zinkova 38"]),
  ...selectFamilyProducts(["vazaci-drat", "prichytky-sroubky"]),
  ...selectFamilyProducts(["podhrabove-desky", "drzaky-desek"]),
];

export const sloupkyplotoveProducts = plotoveSloupkyOverviewProducts;

export const prichytkyProducts = [
  ...selectFamilyProducts(["pletivo-pvc", "pletivo-bezinal"]),
  ...selectFamilyProducts(["podhrabove-desky", "drzaky-desek"]),
  ...selectFamilyProducts(["vazaci-drat", "sloupky-kulate", "vzpery"]),
  ...selectFamilyProducts([
    "napinaci-drat-pvc",
    "napinaci-drat-zinkovy",
    "napinaci-kladka-pvc",
    "napinaci-kladka-zinkova",
  ]),
];

export const recpletivaProducts = selectProducts([
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  "vazaci-draty",
  ...plotoveSloupkyOverviewProducts,
  "napinak-zeleny-78",
  "napinak-zeleny-52",
  "napinak-zeleny-26",
  "napinak-antracit-78",
  "napinak-antracit-52",
  "kladka-pvc-zelena",
  "kladka-pvc-antracit",
  "prichytky",
]);

export const recpletivoznProducts = selectProducts([
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  {
    id: "Sloupek Zink 48",
    description:
      "Sloupek zinkový, používá se při montážích plotů z pletiva bezinal.",
  },
  {
    id: "Vzpera Zinkova 38",
    description:
      "Vzpěra zinková, používá se při montážích oplocení z pletiva bezinal.",
  },
  "vazaci-draty",
  "napinak-zinc",
  "kladka-zinc",
]);

export const recpanelyProducts = selectProducts([
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  "sloupek-jekl-zeleny",
  "sloupek-jekl-antracit",
  "objimky-green",
  "objimky-anracit",
]);

export const recpanelyznProducts = selectProducts([
  "sloupek-jekl-zinc",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
]);

export const recsloupkyProducts = selectProducts([
  "panel-green",
  "panel-antracit",
  "objimky-green",
  "objimky-anracit",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
]);

export const recsloupkyznProducts = selectProducts([
  "panel-3d-zinc",
  "panel-2d-zinc",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
]);

export const recnapinaciProducts = selectProducts([
  "pletivo-pvc-green",
  "pletivo-pvc-antracit",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  ...plotoveSloupkyOverviewProducts,
  "vazaci-draty",
  "napinak-zeleny-78",
  "napinak-zeleny-52",
  "napinak-zeleny-26",
  "napinak-antracit-78",
  "napinak-antracit-52",
  "kladka-pvc-zelena",
  "kladka-pvc-antracit",
  "prichytky",
]);

export const recnapinaciznProducts = selectProducts([
  "pletivo-bezinal-20",
  "pletivo-bezinal-21",
  "Vzpera Zinkova 38",
  "Sloupek Zink 48",
  "kladka-zinc",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  "vazaci-draty",
  "prichytky",
]);

export const recvazaciProducts = selectProducts([
  "pletivo-pvc-green",
  "pletivo-pvc-antracit",
  "pletivo-bezinal-20",
  "pletivo-bezinal-21",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
  ...plotoveSloupkyOverviewProducts,
  "Sloupek Zink 48",
  "Vzpera Zinkova 38",
  "napinak-zeleny-78",
  "napinak-zeleny-52",
  "napinak-zeleny-26",
  "napinak-antracit-78",
  "napinak-antracit-52",
  "napinak-zinc",
  "kladka-pvc-zelena",
  "kladka-pvc-antracit",
  "kladka-zinc",
  "prichytky",
]);

export const recobjimkyProducts = selectProducts([
  "panel-green",
  "panel-antracit",
  "sloupek-jekl-zeleny",
  "sloupek-jekl-antracit",
  "Podhrabové desky 2.50m",
  "Podhrabové desky 2.90m",
  "Držáky na desky",
]);

export const recdrzakyProducts = selectProducts([
  {
    id: "panel-green",
    name: "Panely PVC 3D",
    description:
      "Panely PVC 3D pro moderní a odolné oplocení rodinných domů i firemních areálů.",
  },
  "panel-3d-zinc",
  "panel-2d-zinc",
  {
    id: "Podhrabové desky 2.50m",
    name: "Podhrabové desky",
    description:
      "Betonové podhrabové desky pro čisté a pevné zakončení oplocení z panelů i pletiva.",
  },
  {
    id: "objimky-green",
    name: "Objímky pro panely",
    description:
      "Objímky pro správné uchycení panelů ke sloupkům při montáži plotu.",
  },
]);

export const vseProducts = allProducts;
