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
  title: "Pletivo Grygov | Výroba Pletiva | Zakázková výroba",
  description:
    "Výroba pletiva, prodej pletiva a panelů 3D/2D, zámečnická výroba, výroba bran a branek",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" data-env={process.env.NODE_ENV}>
      <head>
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
