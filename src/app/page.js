import Logo from "@/components/Logo";
import dynamic from "next/dynamic";
import ObjectivesSection from "@/components/ObjectivesSection";
import AboutSection from "@/components/AboutSection";
import BackgroundSection from "@/components/BackgroundSection";
import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/navbar/Navbar";
import { Content } from "@/models/Content";
import { connectDb } from "@/lib/connectDb";
import HeroSection from "@/components/hero-section/HeroSection";
import Footer from "@/components/footer/Footer";

const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default async function Home() {
  await connectDb()
  const data = await Content.findOne()
  const applyLink = JSON.parse(JSON.stringify(data.apply_link))
  const slideShow = JSON.parse(JSON.stringify(data.slide_show))
  
  return (
   <div>
    <Navbar />
     <main className="relative">
      <HeroSection applyLink={applyLink} slideShow={slideShow} />
      {/* <VideoHero/> */}
      <div className="flex flex-col min-h-screen" id="section2">
        <div className="w-full text-start flex flex-col justify-center items-center">
          <AboutSection />
      
          <ObjectivesSection />
          <BackgroundSection />
    
          <Logo />
          <div className="w-full pt-16">
            <hr></hr>
          </div>
          <Contact />
        </div>
      </div>
    </main>
    <Footer />
   </div>
  );
}
