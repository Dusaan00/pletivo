import type { Metadata } from "next";
import CartPageClient from "../Components/CartPageClient";

export const metadata: Metadata = {
  title: "Košík | Pletivo Grygov",
  description: "Kontrola vybraného zboží před dokončením objednávky.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <CartPageClient />;
}
