import React, { useEffect } from "react";
import { body } from "./theme";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import ScrollRuler from "./components/ui/ScrollRuler";
import SectionNav from "./components/ui/SectionNav";
import KonamiEgg from "./components/ui/KonamiEgg";

export default function App() {
  useEffect(() => {
    console.log(
      "%cHi, curious developer! 👋",
      "font-size:18px;font-weight:bold;color:#7DD3FC;"
    );
    console.log(
      "%cLooks like you're inspecting the code — I like that.\nLet's talk: akbarnaser24@gmail.com\nGitHub: github.com/Sunnyday-Spring\n\n(psst — there's a Konami code hidden on this page 👀)",
      "font-size:13px;color:#F5A623;line-height:1.6;"
    );
  }, []);

  return (
    <div style={body} className="w-full min-h-screen">
      <ScrollRuler />
      <SectionNav />
      <KonamiEgg />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
    </div>
  );
}
