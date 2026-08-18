import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Header />
      <Portfolio />
      <Services />
      <Team />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
