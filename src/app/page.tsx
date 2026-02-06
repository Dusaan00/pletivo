import Intro from "./Components/Intro";
import Over from "./Components/Overview";
import Doprava from "./Components/Doprava";
import Pay from "./Components/Pay";
import Proc from "./Components/Proc";
import Features from "./Components/Features";
import About from "./Components/About";
import SortKarty from "./Components/Sortkarty";

// import Akce from "./Components/Akce";

export default function Home() {
  return (
    <div>
      <Intro />
      <SortKarty />
      <Over />
      <Doprava />
      <Pay />
      <Proc />
      <Features />
      <About />
    </div>
  );
}
