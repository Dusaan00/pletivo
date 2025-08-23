import Intro from "./Components/Intro";
import Over from "./Components/Overview";
import Proc from "./Components/Proc";
import Features from "./Components/Features";
import About from "./Components/About";
import Okno from "./functions/Okno";

export default function Home() {
  return (
    <div>
      <Okno
        title="Do 28.8. 2025 máme zavřeno"
        message="Všechny poptávky, emaily a zprávy začneme vyřizovat 29.8. 2025, děkujeme za pochopení."
      />
      <Intro />
      <Over />
      <Proc />
      <Features />
      <About />
    </div>
  );
}
