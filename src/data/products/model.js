import {
  allProducts as baseAllProducts,
  productCatalog as baseProductCatalog,
} from "./catalog";

export const productCategories = {
  pletiva: {
    id: "pletiva",
    slug: "pletiva",
    name: "Pletiva",
    route: "/Pletivo",
    productType: "fencing",
    seo: {
      title: "Pletiva",
      description:
        "Pletiva PVC, Bezinal a další řešení oplocení pro rodinné domy i firmy.",
    },
  },
  panely: {
    id: "panely",
    slug: "panely-3d-2d",
    name: "Panely 3D/2D",
    route: "/Panely3D2D",
    productType: "panel-fencing",
    seo: {
      title: "Panely 3D/2D",
      description:
        "Moderní panely 3D/2D pro estetické a bezpečné oplocení pozemků.",
    },
  },
  sloupky: {
    id: "sloupky",
    slug: "sloupky-a-vzpery",
    name: "Sloupky a vzpěry",
    route: "/SloupkyPrislusenstvi",
    productType: "posts",
    seo: {
      title: "Sloupky a vzpěry",
      description:
        "Sloupky a vzpěry pro montáž pletivových i panelových plotů.",
    },
  },
  prislusenstvi: {
    id: "prislusenstvi",
    slug: "prislusenstvi",
    name: "Příslušenství",
    route: "/SloupkyPrislusenstvi",
    productType: "accessories",
    seo: {
      title: "Plotové příslušenství",
      description:
        "Napínací dráty, kladky, objímky, vázací dráty a další montážní příslušenství.",
    },
  },
  desky: {
    id: "desky",
    slug: "podhrabove-desky",
    name: "Podhrabové desky",
    route: "/PodhraboveDesky",
    productType: "gravel-boards",
    seo: {
      title: "Podhrabové desky",
      description:
        "Podhrabové desky a držáky pro doplnění plotu o ochranu a čistý vzhled.",
    },
  },
};

