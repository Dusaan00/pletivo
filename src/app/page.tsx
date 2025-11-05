import Intro from "./Components/Intro";
import Over from "./Components/Overview";
import Proc from "./Components/Proc";
import Features from "./Components/Features";
import About from "./Components/About";
import Akce from "./Components/Akce";

export default function Home() {
  return (
    <div>
      <Akce />
      <Intro />
      <Over />
      <Akce />
      <Proc />
      <Features />
      <About />
    </div>
  );
}
