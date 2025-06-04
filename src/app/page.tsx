import Image from "next/image";
import Intro from "./Components/Intro";
import Over from "./Components/Overview";
import Proc from "./Components/Proc";
import Features from "./Components/Features";
import About from "./Components/About";

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
