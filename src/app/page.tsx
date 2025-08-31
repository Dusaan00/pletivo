import Intro from "./Components/Intro";
import Over from "./Components/Overview";
import Proc from "./Components/Proc";
import Features from "./Components/Features";
import About from "./Components/About";
import Okno from "./functions/Okno";

export default function Home() {
  return (
    <div>
      <Intro />
      <Over />
      <Proc />
      <Features />
      <About />
    </div>
  );
}
