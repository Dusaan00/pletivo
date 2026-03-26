import Sortkarty from "../Components/Sortkarty";
import Over from "../Components/Over";
import All from "../Components/All";

export const metadata = {
  title: "Pletivo Grygov | Pletivo, Panely 3D/2D, Brány, Sloupky",
  description:
    "Kompletní přehled našeho sortimentu: pletiva, panely 3D/2D, sloupky, brány, kompletní příslušenství ke stavbě plotu, mobilní oplocení i montáže plotů na klíč.",
};

export default function Page() {
  return (
    <>
      <Sortkarty />
      <Over />
      <All />
    </>
  );
}
