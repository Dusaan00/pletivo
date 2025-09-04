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
        title="Od 4.9. do 9.9. 2025 máme zavřeno, děkujeme za pochopení"
        message="Všechny přijaté poptávky začneme zpracovávat 10.9. 2025."
      />
      <Intro />
      <Over />
      <Proc />
      <Features />
      <About />
    </div>
  );
}