export const productFamilies = {
  "pletivo-pvc": {
    id: "pletivo-pvc",
    slug: "pletivo-pvc-25m",
    name: "Pletivo PVC 25m",
    shortName: "Pletivo PVC",
    category: "pletiva",
    route: "/PletivaPVC",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["barva"],
    variantIds: ["pletivo-pvc-green", "pletivo-pvc-antracit"],
    defaultVariantId: "pletivo-pvc-green",
    badges: ["Český výrobce", "Skladem"],
  },
  "pletivo-bezinal": {
    id: "pletivo-bezinal",
    slug: "pletivo-bezinal-25m",
    name: "Pletivo Bezinal 25m",
    shortName: "Pletivo Bezinal",
    category: "pletiva",
    route: "/PletivaBezinal",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["prumerDratu"],
    variantIds: ["pletivo-bezinal-20", "pletivo-bezinal-21"],
    defaultVariantId: "pletivo-bezinal-20",
    badges: ["Odolné řešení", "Skladem"],
  },
  "pletivo-zeberkove": {
    id: "pletivo-zeberkove",
    slug: "zeberkova-pletiva",
    name: "Žeberková pletiva",
    shortName: "Žeberková pletiva",
    category: "pletiva",
    route: "/form",
    productKind: "custom-product",
    buyingMode: "inquiry",
    variantAxes: [],
    variantIds: ["pletivo-zeberkove"],
    defaultVariantId: "pletivo-zeberkove",
    badges: ["Zakázková výroba"],
  },
  "panely-pvc-3d": {
    id: "panely-pvc-3d",
    slug: "panely-3d-pvc",
    name: "Panely 3D PVC",
    shortName: "Panely 3D PVC",
    category: "panely",
    route: "/PanelyProduct",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["barva"],
    variantIds: ["panel-green", "panel-antracit"],
    defaultVariantId: "panel-green",
    badges: ["Moderní oplocení", "Skladem"],
  },
  "panely-zinkove": {
    id: "panely-zinkove",
    slug: "panely-zinkove",
    name: "Panely zinkové",
    shortName: "Panely zinkové",
    category: "panely",
    route: "/PanelyZinkove",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["typPanelu"],
    variantIds: ["panel-3d-zinc", "panel-2d-zinc"],
    defaultVariantId: "panel-3d-zinc",
    badges: ["Průmyslové použití", "Skladem"],
  },
  "sloupky-jekl": {
    id: "sloupky-jekl",
    slug: "sloupky-jekl",
    name: "Sloupky JEKL",
    shortName: "Sloupky JEKL",
    category: "sloupky",
    route: "/SloupkyProduct",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["povrch"],
    variantIds: [
      "sloupek-jekl-zeleny",
      "sloupek-jekl-antracit",
      "sloupek-jekl-zinc",
    ],
    defaultVariantId: "sloupek-jekl-zeleny",
    badges: ["Panelové ploty"],
  },
  "sloupky-kulate": {
    id: "sloupky-kulate",
    slug: "plotove-sloupky-kulate",
    name: "Plotové sloupky kulaté",
    shortName: "Plotové sloupky",
    category: "sloupky",
    route: "/PlotoveSloupky",
    productKind: "variant-product",
    buyingMode: "inquiry",
    variantAxes: ["typ", "barva"],
    variantIds: ["Sloupek antracit 48", "Sloupek Zink 48", "Sloupek Zeleny 48"],
    defaultVariantId: "Sloupek Zeleny 48",
    badges: ["Na poptávku"],
  },
  vzpery: {
    id: "vzpery",
    slug: "vzpery-k-plotum",
    name: "Vzpěry k plotům",
    shortName: "Vzpěry",
    category: "sloupky",
    route: "/PlotoveSloupky",
    productKind: "variant-product",
    buyingMode: "inquiry",
    variantAxes: ["barva"],
    variantIds: ["Vzpera antracit 38", "Vzpera Zinkova 38", "Vzpera Zelena 38"],
    defaultVariantId: "Vzpera Zelena 38",
    badges: ["Na poptávku"],
  },
  "objimky-panelove": {
    id: "objimky-panelove",
    slug: "objimky-panelove",
    name: "Objímky pro panely",
    shortName: "Objímky",
    category: "prislusenstvi",
    route: "/Objimky",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["barva"],
    variantIds: ["objimky-green", "objimky-anracit"],
    defaultVariantId: "objimky-green",
    badges: ["Montáž panelů"],
  },
  "vazaci-drat": {
    id: "vazaci-drat",
    slug: "vazaci-drat",
    name: "Vázací drát",
    shortName: "Vázací drát",
    category: "prislusenstvi",
    route: "/VazaciDraty",
    productKind: "simple-product",
    buyingMode: "buy",
    variantAxes: [],
    variantIds: ["vazaci-draty"],
    defaultVariantId: "vazaci-draty",
    badges: ["Montážní příslušenství"],
  },
  "napinaci-drat-pvc": {
    id: "napinaci-drat-pvc",
    slug: "napinaci-drat-pvc",
    name: "Napínací drát PVC",
    shortName: "Napínací drát PVC",
    category: "prislusenstvi",
    route: "/NapinaciDraty",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["barva", "delka"],
    variantIds: [
      "napinak-zeleny-78",
      "napinak-zeleny-52",
      "napinak-zeleny-26",
      "napinak-antracit-78",
      "napinak-antracit-52",
    ],
    defaultVariantId: "napinak-zeleny-78",
    badges: ["Montážní příslušenství"],
  },
  "napinaci-drat-zinkovy": {
    id: "napinaci-drat-zinkovy",
    slug: "napinaci-drat-zinkovy",
    name: "Napínací drát zinkový",
    shortName: "Napínací drát zinkový",
    category: "prislusenstvi",
    route: "/NapinaciDratyZinkove",
    productKind: "simple-product",
    buyingMode: "buy",
    variantAxes: [],
    variantIds: ["napinak-zinc"],
    defaultVariantId: "napinak-zinc",
    badges: ["Bezinal příslušenství"],
  },
  "napinaci-kladka-pvc": {
    id: "napinaci-kladka-pvc",
    slug: "napinaci-kladka-pvc",
    name: "Napínací kladka PVC",
    shortName: "Napínací kladka PVC",
    category: "prislusenstvi",
    route: "/Kladky",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["barva"],
    variantIds: ["kladka-pvc-zelena", "kladka-pvc-antracit"],
    defaultVariantId: "kladka-pvc-zelena",
    badges: ["Montážní příslušenství"],
  },
  "napinaci-kladka-zinkova": {
    id: "napinaci-kladka-zinkova",
    slug: "napinaci-kladka-zinkova",
    name: "Napínací kladka zinková",
    shortName: "Napínací kladka zinková",
    category: "prislusenstvi",
    route: "/KladkyZinkove",
    productKind: "simple-product",
    buyingMode: "buy",
    variantAxes: [],
    variantIds: ["kladka-zinc"],
    defaultVariantId: "kladka-zinc",
    badges: ["Bezinal příslušenství"],
  },
  "prichytky-sroubky": {
    id: "prichytky-sroubky",
    slug: "prichytky-a-sroubky",
    name: "Příchytky a šroubky",
    shortName: "Příchytky a šroubky",
    category: "prislusenstvi",
    route: "/PrichytkySroubky",
    productKind: "simple-product",
    buyingMode: "buy",
    variantAxes: [],
    variantIds: ["prichytky"],
    defaultVariantId: "prichytky",
    badges: ["Montážní příslušenství"],
  },
  "podhrabove-desky": {
    id: "podhrabove-desky",
    slug: "podhrabove-desky",
    name: "Podhrabové desky",
    shortName: "Podhrabové desky",
    category: "desky",
    route: "/DeskyPodhrabove",
    productKind: "variant-product",
    buyingMode: "buy",
    variantAxes: ["delka"],
    variantIds: ["Podhrabové desky 2.50m", "Podhrabové desky 2.90m"],
    defaultVariantId: "Podhrabové desky 2.50m",
    badges: ["Doplněk k plotu"],
  },
  "drzaky-desek": {
    id: "drzaky-desek",
    slug: "drzaky-na-podhrabove-desky",
    name: "Držáky na podhrabové desky",
    shortName: "Držáky na desky",
    category: "desky",
    route: "/form",
    productKind: "simple-product",
    buyingMode: "inquiry",
    variantAxes: [],
    variantIds: ["Držáky na desky"],
    defaultVariantId: "Držáky na desky",
    badges: ["Na poptávku"],
  },
};

