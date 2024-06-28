import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section2 from "@/components/Section2";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="flex flex-col min-h-screen" id="section2">
        <div className="w-full text-start flex flex-col justify-center items-center">
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <div className="container pt-16">
            <hr></hr>
          </div>
          <Logo />
          <div className="container pt-16">
            <hr></hr>
          </div>
          <Contact />
        </div>
      </div>
    </main>
  );
}
