import About from "../Components/About";

export const metadata = {
  title: "O firmě Výroba Pletiva Grygov",
  description:
    "Jsme rodinná firma z Grygova s tradicí od roku 1930 zaměřená na kvalitu a zákaznicky orientovaný přístup. Výroba pletiva, zámečnická výroba a stavby plotů na klíč.",
  keywords:
    "pletivo, poplastované pletivom, panely 3D, panely2D, plot na klíč, podhrabové desky, sloupky, vzpěry, ploty, Ploty Grygov, Ploty Olomouc, výroba pletiva, výroba pletiva Grygov, mobilní oplocení, stavba plotu na klíč, brána, branka",
  openGraph: {
    title: "Výroba Pletiva Grygov - O firmě Výroba Pletiva Grygov",
    description:
      "Jsme rodinná firma z Grygova s tradicí od roku 1930 zaměřená na kvalitu a zákaznicky orientovaný přístup. Výroba pletiva, zámečnická výroba a stavby plotů na klíč.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/About",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - O firmě Výroba Pletiva Grygov",
    description:
      "Jsme rodinná firma z Grygova s tradicí od roku 1930 zaměřená na kvalitu a zákaznicky orientovaný přístup. Výroba pletiva, zámečnická výroba a stavby plotů na klíč.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/About",
  },
  robots: "index, follow",
};

export default function Page() {
  return <About />;
}