const productVariantOptions = {
  "pletivo-pvc-green": {
    barva: "zelená",
    delka: "25 m",
    material: "PVC",
    prumerDratu: "2.5 mm",
    oko: "55 mm",
  },
  "pletivo-pvc-antracit": {
    barva: "antracit",
    delka: "25 m",
    material: "PVC",
    prumerDratu: "2.5 mm",
    oko: "55 mm",
  },
  "pletivo-bezinal-20": {
    delka: "25 m",
    material: "Bezinal",
    prumerDratu: "2.0 mm",
    oko: "55 mm",
  },
  "pletivo-bezinal-21": {
    delka: "25 m",
    material: "Bezinal",
    prumerDratu: "2.2 mm",
    oko: "55 mm",
  },
  "panel-green": {
    barva: "zelená",
    typPanelu: "3D",
    povrch: "PVC",
    prumerDratu: "4 mm",
    sirka: "2.50 m",
  },
  "panel-antracit": {
    barva: "antracit",
    typPanelu: "3D",
    povrch: "PVC",
    prumerDratu: "4 mm",
    sirka: "2.50 m",
  },
  "panel-3d-zinc": {
    barva: "zinek",
    typPanelu: "3D",
    povrch: "zinkový",
    sirka: "2.50 m",
  },
  "panel-2d-zinc": {
    barva: "zinek",
    typPanelu: "2D",
    povrch: "zinkový",
    prumerDratu: "5/6 mm",
    sirka: "2.50 m",
  },
  "sloupek-jekl-zeleny": {
    barva: "zelená",
    povrch: "PVC",
    profil: "60x40 mm",
  },
  "sloupek-jekl-antracit": {
    barva: "antracit",
    povrch: "PVC",
    profil: "60x40 mm",
  },
  "sloupek-jekl-zinc": {
    barva: "zinek",
    povrch: "zinkový",
    profil: "60x40 mm",
  },
  "objimky-green": {
    barva: "zelená",
    pouziti: "panely 3D",
  },
  "objimky-anracit": {
    barva: "antracit",
    pouziti: "panely 3D",
  },
  "Sloupek antracit 48": {
    barva: "antracit",
    prumer: "48 mm",
    typ: "sloupek",
  },
  "Sloupek Zink 48": {
    barva: "zinek",
    prumer: "48 mm",
    typ: "sloupek",
  },
  "Sloupek Zeleny 48": {
    barva: "zelená",
    prumer: "48 mm",
    typ: "sloupek",
  },
  "Vzpera antracit 38": {
    barva: "antracit",
    prumer: "38 mm",
    typ: "vzpěra",
  },
  "Vzpera Zinkova 38": {
    barva: "zinek",
    prumer: "38 mm",
    typ: "vzpěra",
  },
  "Vzpera Zelena 38": {
    barva: "zelená",
    prumer: "38 mm",
    typ: "vzpěra",
  },
  "vazaci-draty": {
    delka: "50 m",
    material: "PVC",
  },
  "napinak-zeleny-78": {
    barva: "zelená",
    delka: "78 m",
    material: "PVC",
  },
  "napinak-zeleny-52": {
    barva: "zelená",
    delka: "52 m",
    material: "PVC",
  },
  "napinak-zeleny-26": {
    barva: "zelená",
    delka: "26 m",
    material: "PVC",
  },
  "napinak-antracit-78": {
    barva: "antracit",
    delka: "78 m",
    material: "PVC",
  },
  "napinak-antracit-52": {
    barva: "antracit",
    delka: "52 m",
    material: "PVC",
  },
  "napinak-zinc": {
    barva: "zinek",
    material: "zinkový",
  },
  "kladka-pvc-zelena": {
    barva: "zelená",
    material: "PVC",
  },
  "kladka-pvc-antracit": {
    barva: "antracit",
    material: "PVC",
  },
  "kladka-zinc": {
    barva: "zinek",
    material: "zinkový",
  },
  prichytky: {
    baleni: "1 ks příchytka + 1 ks šroubek",
  },
  "Podhrabové desky 2.50m": {
    delka: "2.50 m",
    material: "beton",
  },
  "Podhrabové desky 2.90m": {
    delka: "2.90 m",
    material: "beton",
  },
  "Držáky na desky": {
    material: "ocel",
    pouziti: "podhrabové desky",
  },
};

