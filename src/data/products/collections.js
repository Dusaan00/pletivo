import { allProducts, selectFamilyProducts, selectProducts } from "./model";

export const pletivaProducts = [
  ...selectFamilyProducts(["pletivo-pvc", "pletivo-bezinal", "pletivo-zeberkove"]),
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
  ...selectFamilyProducts(["sloupky-jekl", "sloupky-kulate", "vzpery"]),
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
    "Sloupek antracit 48",
    "Vzpera antracit 38",
    "Sloupek Zeleny 48",
    "Vzpera Zelena 38",
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

export const sloupkyplotoveProducts = selectProducts([
  "Sloupek antracit 48",
  "Vzpera antracit 38",
  "Sloupek Zeleny 48",
  "Vzpera Zelena 38",
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
]);

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
  {
    id: "Sloupek Zeleny 48",
    name: "Plotový Sloupek zelený ⌀48mm",
    description:
      "Plotový sloupek zelený pvc, používá se při stavbě plotu z pletiva.",
  },
  {
    id: "Vzpera Zelena 38",
    description:
      "Plotová vzpěra zelená pvc, používá se při stavbě plotu z pletiva.",
  },
  {
    id: "Sloupek antracit 48",
    name: "Plotový Sloupek antracit – ⌀48mm",
    description:
      "Plotový sloupek ⌀48mm v antracitové barvě. Pro montáže pletivových plotů.",
  },
  {
    id: "Vzpera antracit 38",
    description:
      "Plotová vzpěra v barvě antracit. Pro montáže pletivových plotů.",
  },
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
  "Sloupek antracit 48",
  "Vzpera antracit 38",
  "Sloupek Zeleny 48",
  "Vzpera Zelena 38",
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
  "Sloupek antracit 48",
  "Vzpera antracit 38",
  "Sloupek Zink 48",
  "Sloupek Zeleny 48",
  "Vzpera Zelena 38",
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

export const vseProducts = allProducts;
