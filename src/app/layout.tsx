import type { Metadata } from "next";
import {
  Urbanist,
  Sora,
  Josefin_Sans,
  Source_Sans_3,
  Montserrat,
  Poppins,
} from "next/font/google";
import "../app/styles/globals.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Scroller from "./Components/Scroller";
import Head from "next/head";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mont = montserrat;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pop = poppins;

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://pletivogrygov.cz"),
  title: "Výroba Pletiva Grygov | Pletivo, Panely 3D/2D, Brány, Sloupky",
  description:
    "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
  keywords:
    "pletivo, poplastované pletivo, panely 3D, panely2D, plot na klíč, podhrabové desky, sloupky, vzpěry, ploty, Ploty Grygov, Ploty Olomouc, výroba pletiva, výroba pletiva Grygov, mobilní oplocení, stavba plotu na klíč, brána, branka",
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
      <Head>
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              image: {
                "@type": "ImageObject",
                url: "https://pletivogrygov.cz/opengraph-image.png",
                width: 1200,
                height: 630,
              },
              name: "Pletivo Grygov",
              description:
                "Firma Pletivo Grygov se zabývá výrobou pletiva a zámečnictvím. Prodává pletivo, 3D/2D panely, brány, sloupky a příslušenství pro kompletní montáž plotu. Firma je zaměřena na kvalitu, rychlé dodání a zákaznicky orientovaný přístup. Dopravu materiálu a stavby plotů na klíč zajišťuje po celé Moravě.",
              keywords:
                "pletivo, poplastované pletivom, panely 3D, panely2D, plot na klíč, podhrabové desky, sloupky, vzpěry, ploty, Ploty Grygov, Ploty Olomouc, výroba pletiva, výroba pletiva Grygov, mobilní oplocení, stavba plotu na klíč, brána, branka",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Za Tratí 255",
                addressLocality: "Grygov",
                postalCode: "783 73",
                addressCountry: "CZ",
              },
              telephone: "+420608705547",
              url: "https://pletivogrygov.cz/",
              paymentAccepted: [
                "Hotovost",
                "Kreditní karta",
                "Bankovní převod",
              ],
              openingHours: "Po-Pá 07:30-16:00",
              sameAs: [
                "https://www.facebook.com/PletivoGrygov.cz",
                "https://www.instagram.com/pletivo_grygov/",
              ],
              twitter: {
                card: "summary_large_image",
                title:
                  "Výroba Pletiva Grygov | Pletivo, Panely 3D/2D, Brány, Sloupky",
                description:
                  "Pletivo od českého výrobce. Nabízíme pletiva, panely 3D/2D, brány, branky, sloupky a příslušenství pro kompletní stavbu plotu s rychlým dodáním.",
                images: ["/opengraph-image.png"],
              },
              serviceType: [
                {
                  "@type": "Service",
                  name: "Výroba a prodej pletiva",
                  description:
                    "Vyrábíme a prodáváme pletiva. Nabízíme poplastovaná pletiva v zelené a antracitové barvě, odolné pletivo bezinal ze slitiny hliníku a mědi. Výšky 150-200cm",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Prodej panelů 3D/2D",
                  description:
                    "Prodáváme panely 3D/2D v antracitové a zelené barvě, které poskytují pěknou vizuální bariéru kolem pozemku, dále nabízíme panely 3D/2D pozinkované, které jsou ideální v místech, kde se klade důraz na bezpečnost.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Brány a branky",
                  description:
                    "Vyrábíme brány a branky k oplocení na zakázku. Dodáváme dvoukřídlé i jendokřídlé brány, brány s výplní z pletiva, z panelu, jeklové brány, zinkové brány a mnoho dalších.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Podhrabové desky",
                  description:
                    "Dodáváme podhrabové desky, které se dají použít na oplocení v kombinaci s pletivem nebo panely 3D/2D. Máme k dispozici betonové podhrabové desky i lehčí plastové podhrabové desky.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Sloupky a příslušenství",
                  description:
                    "Nabízíme sloupky a vzpěry v zelené a antracitové bravě, zinkové sloupky a vzpěry, napínací dráty, ostnaté dráty, úchytky, a vše nezbytné příslušenství pro úspěšnou montáž plotu.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Mobilní oplocení",
                  description:
                    "Nabízíme mobilní oplocení pro firmy či veřejnou správu do míst, které je potřeba na určitou dobu vyznačit a zabezpečit. Mobilní oplocení tak skvěle plní svou funkci flexibilního a rychlého řešení zabezpeční prostor.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "Service",
                  name: "Stavby plotů na klíč",
                  description:
                    "Profesionální stavby plotů na klíč. Stavíme ploty z pleteného pletiva, ploty z 3D panelů, betonové ploty.",
                  offers: {
                    "@type": "Offer",
                    price: "Cena dle individuálního vyčíslení",
                    priceCurrency: "CZK",
                    itemCondition: "https://schema.org/NewCondition",
                    availability: "https://schema.org/InStock",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Scroller />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
