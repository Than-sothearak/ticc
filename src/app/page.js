import Header from "@/components/Header";
import Logo from "@/components/Logo";
import dynamic from "next/dynamic";
import ObjectivesSection from "@/components/ObjectivesSection";
import AboutSection from "@/components/AboutSection";
import BackgroundSection from "@/components/BackgroundSection";
import VideoHero from "@/components/VideoHero";
import Navbar from "@/components/navbar/Navbar";

const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Home() {
  

  return (
   <div>
    <Navbar />
     <main className="relative">
      <Header />
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
   </div>
  );
}
