import BuyVazaci from "../Components/BuyVazaci";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";
import { recvazaciProducts } from "../../data/products/collections";
import DoporuceneProdukty from "../Components/DoporucenePletivo";

export const metadata = {
  title: "Pletivo Grygov - Vázací Dráty",
  description:
    "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
  keywords:
    "sloupky, vzpěry, sloupky zelené, sloupky antracit, sloupky zinkové, vzpěry zelené, vzpěry antracit, vzpěry zinkové, vázací dráty, napínací dráty, ostnanté dráty",
  openGraph: {
    title: "Pletivo Grygov - Vázací Dráty",
    description:
      "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/VazaciDraty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Vázací Dráty",
    description:
      "Sloupky a příslušenství skladem: sloupky a vzpěry (zelené, antracit, pvc, zinkové), napínací dráty, ostnaté dráty, vše důležité pro stavbu plotu.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/VazaciDraty",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <BuyVazaci />
      <DoporuceneProdukty
        title="K vázacímu drátu ještě můžete potřebovat:"
        products={recvazaciProducts}
      />
      <Sortkarty />
      <Pay />
    </>
  );
}
