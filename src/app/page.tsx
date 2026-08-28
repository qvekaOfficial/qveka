import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoMarquee from "@/components/VideoMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <VideoMarquee />
      <About />
      <Services />
      <Work />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}