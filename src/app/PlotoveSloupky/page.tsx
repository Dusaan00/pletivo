import PlotoveSloupky from "../Components/PlotoveSloupky";

export const metadata = {
  title: "Pletivo Grygov - Plotové Sloupky",
  description:
    "Pletiva skladem: poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo Bezinal ze zinku a hliníku, a žeberkové pletivo. Pletivo od českého výrobce.",
  keywords:
    "plotové sloupky, pletivo, poplastované pletivo, pletivo Bezinal, žeberkové pletivo, drátěné pletivo",
  openGraph: {
    title: "Pletivo Grygov - Plotové Sloupky",
    description:
      "Kvalitní pletivo od českého výrobce: poplastované pletivo zelené/antracit, pletivo Bezinal a žeberková pletiva. Rychlé dodání.",
    images: [{ url: "/opengraph-image.png" }], // Add a relevant image
    url: "https://pletivogrygov.cz/Pletivo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Plotové Sloupky",
    description:
      "Pletivo skladem: poplastovaná pletiva, pletivo Bezinal a žeberková pletiva od českého výrobce.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/PlotoveSloupky",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <PlotoveSloupky />
    </>
  );
}
