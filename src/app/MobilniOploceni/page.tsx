import Mobile from "../Components/Mobile";

export const metadata = {
  title: "Výroba Pletiva Grygov - Mobilní oplocení",
  description:
    "Nabízíme mobilní oplocení jako rychlé, spolehlivé a flexibilní řešení zajištění prostoru, např. pro stavby, akce a uzavírky. Vhodné pro firmy i veřejný sektor.",
  keywords: "mobilní oplocení, dočasné oplocení",
  openGraph: {
    title: "Výroba Pletiva Grygov - Mobilní oplocení",
    description:
      "Nabízíme mobilní oplocení jako rychlé, spolehlivé a flexibilní řešení zajištění prostoru, např. pro stavby, akce a uzavírky. Vhodné pro firmy i veřejný sektor.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/MobilniOploceni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Mobilní oplocení",
    description:
      "Nabízíme mobilní oplocení jako rychlé, spolehlivé a flexibilní řešení zajištění prostoru, např. pro stavby, akce a uzavírky. Vhodné pro firmy i veřejný sektor.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/MobilniOploceni",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Mobile />;
}
