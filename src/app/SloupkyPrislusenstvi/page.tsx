import Sloupky from "../Sloupky/Sloupky";

export const metadata = {
  title: "Výroba Pletiva Grygov - Sloupky & příslušenství",
  description:
    "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
  keywords:
    "sloupky, vzpěry, sloupky zelené, sloupky antracit, sloupky zinkové, vzpěry zelené, vzpěry antracit, vzpěry zinkové, vázací dráty, napínací dráty, ostnanté dráty",
  openGraph: {
    title: "Výroba Pletiva Grygov - Sloupky & příslušenství",
    description:
      "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/SloupkyPrislusenstvi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Výroba Pletiva Grygov - Sloupky & příslušenství",
    description:
      "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/SloupkyPrislusenstvi",
  },
  robots: "index, follow",
};

export default function Page() {
  return <Sloupky />;
}
