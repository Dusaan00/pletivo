import Desky from "../Desky/Desky";

export const metadata = {
  title: "Výroba Pletiva Grygov - Podhrabové desky",
  description:
    "K plotům z pletiva a panelů 3D/2D se dají přidat i podhrabové desky. Desky dodávají plotu upravený vzhled a poskytují ochranu navíc. Nabízíme betonové a plastové podhrabové desky.",
  keywords:
    "podhrabové desky, betonové podhrabové desky, plastové podhrabové desky, držáky podhrabových desek",
  OpenGraph: {
    title: "Výroba Pletiva Grygov - Podhrabové desky",
    description:
      "Dodáváme podhrabové desky betonové i plastové, desky se dají skvěle využít v kombinaci s plotem z pletiva nebo panelů 3D/2D.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/PodhraboveDesky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Podhrabové desky",
    description:
      "Dodáváme podhrabové desky betonové i plastové, desky se dají skvěle využít v kombinaci s plotem z pletiva nebo panelů 3D/2D.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/PodhraboveDesky",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Desky />;
}
