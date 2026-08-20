import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

