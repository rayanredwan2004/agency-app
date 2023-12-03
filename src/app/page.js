import Brand from "@/components/Brand";
import Contact from "@/components/Contact";
import FeatureProject from "@/components/FeatureProject";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import WorkList from "@/components/WorkList";

export default function Home() {
  return (
    <div className="bg-green-100">
      <NavBar />
      <Hero />
      <Brand />
      <WorkList />
      <Stats />
      <FeatureProject />
      <Contact />
    </div>
  );
}
