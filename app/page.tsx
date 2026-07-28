import Scene from "@/components/Scene";
import Ride from "@/components/Ride";
import RideNav from "@/components/RideNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Scene />
      <Ride />
      <RideNav />
      <Hero />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}
