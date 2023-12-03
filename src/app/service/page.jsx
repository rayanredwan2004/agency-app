import AllService from "@/components/AllService";
import Contact from "@/components/Contact";
import IntroLayout from "@/components/IntroLayout";
import NavBar from "@/components/NavBar";

const page = async () => {
  return (
    <>
      <NavBar className="bg-[#F8F9FC]" />
      <IntroLayout pageName={"Our Services"} />
      <AllService />
      <Contact />
    </>
  );
};

export default page;
