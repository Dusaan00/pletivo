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

export const metadata: Metadata = {
  title: "Pletivo Grygov | Výroba Pletiva | Zakázková výroba",
  description:
    "Výroba pletiva, prodej pletiva a panelů 3D/2D, zámečnická vžroba, výroba bran a branek",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
