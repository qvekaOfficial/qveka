import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoMarquee from "@/components/VideoMarquee";
import StatsBanner from "@/components/StatsBanner";
import TrustedBy from "@/components/TrustedBy";
import WorkTeaser from "@/components/WorkTeaser";
import Objectives from "@/components/Objectives";
import FounderStory from "@/components/FounderStory";
import OurServices from "@/components/OurServices";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Purely static marketing page: prerendered once at build, served from
// CDN with `s-maxage=31536000` (Next default). 500 visitors = 0 function
// invocations. Contact form POSTs to /api/contact only on submit.
export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <VideoMarquee /> */}
      <StatsBanner />
      <TrustedBy />
      <WorkTeaser />
      <Objectives />
      {/* <FounderStory /> */}
      <OurServices />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}