const familyByVariantId = Object.values(productFamilies).reduce(
  (accumulator, family) => {
    family.variantIds.forEach((variantId) => {
      accumulator[variantId] = family.id;
    });

    return accumulator;
  },
  {},
);

const buildSearchText = (product, family, category) =>
  [
    product.name,
    product.description,
    category?.name,
    family?.name,
    family?.shortName,
    Object.values(productVariantOptions[product.id] || {}).join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const normalizeProduct = (product) => {
  const familyId = familyByVariantId[product.id] ?? null;
  const family = familyId ? productFamilies[familyId] : null;
  const category = productCategories[product.category] ?? null;
  const variantOptions = productVariantOptions[product.id] || {};
  const isInquiry = product.ctaType === "inquiry";

  return {
    ...product,
    sku: product.id,
    categoryKey: category?.id ?? product.category,
    categoryMeta: category,
    familyId,
    family,
    shortName: family?.shortName ?? product.name,
    productKind: family?.productKind ?? "simple-product",
    variantAxes: family?.variantAxes ?? [],
    variantOptions,
    media: [
      {
        src: product.image,
        alt: product.name,
        type: "image",
        isPrimary: true,
      },
    ],
    pricing: {
      type: product.priceValue === null ? "inquiry" : "fixed",
      amount: product.priceValue,
      currency: product.priceCurrency,
      display: product.price,
      priceWithVatLabel:
        product.priceValue === null ? "Na poptávku" : `${product.price} s DPH`,
    },
    inventory: {
      status: product.availability,
      label:
        product.availability === "in_stock" ? "Skladem" : "Na nezávaznou poptávku",
      canBuyOnline: !isInquiry,
    },
    purchase: {
      mode: product.ctaType,
      ctaLabel: isInquiry ? "Poptat" : "Koupit",
      href: product.link,
    },
    seo: {
      title: `${product.name} | ${category?.name ?? "Pletivo Grygov"}`,
      description: product.description,
      canonicalPath: product.link,
    },
    badges: [
      ...(family?.badges ?? []),
      ...(product.availability === "in_stock" ? ["Skladem"] : ["Na poptávku"]),
    ],
    searchText: buildSearchText(product, family, category),
  };
};

export const productModel = Object.fromEntries(
  Object.entries(baseProductCatalog).map(([id, product]) => [
    id,
    normalizeProduct(product),
  ]),
);

export const allProducts = Object.values(productModel);

export const getProductById = (id) => productModel[id] ?? null;

export const getProductBySlug = (slug) =>
  allProducts.find((product) => product.slug === slug) ?? null;

export const getCategoryById = (categoryId) =>
  productCategories[categoryId] ?? null;

export const getFamilyById = (familyId) =>
  productFamilies[familyId] ?? null;

export const getFamilyProducts = (familyId) => {
  const family = getFamilyById(familyId);

  if (!family) {
    return [];
  }

  return family.variantIds
    .map((variantId) => getProductById(variantId))
    .filter(Boolean);
};

export const getProductsByCategory = (categoryId) =>
  allProducts.filter((product) => product.categoryKey === categoryId);

export const selectProducts = (entries) =>
  entries.map((entry) => {
    const selection = typeof entry === "string" ? { id: entry } : entry;
    const { id, ...overrides } = selection;
    const product = getProductById(id);

    if (!product) {
      throw new Error(`Unknown product id: ${id}`);
    }

    return {
      ...product,
      ...overrides,
    };
  });

export const selectFamilyProducts = (familyIds) =>
  familyIds.flatMap((familyId) => getFamilyProducts(familyId));

export const getDefaultFamilyProduct = (familyId) => {
  const family = getFamilyById(familyId);

  if (!family) {
    return null;
  }

  return getProductById(family.defaultVariantId);
};

export const getRelatedProducts = (productId, limit = 6) => {
  const product = getProductById(productId);

  if (!product) {
    return [];
  }

  const sameCategory = allProducts.filter(
    (candidate) =>
      candidate.id !== productId && candidate.categoryKey === product.categoryKey,
  );

  const sameFamily = product.familyId
    ? getFamilyProducts(product.familyId).filter(
        (candidate) => candidate.id !== productId,
      )
    : [];

  const merged = [...sameFamily, ...sameCategory];
  const seen = new Set();

  return merged.filter((candidate) => {
    if (seen.has(candidate.id)) {
      return false;
    }

    seen.add(candidate.id);
    return true;
  }).slice(0, limit);
};

export const productIndexes = {
  byId: productModel,
  bySlug: Object.fromEntries(allProducts.map((product) => [product.slug, product])),
  families: productFamilies,
  categories: productCategories,
};

export const baseCatalogSize = baseAllProducts.length;
