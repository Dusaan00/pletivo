import Cenik from "../Components/Cenik";

export const metadata = {
  title: "Pletivo Grygov - Ceník",
  description:
    "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
  keywords:
    "pletivo, poplastované pletivo, panely 3D, panely2D, plot na klíč, podhrabové desky, sloupky, vzpěry, ploty, Ploty Grygov, Ploty Olomouc, výroba pletiva, výroba pletiva Grygov, mobilní oplocení, stavba plotu na klíč, brána, branka",
  openGraph: {
    title: "Výroba Pletiva Grygov - Ceník",
    description:
      "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
    images: [{ url: "/opengraph-image.png" }], // Add a relevant image
    url: "https://pletivogrygov.cz/Pletivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Ceník",
    description:
      "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/Cenik",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Cenik />;
}
