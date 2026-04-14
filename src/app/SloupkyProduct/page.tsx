import BuySloupky from "../Components/BuySloupky";
import Pay from "../Components/Pay";
import Sortkarty from "../Components/Sortkarty";

export const metadata = {
  title: "Pletivo Grygov - Sloupky PVC",
  description:
    "Sloupky pvc skladem: sloupky poplastované ve velikosti 60x40 a s výškami od 2m do 2.6m, sloupky máme v zelené, antracitové, a zinkové barvě.",
  keywords:
    "plotové sloupky, poplastované sloupky, sloupky pvc, zelené sloupky, antracitové sloupky, panely 3D, panely 2D",
  openGraph: {
    title: "Výroba Pletiva Grygov - Sloupky PVC",
    description:
      "Sloupky pvc skladem: sloupky poplastované ve velikosti 60x40 a s výškami od 2m do 2.6m, sloupky máme v zelené, antracitové, a zinkové barvě.",
    images: [{ url: "/opengraph-image.png" }],
    url: "https://pletivogrygov.cz/SloupkyProduct",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pletivo Grygov - Sloupky PVC",
    description:
      "Sloupky pvc skladem: sloupky poplastované ve velikosti 60x40 a s výškami od 2m do 2.6m, sloupky máme v zelené, antracitové, a zinkové barvě.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://pletivogrygov.cz/SloupkyProduct",
  },
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <BuySloupky />
      <Sortkarty />
      <Pay />
    </>
  );
}
