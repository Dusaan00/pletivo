import Gates from "../Gates/Gates";

export const metadata = {
  title: "Výroba Pletiva Grygov - Brány & branky",
  description:
    "Vyrábíme brány a branky na zakázku k oplocení. Nabízíme dvoukřídlé i jednokřídlé brány a branky, bránu pro vás také na vašem pozemku nainstalujeme.",
  keywords:
    "brána, branka, brána k plotu, jednokřídlá brána, dvoukřídlá brána, brána jekl",
  openGraph: {
    title: "Výroba Pletiva Grygov - Brány a branky",
    description:
      "Nabízíme brány a branky k oplocení. Brány vyrábíme na zakázku. Nabízíme dvoukřídlé i jednokřídlé brány.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/Brany",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Brány a branky",
    description:
      "Nabízíme brány a branky k oplocení. Brány vyrábíme na zakázku. Nabízíme dvoukřídlé i jednokřídlé brány.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/Brany",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Gates />;
}
