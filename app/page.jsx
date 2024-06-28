import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Model /> */}
      <Features></Features>
      <HowItWorks></HowItWorks>
    </main>
  );
}
