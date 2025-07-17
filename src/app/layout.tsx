import type { Metadata } from "next";
import { Urbanist, Sora, Josefin_Sans, Source_Sans_3 } from "next/font/google";
import "../app/styles/globals.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-josefin-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-urbanist",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-source-sans-3",
  display: "swap",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const josefin = josefinSans;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const urban = urbanist;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const soraFont = sora;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sourceSans = sourceSans3;

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://pletivogrygov.cz"),
  title: "Výroba Pletiva Grygov | Pletivo, Panely 3D/2D, Brány, Sloupky",
  description:
    "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
  robots: "index, follow",
  openGraph: {
    title: "Výroba Pletiva Grygov | Pletivo, Panely 3D/2D, Brány, Sloupky",
    description:
      "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/",
    type: "website",
    siteName: "pletivogrygov",
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" data-env={process.env.NODE_ENV}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="cs" />
        <meta name="D.Kulíšek" content="Pletivo Grygov" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <link rel="me" href="https://www.instagram.com/pletivo_grygov/" />
        <link rel="me" href="https://www.facebook.com/PletivoGrygov.cz" />
      </head>
      <body>
        <Scroller />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
