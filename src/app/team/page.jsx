import Contact from "@/components/Contact";
import IntroLayout from "@/components/IntroLayout";
import NavBar from "@/components/NavBar";
import { TeamList } from "@/components/TeamList";

const page = () => {
  return (
    <>
      <NavBar className="bg-[#F8F9FC]" />
      <IntroLayout pageName={"Team"} />
      <TeamList />
      <Contact />
    </>
  );
};

export default page;
