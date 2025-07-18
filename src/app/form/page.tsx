import Form from "../Components/Form";

export const metadata = {
  title: "Poptávkový formulář Pletivo Grygov",
  description:
    "Máte zájem o nákup materiálu nebo o provedení kompletní stavby plotu na klíč? Pošlete nám nezávaznou poptávku a my pro vás připravíme cenovou nabídku na míru. Odpověď do 24h.",
  keywords:
    "pletivo, poplastované pletivom, panely 3D, panely2D, plot na klíč, podhrabové desky, sloupky, vzpěry, ploty, Ploty Grygov, Ploty Olomouc, výroba pletiva, výroba pletiva Grygov, mobilní oplocení, stavba plotu na klíč, brána, branka, poptávka materiálu, poptávka oplocení na klíč",
  openGraph: {
    title: "Výroba Pletiva Grygov - Poptávka",
    description:
      "Máte zájem o nákup materiálu nebo o provedení kompletní stavby plotu na klíč? Pošlete nám nezávaznou poptávku a my pro vás připravíme cenovou nabídku na míru. Odpověď do 24h.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/form",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Poptávka",
    description:
      "Máte zájem o nákup materiálu nebo o provedení kompletní stavby plotu na klíč? Pošlete nám nezávaznou poptávku a my pro vás připravíme cenovou nabídku na míru. Odpověď do 24h.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/form",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Form />;
}
