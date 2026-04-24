import type { Metadata } from "next";
import CheckoutPageClient from "../Components/CheckoutPageClient";

export const metadata: Metadata = {
  title: "Pokladna | Pletivo Grygov",
  description: "Dokončení objednávky materiálu z e-shopu Pletivo Grygov.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <CheckoutPageClient />;
}
