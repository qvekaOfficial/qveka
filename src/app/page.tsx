import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoMarquee from "@/components/VideoMarquee";
import StatsBanner from "@/components/StatsBanner";
import TrustedBy from "@/components/TrustedBy";
import Objectives from "@/components/Objectives";
import FounderStory from "@/components/FounderStory";
import OurServices from "@/components/OurServices";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <VideoMarquee /> */}
      <StatsBanner />
      <TrustedBy />
      <Objectives />
      <FounderStory />
      <OurServices />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}